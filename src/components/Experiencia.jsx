// src/components/Experiencia.jsx
import React from "react";

export default function Experiencia({ items }) {
  return (
    <section>
      <h2>Experiencia</h2>
      {items.map((exp, i) => (
        <div key={i} style={{ marginBottom: "0.8rem" }}>
          <h3>{exp.cargo} <small>— {exp.empresa}</small></h3>
          <p>{exp.periodo}</p>
        </div>
      ))}
    </section>
  );
}
