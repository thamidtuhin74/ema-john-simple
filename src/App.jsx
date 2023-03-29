import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/Header.jsx'
import Shop from './component/Shop/Shop'
import SingleProduct from './component/SingleProduct/SingleProduct'

function App() {
  

  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      
    </div>
  )
}

export default App
