
import {Routes,Route} from "react-router-dom"
import Homepage from "./pages/HomePage"
import About from "./pages/About"
import Policy from "./pages/Policy"
import PageNotFound from "./pages/PageNotFound"
import Contact from "./pages/Contact"
function App() {
  
  return (
    <>
    
<Routes>
  <Route path='/' element={<Homepage/>}/>
  <Route path='/register' element={<Homepage/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/policy' element={<Policy/>}/>
  <Route path='*' element={<PageNotFound/>}/>

</Routes>
    
  
    </>
  )
}

export default App
