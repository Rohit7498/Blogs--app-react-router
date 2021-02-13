import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div>
            <nav>
                <Link to='/' style={{ textDecoration: 'none', color:'white' }} >
                        <h3>Blog Posts</h3>
                </Link>
                
                <ul className="nav-links">
                    <Link to='/' style={{ textDecoration: 'none', color:'white' }} >
                        <li className="links">Home</li>
                    </Link>
                    <Link to='/posts' style={{ textDecoration: 'none', color:'white' }} >
                        <li className="links">All Posts</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}
