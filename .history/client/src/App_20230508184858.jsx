import { useState } from 'react'


import {Routes,Route} from "react-router-dom"
import Homepage from "./pages/HomePage"
import About from "./pages/About"
function App() {
  
  return (
    <>
    
<Routes>
  <Route path='/' element={<Homepage/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<About/>}/>
  <Route path='/a' element={<About/>}/>
</Routes>
    
  
    </>
  )
}

export default App
