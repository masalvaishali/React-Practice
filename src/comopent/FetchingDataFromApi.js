import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchingDataFromApi() {
  // const [posts, setPosts] = useState([])
  const [post, setPost] = useState({}); // { means initially set empty object }
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);


  useEffect(() => {
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res);
        // setPosts(res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]); // [] this array is dependence array here dependancy is on id 
 
  const handelClick= ()=>{
    setIdFromButtonClick(id)
  }
  return (
    <div>
      <h2>FetchingDataFromApi</h2>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handelClick}>Fetch Post</button>
      <div>{post.title} </div>
      {/* //for all posts */}
      {/* <ul>
      {posts.map(post => 
     ( <li key= {post.id}>{post.title} </li>))}
    </ul> */}
    </div>
  );
}

export default FetchingDataFromApi;
