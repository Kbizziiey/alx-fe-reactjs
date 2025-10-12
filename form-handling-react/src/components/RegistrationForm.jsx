import React from "react"; 
import { useState } from "react"; 
function RegistrationForm(){
    const [username, setUserName] = useState(''); 
const [email, setEmail] = useState('');
const [password, setPassword] = useState(''); 
const [errorMessage, setErrorMessage] = useState(''); 

const handleSubmit = (e) => {
    e.preventDefault(); 
    ["if (!username", "if (!email)", "if (!password)", "setErrors"] 
    setErrorMessage("All fields are required")
    console.log('Form submitted', {username, email, password})
} 

return(
    <div>
        <h2>User Registration Form</h2> 
        <form onSubmit={handleSubmit}> 
            <div>
                <label>Username:</label> 
                <input type="text" value={username} onChange={(e) => {
                    setUserName(e.target.value)
                }}required/>
            </div> 
            <div>
                <label>Email:</label> 
                <input type="email" value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }}required/>
            </div> 
            <div>
                <label>Password:</label> 
                <input type="password" value={password} onChange={(e) => {
                    setPassword(e.target.value)
                }}required/>
            </div> 
            {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>} 
            <button type="submit">Register</button>

        </form>
    </div>
) 

}

export default RegistrationForm;
