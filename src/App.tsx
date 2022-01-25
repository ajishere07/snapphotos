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
      <Routes>
        <Route path="/enter" element={<Authentications />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/albums" element={<Albums />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
