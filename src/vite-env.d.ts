/// <reference types="vite/client" />

// Declaración para importar módulos SCSS en TypeScript
declare module '*.module.scss' {
  const classes: Readonly<Record<string, string>>
  export default classes
}
