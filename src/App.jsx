// src/App.jsx
import React from "react";
import { personal, perfilResumen, experiencias, formacion } from "./data";
import CabeceraCV from "./components/CabeceraCV";
import Perfil from "./components/Perfil";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";

function App() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "1rem" }}>
      <CabeceraCV {...personal} />
      <Perfil resumen={perfilResumen} />
      <Experiencia items={experiencias} />
      <Educacion items={formacion} />
    </div>
  );
}

export default App;
