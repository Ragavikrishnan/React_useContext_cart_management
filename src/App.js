import React, { createContext, useState } from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ViewCart from './Components/Cart'
export const CreateContext = createContext();

const App = () => {
  const [cart, setCart] = useState([])
  return (
    <CreateContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        <Header cart={cart} />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<ViewCart />} />
          </Routes>

        </div>
      </BrowserRouter>
    </CreateContext.Provider>

  )
}

export default App