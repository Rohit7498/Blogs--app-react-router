import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';


export default function Nav() {
    const [isDark, setDark] = useState(false);

    const toggleMode = ()=>{
        setDark(prevState => !prevState);
        if(isDark){
            document.body.style.backgroundColor='darkgray';
            document.body.style.color='white';
            
        }else{
            document.body.style.backgroundColor='white';
            document.body.style.color='black';
        }

    }

    return (
        <div>
            <nav>
                <Link to='/' style={{ textDecoration: 'none', color:'white' }} >
                        <LocalLibraryIcon fontSize="medium" /> <h3 style={{display:'inline-block'}} >Blog Posts</h3>
                </Link>
                
                <ul className="nav-links">
                    <Link to='/' style={{ textDecoration: 'none', color:'white' }} >
                        <li className="links">Home</li>
                    </Link>
                    <Link to='/posts' style={{ textDecoration: 'none', color:'white' }} >
                        <li className="links">All Posts</li>
                    </Link>
                    <Button variant="contained" size="medium"  style={{backgroundColor: 'darkgreen', color:'white'}} 
                    onClick={toggleMode}>
                        {isDark ? 'Dark Mode' : 'Light Mode'}
                    </Button>
                </ul>
            </nav>
        </div>
    )
}
