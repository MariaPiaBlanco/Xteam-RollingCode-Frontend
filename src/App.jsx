import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import HomePage from "./pages/HomePage/HomePage";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import Footer from "./components/footer/Footer";
import ContactPage from "./pages/ContactPage/ContactPage";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
