import Home from "./Pages/Home Page/Home";
import { slides } from "./data.json";
import { Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import Duties from "./Pages/ServiceCompo/Duties";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home data={slides} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Duties />} />
      </Routes>
    </>
  );
}

export default App;
