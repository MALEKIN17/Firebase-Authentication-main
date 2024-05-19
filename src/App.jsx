import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Menu from "./pages/menu";
import Informacion from "./pages/informacion";
import Perfil from "./pages/perfil";
import Producto from "./pages/producto";
import Nosotros from "./pages/nosotros";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/informacion" element={<Informacion />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/producto" element={<Producto />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
