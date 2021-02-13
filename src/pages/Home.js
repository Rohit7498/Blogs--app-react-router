import React, { useState, useEffect } from 'react'
import './style.css';
import { Link } from 'react-router-dom';

export default function Home() {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetchUsers();
    }, []);//on mount

    const fetchUsers = async ()=>{
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await data.json();
        setUsers(users);
        console.log(users);
    }

    return (
        <div>
            <h1>Home Page</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Company Name</th>
                        <th>Blog Posts</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user=>(
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.company.name}</td>
                            <td><Link to={`/${user.id}`}  style={{ textDecoration: 'none'}}>Link to Posts</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
