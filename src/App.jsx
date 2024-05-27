import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<div>Sorry You are at Wrong place</div>} />
          <Route path="/" element={<Home />} />
          <Route path="/Starred" element={<Starred />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
