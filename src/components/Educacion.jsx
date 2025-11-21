// src/components/Educacion.jsx
import React from "react";

export default function Educacion({ items }) {
  return (
    <section>
      <h2>Educación</h2>
      <ul>
        {items.map((f, idx) => (
          <li key={idx}><strong>{f.institucion}</strong> — {f.titulo} ({f.año})</li>
        ))}
      </ul>
    </section>
  );
}
