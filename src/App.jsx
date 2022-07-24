import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/footer/Footer.jsx"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
