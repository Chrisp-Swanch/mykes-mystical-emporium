import { createRoot } from 'react-dom/client'

import App from './components/App'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './styles/index.scss'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <RouterProvider router={router} />
  )
})
