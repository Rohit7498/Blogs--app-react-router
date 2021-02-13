import React, { useState, useEffect } from 'react'
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
        
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`);
        const singlePost = await data.json();
        console.log(singlePost);
        setPost(singlePost);        

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


    return (
        <div>
            <h1>Post {post.id} details</h1>

            <br />
 
            <article>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </article>
            <button onClick={handleClick} >{!showComments ? 'Show Comments' : 'Hide Comments'}</button>

            
            {showComments && renderComments()}

        </div>
    )
}
