import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BlackDispaly  from './components/BlackDispaly'

function App() {
  const [display, setDisplay] = useState(true);
  return (
    <>
      <h1>App - Root Component.</h1>
      <BlackDispaly />
    </>
  )
}




export default App; // Main component

