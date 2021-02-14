import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './style.css'
import TextField from '@material-ui/core/TextField';

export default function Posts({ match }) {
    
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async ()=>{
        try {
            const data = await fetch(`https://jsonplaceholder.typicode.com/users/${match.params.id}/posts`);
            const userPosts = await data.json();
            
            //console.log(Object.prototype.toString.call(posts));
            console.log(userPosts);
            setPosts(userPosts);
            setFilteredPosts(userPosts);    
        } catch (error) {
            console.log(error);    
        }
        
    }

    const filterPosts = (e)=>{
        let curPostText = e.target.value;
        let curFilteredPosts = posts;
        if(curPostText.length > 0){
            const regex = new RegExp(`^${curPostText}`, 'i');
            curFilteredPosts = posts.sort().filter(post=>regex.test(post.title));
        }
        setFilteredPosts(()=>curFilteredPosts);
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
            <p><b>*Use Pagination or link to go to post details</b></p>

            <TextField id="standard-basic" label="Post Title" onChange={filterPosts} />

            <table>
                <thead>
                    <tr>
                        <th>Post No.</th>
                        <th>Post Tiltle</th>
                        <th>Post Details</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPosts.map(post=>(
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
