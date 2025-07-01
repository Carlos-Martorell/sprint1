EJERCICIO DE MAQUETACIÓN SPRINT 1

Este proyecto contiene tres ramas con diferentes estilos de maquetación: Vanilla(HTML/CSS), Sass y Tailwind, estructurado con Gitflow.

Revisión trás finalizar rama SASS:

## Estructura Sass · Sprint 1

La rama `sass` del proyecto está organizada de forma modular utilizando Live Sass Compiler en Visual Studio Code para la compilación. No se usan herramientas como Vite o Webpack.

/sass
├── abstracts/       → Variables , placeholders y mixins.
├── components/      → Secciones individuales: `questions`, `extensions` y `footer`.
└── main.scss        → Archivo central que importa todos los parciales con @use.
