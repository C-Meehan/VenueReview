import React from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import icon from '../images/stadium-icon.png'



const Navbar = () => {
    
    const navigate = useNavigate();
    
    const logout = () => {
        axios.post('http://localhost:8000/api/logout', {}, {withCredentials: true})
            .then(res => {
                console.log(res);
                navigate("/")
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <div className="navbar">
            <img src={icon} alt="stadium icon" className="stadium-icon"/>
            <h1>Venue Review</h1>
            <div className="nav-links">
                <Link to={'/dashboard'} className="links">Home</Link>
                <Link to={'/dashboard'} className="links">Profile</Link>
                <Link to={'/dashboard'} className="links">Stadiums</Link>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar