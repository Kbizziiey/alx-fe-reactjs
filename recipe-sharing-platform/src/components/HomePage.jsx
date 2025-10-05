import React from "react"; 
import { useState, useEffect } from "react";  
import { Link } from "react-router-dom";

const HomePage = () => { 
    const [data, setData] = useState([]);  
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null)
    
    //useEffect to fetch the data on mount 
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch('/data.json'); 
                 if(!response.ok){
                     throw new Error('Error loading')
                 } 
                 const jsonData = await response.json(); 
                 setData(jsonData) //set the data in state
             }catch(error){
                 setError(error.message)
             }finally {
                 setLoading(false)
             }
         }; 
         fetchData();
     }, []); 
     if(loading) {
         return <div>Loading...</div>
     }
     if(error){
         return <div>Error: {error}</div> }  


    return(
        <div>  
        
           
            <h1 className="text-6xl text-center italic font-bold text-cyan-600 mb-4">Recipe Sharing</h1>   
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-pink-200  " >{data.map((item) => (
                <div key={item.id} className=" flex flex-col items-start sm:items-center w-full sm:w-1/2  p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-pink-100 transition-all duration-300 ">
                    <h2 className="text-xl font-bold mb-2 sm:text-lg">{item.title}</h2> 
                    <p className="text-gray-600">{item.summary}</p> 
                    <img src={item.imageUrl} alt={item.title} className="w-full sm:w-40 h-32 object cover mb-4 sm:mb-0 sm:mr-4 rounded-lg"/>
                </div>
            ))}</ul> 
            
        </div>
    )

}
export default HomePage;