import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Services from "./components/Services";

function App() {
 
  return (
    <>  
    <BrowserRouter>
    <Navbar/>
    <Routes> 
      <Route path='./' element={<Home/>}/> 
      <Route path='./about' element={<About/>}/>  
      <Route path='./contact' element={<Contact/>}/> 
      <Route path='./services' element={<Services/>}/>

    </Routes> 
    </BrowserRouter>
    </>
  )
   
}

export default App