import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import './style.css';


export default function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetchPosts();
    }, []);

    const fetchPosts = async ()=>{
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await data.json();
        console.log(posts);
        setPosts(posts);
    }

   

    return (
        <div>
            <h1>All Posts</h1>
            
            {/* <Pagination count={11} defaultPage={6} siblingCount={0} />
            

            <div className="pagination">
                <a href="#">&laquo;</a>
                {posts.map(post=>(
                    <Link id="links" key={post.id} to={`/posts/${post.id}`}>{post.id}</Link>
                ))}
                <a href="#">&raquo;</a>
            </div> */}


            <br /><br />
            <p><b>*Use Post No. Link to go to details</b></p>
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
                            <td><Link id="links" to={`/posts/${post.id}`}>{post.id}</Link></td>
                            <td>{post.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
    )
}



{/* <TablePagination
      component="div"
      count={100}
      page={page}
      onChangePage={handleChangePage}
      rowsPerPage={rowsPerPage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    /> */}