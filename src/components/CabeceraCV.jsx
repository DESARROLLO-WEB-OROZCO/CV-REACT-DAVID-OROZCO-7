// src/components/CabeceraCV.jsx
import React from "react";

export default function CabeceraCV({ nombre, cargo, ciudad, contacto }) {
  return (
    <header style={{ marginBottom: "1rem" }}>
      <h1>{nombre}</h1>
      <h3>{cargo}</h3>
      <p>{ciudad} · {contacto}</p>
    </header>
  );
}
