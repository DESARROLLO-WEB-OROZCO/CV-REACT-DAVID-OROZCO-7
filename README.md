📄 CV React – Reutilización de Componentes con Props y Desestructuración
Actividad GA1-220501096-03-AA1-EV07 – SENA 2025

Proyecto desarrollado por David Orozco como parte del programa Desarrollo Web – SENA.

📌 Descripción de la Actividad

En esta actividad se construye una hoja de vida (CV) dinámica y modular, reforzando el uso de:

Componentes reutilizables en React

Props

Desestructuración

Organización de datos en estructuras externas

Buenas prácticas de arquitectura en proyectos React

Versionamiento con Git y GitHub

El objetivo principal es transformar un CV estático en uno totalmente parametrizable, donde todos los datos provienen desde un archivo central (data.js) y se distribuyen a los componentes mediante props.

🧱 Estructura del Proyecto

El proyecto se compone de:

src/
 ├── components/
 │    ├── CabeceraCV.jsx
 │    ├── Perfil.jsx
 │    ├── Experiencia.jsx
 │    └── Educacion.jsx
 ├── data.js
 ├── App.jsx
 └── main.jsx


Cada componente recibe props y aplica desestructuración para mostrar los datos enviados desde App.jsx.

🧬 Datos dinámicos (data.js)

Los datos del CV se centralizan en un archivo externo:

Datos personales

Perfil profesional

Experiencias laborales

Formación académica

Los componentes no tienen información fija, todo se recibe mediante props.

🧩 Componentes con Props Reutilizables
1. CabeceraCV.jsx

Recibe:

nombre

cargo

ciudad

contacto

Desestructuración usada desde las props:

const CabeceraCV = ({ nombre, cargo, ciudad, contacto }) => { ... }

2. Perfil.jsx

Recibe:

resumen profesional

Desestructuración:

const Perfil = ({ resumen }) => { ... }

3. Experiencia.jsx

Recibe:

Un arreglo de experiencias (empresa, cargo, periodo)

Ejemplo:

const Experiencia = ({ experiencias }) => {
  return experiencias.map(...);
};

4. Educación.jsx

Recibe:

Arreglo de estudios y cursos

Desestructuración igual que en Experiencia.

⚙️ Flujo de Integración en App.jsx

App.jsx importa los datos desde data.js:

import { personal, perfilResumen, experiencias, formacion } from "./data.js";


Luego se envían como props a cada componente:

<CabeceraCV {...personal} />
<Perfil resumen={perfilResumen} />
<Experiencia experiencias={experiencias} />
<Educacion formacion={formacion} />


Este proceso garantiza un CV modular, flexible y escalable.

🛠️ Tecnologías Utilizadas

React + Vite

JavaScript moderno (ESModules)

Props y desestructuración

CSS para estilos

Git y GitHub para control de versiones

Visual Studio Code

✔️ Requisitos Cumplidos
Requisito	Estado
Componentes reutilizables	✔️
Uso correcto de props	✔️
Desestructuración aplicada	✔️
Datos centralizados en data.js	✔️
4 componentes funcionales	✔️
Readme documentado	✔️
Mínimo 7 commits	✔️
📚 Historial de Commits Recomendados

refactor: extracción de datos personales en App.jsx (data.js)

feat: componente CabeceraCV recibe props

feat: desestructuración implementada en CabeceraCV

feat: componente Perfil dinámico con props

feat: mapeo de Experiencia desde arreglo en App.jsx

feat: componente Educación con desestructuración

docs: actualización completa del README

🚀 Ejecución del proyecto
Instalar dependencias
npm install

Ejecutar en modo desarrollo
npm run dev

Construir para producción
npm run build

🏁 Resultado Final

Un CV digital totalmente modular, dinámico y extensible, construido con React utilizando los principios modernos de reutilización de componentes.
![alt text](CAPTURAS/image.png)

✒️ Autor

David Orozco
Aprendiz – Desarrollo Web SENA
2025