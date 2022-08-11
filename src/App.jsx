import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import Footer from "./components/footer/Footer";
import Favorites from "./pages/Favorites/Favorites";
import HighLightPage from "./pages/HighLightPage/HighLightPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import SocialContact from "./components/SocialContact/SocialContact";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import AdminPage from "./pages/adminPage/AdminPage.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import HomePage from "./pages/HomePage/HomePage.jsx";
import InicioPage from '../src/pages/inicioPage'

const App = () => {
  const [videoLoader, setVideoLoader] = useState(true)
  setTimeout(()=>{
   setVideoLoader(false)
  },10500)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <SocialContact />
        <Routes>
          <Route path="/" element={ videoLoader ? <InicioPage /> : <HomePage />} />
          <Route path="/highlightpage/:id" element={<HighLightPage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
