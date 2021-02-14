import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import './style.css';

  

export default function AllPosts() {
    const [posts, setPosts] = useState([]);
    

    useEffect(()=>{
        fetchPosts();
    }, []);

    const fetchPosts = async ()=>{
        try {
            const data = await fetch('https://jsonplaceholder.typicode.com/posts');
            const posts = await data.json();
            console.log(posts);
            setPosts(posts);    
        } catch (error) {
            console.log(error);
        }
    }

   

    return (
        <div>
            <h1>All Posts</h1>

            <br /><br />
            <p><b>*Use Post No. Link to go to details</b></p>


            <table>
                <thead>
                    <tr>
                        <th>Post No.</th>
                        <th>Post Tiltle</th>
                        <th>Post Details</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post=>(
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td><Link id="links" to={`/posts/${post.id}`}>Go to post {post.id}</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
    )
}

