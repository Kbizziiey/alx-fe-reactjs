import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'  
import Home from './components/Home'
import Profile from './components/Profile' 
import ProfileDetails from './components/ProfileDetails' 
import ProfileSettings from './components/ProfileSettings' 
import UserProfile from './components/UserProfile'
import ProtectedRoute from './components/ProtectedRoute' 
["/blog/:id", "BlogPost"]
function App() {
  

  return (
    <> 
    <Router>
      <nav>
        <ul>
          <Link to='/profile'>Profile</Link>
        </ul>
      </nav> 
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}> 
        <Route path='details' element={<ProfileDetails/>}/> 
        <Route path='settings' element={<ProfileSettings/>}/> 

        </Route> 
        <Route path='user/:userid' element={<UserProfile/>}/>
      </Routes>
    </Router>
     
        
      
    </>
  )
}

export default App
