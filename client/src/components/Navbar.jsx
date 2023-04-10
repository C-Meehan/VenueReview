import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import icon from '../images/stadium-icon.png'



const Navbar = (props) => {
    
    const {user, setUser} = props
    const navigate = useNavigate();
    // const [user, setUser] = useState([])
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

    useEffect(() => {
        axios.get('http://localhost:8000/api/currentuser', {withCredentials: true})
            .then(res => {
                console.log("logged user " + res.data.firstName)
                setUser(res.data);
            })
            .catch(err => {
                console.log("current user error: " + err)
                setUser({})
            });
    }, []);


    return (
        <div className="navbarr">
            <img src={icon} alt="stadium icon" className="stadium-icon"/>
            <h1 className='title'>Venue Review</h1>
            <div className="nav-links">
                <Link to={'/dashboard'} className="links">Home</Link>
                <Link to={'/profile/' + user._id} className="links">Profile</Link>
                <Link to={'/dashboard'} className="links">Stadiums</Link>
                <button className="logout-btn" onClick={logout}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar