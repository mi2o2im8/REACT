import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home'
// import './index.css'
import App from './App'
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <Home></Home>
    </BrowserRouter>
  </StrictMode>,
)
