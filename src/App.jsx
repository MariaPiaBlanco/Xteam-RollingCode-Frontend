import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import Footer from "./components/footer/Footer";
import HighLightPage from "./pages/highLightPage/HighLightPage";
import ContactPage from "./pages/contactPage/ContactPage";
import SocialContact from "./components/SocialContact/SocialContact.jsx";
import ErrorPage from "./pages/errorPage/ErrorPage.jsx";
import AdminPage from "./pages/adminPage/AdminPage.jsx";
import HomePage from "./pages/homePage/HomePage.jsx";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import UpdateCategorie from "./pages/updateCategorie/UpdateCategorie.jsx";
import UpdateGame from "./pages/updateGame/UpdateGame.jsx";
import LoginSucces from "./pages/logingSucces/LoginSucces";
import RegisterSucces from "./pages/registerSucces/RegisterSucces.jsx";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <SocialContact />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/highlightpage/:id" element={<HighLightPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/updateCategorie/:id" element={<UpdateCategorie />} />
          <Route path="/admin/updateGame/:id" element={<UpdateGame />} />
          <Route path="/loginsucces" element={<LoginSucces />} />
          <Route path="/registersucces" element={<RegisterSucces />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
