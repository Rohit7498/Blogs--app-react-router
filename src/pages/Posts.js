import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './style.css'

export default function Posts({ match }) {
    
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async ()=>{
        
        const data = await fetch(`https://jsonplaceholder.typicode.com/users/${match.params.id}/posts`);
        const userPosts = await data.json();
        
        //console.log(Object.prototype.toString.call(posts));
        console.log(userPosts);
        setPosts(userPosts);
    }

    return (
        <div>
            <h1>User {match.params.id} posts </h1>

            <div className="pagination">
                <a href="#">&laquo;</a>
                {posts.map(post=>(
                    <Link id="links" key={post.id} to={`/posts/${post.id}`}>{post.id}</Link>
                ))}
                <a href="#">&raquo;</a>
            </div>
            <br /><br />
            <p><b>*Use Pagination to go to post details</b></p>
            <table>
                <thead>
                    <tr>
                        <th>Post No.</th>
                        <th>Post Tiltle</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post=>(
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
    )
}
