import { useState } from 'react'


import {Routes,Route} from "react-router-dom"
import Homepage from "./pages/HomePage"
import  from "./pages/"
function App() {
  
  return (
    <>
    
<Routes>
  <Route path='/' element={<Homepage/>}/>
  <Route path='/about' element={<About/>}/>
</Routes>
    
  
    </>
  )
}

export default App
