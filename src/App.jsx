import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/footer/Footer"
import ContactPage from "./pages/ContactPage/ContactPage";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const App = () => {
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