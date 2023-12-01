import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

/* import './App.css'; */
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './components/pages/HomePage';
import NovedadesPage from './components/pages/NovedadesPage';
import InmueblesPage from './components/pages/InmueblePage';
import CasasPage from './components/pages/CasasPage';
import DeptoPage from './components/pages/DeptoPage';
import ContactoPage from './components/pages/ContactoPage';


function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Novedades" element={<NovedadesPage />} />
          <Route path="/Inmueble" element={<InmueblesPage />} />
          <Route path="/Casas" element={<CasasPage />} />
          <Route path="/Depto" element={<DeptoPage />} />
          <Route path="/Contacto" element={<ContactoPage />} />
          
        </Routes>

      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
