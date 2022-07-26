import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/footer/Footer.jsx"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
  return (
    <>
     <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;