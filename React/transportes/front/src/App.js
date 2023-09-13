import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import HomePage from "./components/pages/HomePage";
import ContactoPage from "./components/pages/ContactoPage";
import NosotrosPage from './components/pages/NosotrosPage';
import NovedadesPage from "./components/pages/NovedadesPage";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/nosotros" element={<NosotrosPage />} />
      <Route path="/novedades" element={<NovedadesPage />} />
      <Route path="/contacto" element={<ContactoPage />} />

      </Routes>
      
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
