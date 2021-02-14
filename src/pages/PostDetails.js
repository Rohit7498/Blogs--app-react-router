import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom';
import './style.css';

export default function PostDetails({match}) {

    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(()=>false);

    useEffect(()=>{

        fetchSpecificPost();
        fetchComments();

    }, []);

    const fetchSpecificPost = async ()=>{
        try {
            const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`);
            const singlePost = await data.json();
            console.log(singlePost);
            setPost(singlePost);        
        } catch (error) {
            console.log(error);            
        }
        
    }

    const fetchComments = async ()=>{
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}/comments`);
        const comments = await data.json();
        console.log(comments);
        setComments(comments);

    }

    const handleClick = ()=>{
        setShowComments(prevShowComments => !prevShowComments);
    }

    const renderComments = ()=>{
        return (
            <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Comment</th>
                    </tr>
                </thead>
                <tbody>
                    {comments.map(comment=>(
                        <tr key={comment.id}>
                            <td>{comment.name}</td>
                            <td>{comment.email}</td>
                            <td>{comment.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </>
        )
    }
    const handleDelete = async ()=>{
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`,
                                {method:'DELETE'});
        console.log(data);
        const resp = await data.json();
        console.log(resp);
    }


    return (
        <div>
            <h1>Post {post.id} details</h1>

            <br />
 
            <article>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </article>
            <button onClick={handleClick} >{!showComments ? 'Show Comments' : 'Hide Comments'}</button>
            <Link to={`/${post.userId}`}><button onClick={handleDelete} >Delete</button></Link>

            
            {showComments && renderComments()}

        </div>
    )
}
