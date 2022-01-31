import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router";
import Home from "./pages/Home";
import Albums from "./pages/Albums";
import Authentications from "./pages/Authentications";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "./configuration/firebase/firebase";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { authenticated } from "./features/Authentications/userCredentialsSlice";
import ProtectedRoute from "./components/protected_route/ProtectedRoute";
import Navbar from "./components/header/Navbar";

import Help from "./components/help/Help";

function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { userAuthenticated } = useAppSelector((state) => state.credentials);
  console.log(userAuthenticated);
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
      <div className="pt-10 bg-primary  max-w-6xl mx-auto my-0 min-h-screen px-8 relative">
        <Routes>
          <Route path="/enter" element={<Authentications />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/albums" element={<Albums />} />
          </Route>
        </Routes>
        {location.pathname !== "/enter" && <Help />}
      </div>
    </div>
  );
}

export default App;
