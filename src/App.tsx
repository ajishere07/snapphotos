import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Albums from "./pages/Albums";
import Authentications from "./pages/Authentications";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "./configuration/firebase/firebase";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { authenticated } from "./features/Authentications/userCredentialsSlice";
import ProtectedRoute from "./components/protected_route/ProtectedRoute";
import Navbar from "./components/header/Navbar";

function App() {
  const dispatch = useAppDispatch();
  const { userAuthenticated } = useAppSelector((state) => state.credentials);

  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(authenticated(user));
      setLoading(false);
      console.log(user);
    });
  }, []);
  if (loading) <div>Loading</div>;
  return (
    <div>
      <Navbar />
      <div className="pt-8 max-w-6xl mx-auto my-0 min-h-screen px-8">
        <Routes>
          <Route path="/enter" element={<Authentications />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/albums" element={<Albums />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
