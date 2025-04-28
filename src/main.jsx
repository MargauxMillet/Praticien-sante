import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { BurgerMenuProvider, HeaderProvider, WindowProvider } from './context/index.jsx'
import App from './App.jsx'
import './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <WindowProvider>
          <HeaderProvider>
            <BurgerMenuProvider>
              <App />
            </BurgerMenuProvider>
          </HeaderProvider>
      </WindowProvider>
    </Router>
  </StrictMode>,
)