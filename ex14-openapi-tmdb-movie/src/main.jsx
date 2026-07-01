import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PageRouter from './router/PageRouter'
import './index.css'

import Home from './page/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageRouter></PageRouter>
  </StrictMode>,
)
