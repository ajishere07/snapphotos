import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Albums from "./pages/Albums";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums" element={<Albums />} />
      </Routes>
    </div>
  );
}

export default App;
