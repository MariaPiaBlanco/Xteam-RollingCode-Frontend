import { BrowserRouter, Routes, Route } from "react-router-dom";
import {NavbarCustom} from "./components/navbar/Navbar.jsx";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import Footer from "./components/footer/Footer";
import HighLightPage from "./pages/highLightPage/HighLightPage";
import ContactPage from "./pages/contactPage/ContactPage";
import SocialContact from "./components/contact/Contact";
import ErrorPage from "./pages/errorPage/ErrorPage.jsx";
import AdminPage from "./pages/adminPage/AdminPage.jsx";
import HomePage from "./pages/homePage/HomePage.jsx";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import UpdateCategorie from "./pages/updateCategorie/UpdateCategorie.jsx";
import UpdateGame from "./pages/updateGame/UpdateGame.jsx";
import LoginSucces from "./pages/logingSucces/LoginSucces";
import RegisterSucces from "./pages/registerSucces/RegisterSucces.jsx";
import { tokenInvalid } from "./utils/ValidationToken.js";


const App = () => {
  const token = tokenInvalid();
  return (
    <>
      <BrowserRouter>
        <NavbarCustom />
        {/* <SocialContact /> */}
        <Routes>
          <Route path="/highlightpage/:id" element={<HighLightPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={!token.invalidToken ? <Register /> : <HomePage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/admin" element={(token.decode?.admin) ? <AdminPage /> : <ErrorPage />} />
          <Route path="/admin/updateCategorie/:id" element={(token.decode?.admin) ?<UpdateCategorie /> : <ErrorPage />} />
          <Route path="/admin/updateGame/:id" element={(token.decode?.admin) ?<UpdateGame />: <ErrorPage />} />
          <Route path="/loginsucces" element={<LoginSucces />} />
          <Route path="/registersucces" element={<RegisterSucces />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
