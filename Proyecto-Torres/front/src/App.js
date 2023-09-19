import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";

import './App.css';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './components/pages/HomePage';
import EmpresaPage from './components/pages/EmpresaPage';
import InmueblesPage from './components/pages/InmueblePage';
import CasasPage from './components/pages/CasasPage';
import DeptoPage from './components/pages/DeptoPage';
import ReservaPage from './components/pages/ReservaPage';


function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Empresa" element={<EmpresaPage />} />
          <Route path="/Inmueble" element={<InmueblesPage />} />
          <Route path="/Casas" element={<CasasPage />} />
          <Route path="/Depto" element={<DeptoPage />} />
          <Route path="/Reserva" element={<ReservaPage />} />
          
        </Routes>

      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
