import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './component/footer/Footer'
import Router from './component/router/Router'
import Header from './component/header/Header'

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className=''>
        <Router cart={cart} setCart={setCart}/>
    </div>
  )
}

export default App
