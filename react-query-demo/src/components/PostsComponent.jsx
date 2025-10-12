import React from "react"; 
import { useQuery } from "react-query"; 

const fetchPosts = async () => {
    const response = await ("https://jsonplaceholder.typicode.com/posts"); 
    if(!response.ok){
        throw new Error('Network response was not ok');
    }return  response.json();
} 
function PostsComponent(){ 
    ["isError", "error","cacheTime", "staleTime", "refetchOnWindowFocus", "keepPreviousData",]
    const {data, isError, isLoading, refetch} = useQuery('posts', fetchPosts); 
    if(isLoading) return <div>Loading...</div>; 
    if(isError) return <div>Error : {isError.message}</div>; 

    return( 
        <div> 
            <button onClick={() => refetch()}>Refetch Data</button>
      <ul>
        {data.map(post => {
            <li key={post.id}>{post.title}</li>
        })}
      </ul> 
      </div>
    )
} 
export default PostsComponent;