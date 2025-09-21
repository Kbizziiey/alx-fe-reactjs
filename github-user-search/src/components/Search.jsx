import React from "react"; 
import { useState } from "react";  
import { fetchUserData } from "../services/githubService";

const SearchUsers = () => {  
    // const [username, setUsername] = useState(""); 
    const [userData, setUserData] = useState(null); 
    const [loading, setloading] = useState(false); 
    const [error, setError] = useState(""); 
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setloading(true); 
        setError(""); 
        setUserData(null)   
        
        const username = e.target.elements.username.value; 
        const location = e.target.elements.location.value; 
        const minRepos = e.target.elements.minRepos.value;


        try{
            const data = await fetchUserData(username, location, minRepos); 
            console.log(data)
            setUserData(data)
            
        }catch(err){
            setError("Looks like we cant find the user")
        }finally{
            setloading(false)
        }
    } 
    // const handleChange = (e) => { 
    //     setUsername(e.target.value)
        
   // } 
    return (
        <div className="container mx-auto px-4 py-7">
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 shadow-md rounded-lg"> 
                <label className="block font-bold mb-2 text-sm">Enter a username</label> 
                <input type="text" name="username" id="username"  placeholder="Enter github username" />   
                <label className="block font-bold mb-2 text-sm">Enter Location</label>
                <input type="text" name="location" id="location" />  
                <label className="block font-bold mb-2 text-sm">Enter min repos</label>
                <input type="text" name="minRepos" id="minRepos" />
                <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none">Submit</button> 
                {loading && <p>Loading...</p>} 
                {error && <p>{error}</p>}   
                {Array.isArray(userData) && userData.length > 0 && (
       userData.map((user) => (
           <div key={user.id}> 
               <h3>Username: {user.login}</h3> 
               <p>Location: {user.location}</p> 
               <img src={user.avatar_url} alt={user.login} /> 
               <p>Public Repositories: {user.public_repos}</p> 
               <p>Profile: <a href={user.html_url} target="_blank" rel="noopener noreferrer">View profile</a></p>
           </div>
       ))
   )}
                {/* {userData ? (
                    <div>
                        <h2>Github User Information</h2>  
                        <img src={userData.avatar_url} /> 
                        <p>Username:{userData.login}</p> 
                        <p>Profile: <a href={userData.html_url} target="blank" rel="noopener noreferrer">View profile</a></p>
                    </div>
                )
                : <p>Looks like we cannot find the user</p> } */}

            </form>
        </div>
    )
    
            
            
       
} 
export default SearchUsers;