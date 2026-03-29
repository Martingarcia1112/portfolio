# Portfolio — Martín García

Sitio personal estático: **React 19**, **TypeScript**, **Vite 8** y **SCSS**. UI principal en `Portfolio.tsx` + `Portfolio.module.scss`; textos en `src/data/cvContent.ts`.

## Desarrollo local

Requisitos: **Node.js** compatible con Vite 8 (`^20.19.0` o `>=22.12.0`). Con [Volta](https://volta.sh/) el proyecto ya declara la versión en `package.json`.

```bash
npm install
npm run dev
```

Otros scripts:

- `npm run build` — comprobación TypeScript (`tsc -b`) + build de producción en `dist/`
- `npm run preview` — sirve la carpeta `dist` localmente
- `npm run lint` — ESLint
- `npm run typecheck` — solo TypeScript

## Foto de perfil

Añadí tu imagen como **`public/images/profile.jpg`**. Si no existe, el sitio muestra un marco vacío con instrucciones. Más detalle en `public/images/README.md`.

## Despliegue en Vercel (desde GitHub)

1. Subí el repo a GitHub.
2. En [vercel.com](https://vercel.com), **Add New Project** → importá el repositorio.
3. Vercel detecta **Vite**; valores por defecto habituales:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Deploy. Cada push a la rama conectada genera un nuevo despliegue.

El archivo `vercel.json` fija explícitamente framework Vite y los comandos anteriores por si querés consistencia entre entornos.

## Estructura del código (resumen)

| Ruta | Rol |
|------|-----|
| `src/data/cvContent.ts` | CV: textos, `navItems`, experiencia, educación |
| `src/Portfolio.tsx` | Toda la página (header, secciones, footer) |
| `src/Portfolio.module.scss` | Estilos del portfolio |
| `src/hooks/useActiveSection.ts` | Resalta el ítem del menú al hacer scroll |
| `src/hooks/useAmbientPointer.ts` | Halo suave que sigue al puntero |
| `src/styles/` | Variables + `global.scss` |
| `public/images/` | `profile.jpg` y estáticos |
