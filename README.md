# Game Editor 2D/3D

Un editor web avanzado para crear juegos 2D y 3D, con soporte para assets, sprites, escenas, scripting (C#, JS y más), exportación y temas claro/oscuro.

## Características principales
- Editor visual con lienzo para sprites y escenas
- Gestión de proyectos y assets (imágenes, música, sprites, etc.)
- Scripting por personaje (C#, JS, etc.)
- Editor de escenas (menú, juego, etc.)
- Exportación de proyectos como .zip
- Temas blanco/azul y negro/azul

## Instalación y uso
1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Usa un servidor local para abrir `index.html` (por ejemplo, con `live-server` o similar).

## Estructura
- `src/` - Código fuente React y componentes del editor
- `index.html` - Punto de entrada
- `tailwind.config.js` - Configuración de TailwindCSS

## Próximos pasos
- Integrar editor de código (Monaco)
- Añadir soporte para animaciones y colisiones
- Mejorar la gestión de assets y escenas
- Soporte para 3D (Three.js)
