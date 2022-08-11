import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import HomePage from "./pages/homePage/HomePage";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import Footer from "./components/footer/Footer";
import ContactPage from "./pages/contactPage/ContactPage";
import HighLightPage from "./pages/highLightPage/HighLightPage";
import Favorites from "./pages/favorites/Favorites";
import SocialContact from "./components/socialContact/SocialContact";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import AdminPage from "./pages/adminPage/AdminPage.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <SocialContact />
        <Routes>
          <Route path="/" element={<HomePage />} />
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
