
import {Routes,Route} from "react-router-dom"
import Homepage from "./pages/HomePage"
import About from "./pages/About"
import Policy from "./pages/Policy"
import PageNotFound from "./pages/PageNotFound"
import Contact from "./pages/Contact"
import Register from "./pages/Auth/Register"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  
  return (
    <>
    
<Routes>
  <Route path='/' element={<Homepage/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/policy' element={<Policy/>}/>
  <Route path='*' element={<PageNotFound/>}/>

</Routes>
    
  
    </>
  )
}

export default App
