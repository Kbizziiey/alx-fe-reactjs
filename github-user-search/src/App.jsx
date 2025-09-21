import {BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom' 
import SearchUsers from './components/Search';
const Home = () => <h1>Welcome Home</h1> 
  const GithubApi = () => {
    const apiKey = process.env.REACT_APP_GITHUB_API_KEY; 
    return(
      <div>
      <h1>Github API key</h1> 
      <p>{apiKey ?  apiKey : "Github Api key is not found"}</p>
    </div>
    )
  }
  

function App() { 
  
  return (
    <> 
    <Router> 
      <nav>
        <ul>
          <li style={{padding: "16px"}}>
            <Link to="/">Home</Link> 
            {/* <Link to="/github-api">Github-Api</Link> */} 
            <Link to="/search">Search for users</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        {/* <Route path="/github-api" element={<GithubApi/>}/> */} 
        <Route path="/search" element={<SearchUsers/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
