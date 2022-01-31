import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router";
import Home from "./pages/Home";
import Albums from "./pages/Albums";
import Authentications from "./pages/Authentications";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "./configuration/firebase/firebase";

import ProtectedRoute from "./components/protected_route/ProtectedRoute";
import Navbar from "./components/header/Navbar";

import Help from "./components/help/Help";
import SplashPage from "./assets/animations/SplashPage";

function App() {
  const location = useLocation();

  const [user, setUser] = useState<any | null>(null);

  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);
  if (loading) return <SplashPage />;
  return (
    <div>
      <Navbar userCre={user} />
      <div className="pt-10 bg-primary  max-w-6xl mx-auto my-0 min-h-screen px-8 relative">
        <Routes>
          <Route path="/enter" element={<Authentications />} />
          <Route element={<ProtectedRoute userCre={user} />}>
            <Route path="/" element={<Home userCre={user} />} />
            <Route path="/albums" element={<Albums />} />
          </Route>
        </Routes>
        {location.pathname !== "/enter" && <Help />}
      </div>
    </div>
  );
}

export default App;
