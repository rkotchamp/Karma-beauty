import Home from "./Pages/Home Page/Home";
import { slides } from "./data.json";
import { Routes, Route, Link } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home data={slides} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
