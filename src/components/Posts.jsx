import { useEffect, useState } from "react"
import { getPost } from "../api/GetPostApi"


export const Posts = () => {

  // console.log(getPost());
  

  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const getPostData = async () => {
    try {
      const data = await getPost();
      setPostData(data.data);

      console.log(data.data);
      
    } catch (err) {
      setError(err);
      
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getPostData();
  },[]);

 if(loading) {
    return <div>Loading...</div>
 } else if(error) {
    return <div>${error}</div>
 } else {
  return (
    <ul>
      {
        postData.map((post) => {
          return (
          <li key={post.id}>
            <span>{post.title}</span>
            <p>{post.body}</p>
          </li>
          )
        })
      }
    </ul>
  )
 }
}