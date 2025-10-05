import React from 'react' 
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
const RecipeDetail = () => { 
    const {id} = useParams(); 
    const [recipe, setRecipe] =useState(null);
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState(null)
     useEffect(() => { 
        const fetchRecipe = async  () => { 
            try{
                const response = await fetch('/data.json');  
                if(!response.ok){
                    throw new Error("No recipe found")
                }
                const data = await response.json(); 
                const recipeData = data.find((item) => item.id === parseInt(id)); 
                setRecipe(recipeData)
            }catch(error){
                setError(error.message)
            }finally{
                setLoading(false)
            }
            
        }; 
        fetchRecipe();
        
}, [id])   
      if(loading){
        return<div>Loading...</div>
      }
      if(!recipe){
        return <div>Recipe not found</div>
      }
        
    
    
  return (
    <div className='p-6 bg-pink-100'>
        <h1 className='text-4xl font-bold mb-4 italic text-cyan-600 hover:underline '>{recipe.title}</h1> 
        <img src={recipe.imageUrl} alt={recipe.title} className=' h-64 object-cover rounded-lg mb-4 shadow-md hover:shadow-xl'/> 
        <p className=' text-lg mb-4 italic' >{recipe.summary}</p> 
        <h2 className='text-2xl font-bold mb-2 text-red-500 italic'>Ingredients:</h2> 
        <ul className='list-disc list-inside mb-4'> 
            {recipe.ingredients.map((ingredient , index) => (
                <li key={index}>{ingredient}</li>
            ))}

        </ul> 
        <h2 className='text-2xl font-bold mb-2 text-red-500 italic'>Instructions:</h2> 
        <p>{recipe.instructions}</p>

        
    </div> 
   
  )
}

export default RecipeDetail