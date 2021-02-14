import React, { useState, useEffect } from 'react'
import './style.css';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


export default function Home() {

    const [users, setUsers] = useState([]);
    const [fiteredUsers, setFilteredUsers] = useState([]);
    const classes = useStyles();



    useEffect(()=>{
        fetchUsers();
    }, []);//on mount

    const fetchUsers = async ()=>{
        try {
            const data = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await data.json();
            setUsers(users);
            setFilteredUsers(users);
            console.log(users);    
        } catch (error) {
            console.log(error);    
        }
        
    }
    const filterUsers = (e)=>{
        let curUserText = e.target.value;
        console.log(e.target.value);
        let curFilteredUsers = users;
        if(curUserText.length > 0){
            const regex = new RegExp(`^${curUserText}`, 'i');
            curFilteredUsers = users.sort().filter(user=>regex.test(user.name));
        }
        setFilteredUsers(()=>curFilteredUsers);
    }

    const filterCompanies = (e)=>{
        let curCompanyText = e.target.value;
        console.log(e.target.value);
        let curFilteredUsers = users;
        if(curCompanyText.length > 0){
            const regex = new RegExp(`^${curCompanyText}`, 'i');
            curFilteredUsers = users.sort().filter(user=>regex.test(user.company.name));
        }
        setFilteredUsers(()=>curFilteredUsers);
    }

    return (
        <div>
            <h1>Home Page</h1>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="User Name" onChange={filterUsers} />
                <TextField id="standard-basic" label="Company Name" onChange={filterCompanies} />
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Company Name</th>
                        <th>Blog Posts</th>
                    </tr>
                </thead>
                <tbody>
                    {fiteredUsers.map(user=>(
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
