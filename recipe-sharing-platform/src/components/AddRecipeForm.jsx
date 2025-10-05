import React from 'react' 
import { useState } from 'react'

const AddRecipeForm = ({addRecipe}) => { 
    const [formData, setFormData] = useState({
        title: '', 
        ingredients:'', 
        steps:''
    }) 
    ["validate", "errors", "setErrors"]
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    } 
    const handleSubmit = (e) => {  
        e.preventDefault(); 
        if(!formData.title || !formData.ingredients || !formData.steps){
            alert("All fields must be filled!"); 
            return
        }addRecipe(formData); 
        setFormData({
            title: '', 
            ingredients:'', 
            steps:''
        });

    }; 
    return(
        <form onSubmit={handleSubmit} className='max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg'> 
        <div className='mb-4'> 
            <label htmlFor='title' className='block text-gray-700 font-bold'>Recipe Title:</label> 
            <input type='text' id='title' name='title' value={formData.title} onChange={handleChange} className='w-full px-3 py-2 border rounded-lg' required/>
             
        </div> 
        <div className='mb-4'> 
            <label htmlFor='ingredients' className='block text-gray-700'>Ingredients:</label> 
            <textarea id='ingredients' name='ingredients' value={formData.ingredients} onChange={handleChange} className='w-full px-3 py-2 border rounded-lg' required/>
             
        </div>
        <div className='mb-4'> 
            <label htmlFor='steps' className='block text-gray-700'>Ingredients:</label> 
            <textarea id='steps' name='steps' value={formData.steps} onChange={handleChange} className='w-full px-3 py-2 border rounded-lg' required/>
             
        </div> 
        <button type='submit' className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700'>
          Add Recipe
        </button>
        </form>
    )

} 
export default AddRecipeForm;