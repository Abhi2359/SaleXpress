import { useState } from 'react'


import {Routes,Route} from "react-router-dom"
import Homepage from "../"
function App() {
  
  return (
    <>
    
<Routes>
  <Route path='/' element={<Homepage/>}/>
</Routes>
    
  
    </>
  )
}

export default App
