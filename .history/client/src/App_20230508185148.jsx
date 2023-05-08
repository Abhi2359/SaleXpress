
import {Routes,Route} from "react-router-dom"
import Homepage from "./pages/HomePage"
import About from "./pages/About"
import Policy from "./pages/Policy"
function App() {
  
  return (
    <>
    
<Routes>
  <Route path='/' element={<Homepage/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<About/>}/>
  <Route path='/policy' element={<Policy/>}/>
  <Route path='/policy' element={<PageNotFound/>}/>

</Routes>
    
  
    </>
  )
}

export default App
