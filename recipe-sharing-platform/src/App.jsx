import HomePage from "./components/HomePage"; 
import RecipeDetail from "./components/RecipeDetail";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'; 
import AddRecipeForm from "./components/AddRecipeForm";
function App() {
  

  return ( 
   
    <> 
   
     
     <Router>  
      { <nav>
        <ul className="p-4 text-purple-500 italic"> 
          <Link to = '/'>Home</Link> 
          <Link to ='/add'>Add Recipe</Link>
        </ul>
      </nav> }
      
       <Routes> 
        <Route path ='/' element={<HomePage/>}/>
        <Route path='/recipe/:id' element={<RecipeDetail/>}/> 
        <Route path='/add' element={<AddRecipeForm/>}/>
         
       </Routes>
     </Router> 
    </> 
  )
}

export default App
