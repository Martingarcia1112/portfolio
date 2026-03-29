import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.scss'
import App from './App'

/**
 * Punto de entrada: monta React en #root y activa StrictMode en desarrollo
 * (avisos extra por APIs obsoletas o efectos duplicados).
 */
const rootEl = document.getElementById('root')
if (!rootEl) {
  throw new Error('No se encontró #root en index.html')
}

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
