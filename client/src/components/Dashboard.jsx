import '../App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useNavigate, useParams} from 'react-router-dom';
// import pirates from '../images/PNC-Park.jpg'
import Navbar from '../components/Navbar'

const Dashboard = () => {

    const [user, setUser] = useState({})
    const [stadiumList, setStadiumList] = useState([]);
    // const {id} = useParams();
    const navigate = useNavigate();

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

    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/getuser/' + id)
    //         .then(res => {
    //             console.log(res.data)
    //         })
    //         .catch(err => console.log(err))
    // })

    // const logout = () => {
    //     axios.post('http://localhost:8000/api/logout', {}, {withCredentials: true})
    //         .then(res => {
    //             console.log(res);
    //             navigate("/")
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }

    return (
        <div className='dashboard'>
            <Navbar user={user} setUser={setUser}/>
            <div className="allStadiums">
                {/* <button onClick={logout}>Logout</button> */}
                {
                    stadiumList.map((stadium, index) => (
                        <div className="stadium-card" key={index}>
                            <h2>{stadium.teamName}</h2>
                            <h2 className='stadium-link'><Link to={`/stadiums/${stadium._id}`}>{stadium.stadiumName}</Link></h2>
                            <img className="stadium-img" src={require(`../images/${stadium.stadiumImage}`)} alt="Picture of stadium" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Dashboard