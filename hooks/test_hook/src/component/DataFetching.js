 import React,{useState,useEffect} from 'react'
 import axios from 'axios'
 
 function DataFetching() {
     const [posts,setPosts] = useState([])

     useEffect(()=>{
         axios.get("https://jsonplaceholder.typicode.com/posts")
         .then( res=>{
             console.log(res);
            //   setPosts(res.data)
            }).catch(err=>console.error(err))
        })
   return (
     <div>
        <ul>
            {
                posts.map(post =><li>
                {post.title} - {post.body}</li>
                )
            }
        </ul>
     </div>
   )
 }
 
 export default DataFetching