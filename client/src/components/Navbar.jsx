import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import icon from '../images/stadium-icon.png'

const Navbar = (props) => {
    
    const {user, setUser} = props
    const [stadiumList, setStadiumList] = useState([]);

    const navigate = useNavigate();
    // const [user, setUser] = useState([])

    function openMenu() {
        document.body.classList += "menu--open"
    }

    function closeMenu() {
        document.body.classList.remove('menu--open')
    }

    const logout = () => {
        axios.post('http://localhost:8000/api/logout', {}, {withCredentials: true})
            .then(res => {
                // console.log(res);
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

    useEffect(() => {
        axios.get('http://localhost:8000/api/stadiums')
            .then(res => {
                console.log(res.data);
                setStadiumList(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <div className="navbarr">
            <img src={icon} alt="stadium icon" className="stadium-icon"/>
            <h1 className='title'>Venue Review</h1>
            <div className="nav-links">
                <Link to={'/dashboard'} className="links">Home</Link>
                <Link to={'/profile/' + user._id} className="links">Profile</Link>
                <div className='dropdown'>
                    <Link to={'/dashboard'} className="links"><button className="dropbtn">Stadiums
                        <i className='fa fa-caret-down'></i>
                    </button></Link>
                    <div className='dropdown-content'>
                        {
                        stadiumList.map((stadium, index) => (
                            <div key={index}>
                                <Link to={`/stadiums/${stadium._id}`}>{stadium.stadiumName}</Link>
                            </div>
                        ))
                    }
                    </div>
                </div>
                <button className="logout-btn" onClick={logout}>Logout</button>
            </div>

            <button className="btn__menu" onClick={openMenu}>
                <i className="fas fa-bars"></i>
            </button>
                <div className="menu__backdrop">
                    <button className="btn__menu btn__menu--close" onClick={closeMenu}>
                        <i className="fas fa-times"></i>
                    </button>
                    <ul class="menu__links">
                        <li class="menu__list"><Link to={"/dashboard"} class="menu__link">Home</Link></li>
                        <li class="menu__list"><Link to={"/profile/" + user._id} class="menu__link" >Profile</Link></li>
                        <li class="menu__list"><Link to={"/dashboard"} class="menu__link" >Stadiums</Link></li>
                        <li class="menu__list"><button className="menu-logout-btn" onClick={logout}>Logout</button></li>
                    </ul>
                </div>
        </div>
    )
}

export default Navbar