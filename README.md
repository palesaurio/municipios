# Buscador de Información Electoral

Esta aplicación permite buscar información electoral a partir de datos extraídos de un PDF. Está construida con Next.js y puede desplegarse fácilmente en Vercel.

## Características

- Lectura y análisis de datos desde archivos PDF
- Búsqueda por distrito, municipio, localidad, sección, etc.
- Interfaz de usuario intuitiva y responsive
- Despliegue sencillo en Vercel

## Requisitos previos

- Node.js 18.x o superior
- npm o yarn
- Cuenta en GitHub
- Cuenta en Vercel

## Configuración local

1. Clona el repositorio:
   \`\`\`bash
   git clone https://github.com/tu-usuario/electoral-pdf-reader.git
   cd electoral-pdf-reader
   \`\`\`

2. Instala las dependencias:
   \`\`\`bash
   npm install
   # o
   yarn install
   \`\`\`

3. Coloca tu archivo PDF en la carpeta `public/municipios/` con el nombre `datos.pdf`

4. Inicia el servidor de desarrollo:
   \`\`\`bash
   npm run dev
   # o
   yarn dev
   \`\`\`

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Despliegue en Vercel

1. Sube tu repositorio a GitHub.

2. Conéctate a [Vercel](https://vercel.com) y crea un nuevo proyecto.

3. Importa tu repositorio de GitHub.

4. Vercel detectará automáticamente que es un proyecto Next.js y configurará el despliegue correctamente.

5. Haz clic en "Deploy" y espera a que se complete el despliegue.

6. ¡Tu aplicación está en línea!

## Estructura del proyecto

- `/app` - Rutas y páginas de la aplicación (Next.js App Router)
- `/components` - Componentes React reutilizables
- `/lib` - Utilidades y funciones auxiliares
- `/public` - Archivos estáticos, incluido el PDF en `/municipios`

## Personalización

Para personalizar la aplicación:

1. Modifica el archivo `lib/pdf-parser.ts` para adaptar la lógica de extracción a tu PDF específico.
2. Ajusta los tipos en `lib/types.ts` según la estructura de tus datos.
3. Personaliza los componentes de UI según tus necesidades.

## Licencia

MIT
\`\`\`

Vamos a crear un archivo .gitignore para el repositorio:

```txt file=".gitignore"
# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
