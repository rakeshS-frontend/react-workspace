import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import './index.css'
import App from './App.jsx'
import { CarComponent } from './components/CarComponent.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <CarComponent price='100' /> */}
  </StrictMode>
)
