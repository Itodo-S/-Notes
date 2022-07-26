import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Notes } from "./pages/Notes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notes" element={<Notes />} />
    </Routes>
  );
}
export default App;
