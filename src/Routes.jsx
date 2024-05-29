import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/AboutUs";
import Contact from "./components/ContactUs";
import BCF from "/Users/dhruvilchodvadiya/eesmodels/src/BCF.jsx"; // Import the BCF component
import Toxicity from "/Users/dhruvilchodvadiya/eesmodels/src/Toxicity.jsx"; // Import the BCF component

const Views = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bcf" element={<BCF />} /> {/* Add the new BCF route */}
        <Route path="/toxicity" element={<Toxicity />} />
      </Routes>
    </>
  );
};

export default Views;
