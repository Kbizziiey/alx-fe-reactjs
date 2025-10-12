import React from 'react' 
import {Outlet, Link} from 'react-router-dom' 
["Routes", "Route", "ProfileDetails", "ProfileSettings"]

function Profile() {
  return ( 
    <div>
    <div>Profile</div> 
    <nav>
    <Link to='settings'>Profile Settings</Link> 
    <Link to='details'>Profile Details</Link>
 </nav> 
 <Outlet/>
 </div>
  )
}

export default Profile