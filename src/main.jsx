import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppProvider } from './Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
    <Router>
      <App />
    </Router>
    </AppProvider>
  </StrictMode>,
)
