import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
// import pirates from '../images/PNC-Park.jpg'
import Navbar from '../components/Navbar'

const Dashboard = () => {

    const [stadiumList, setStadiumList] = useState([]);
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
        <div className="allStadiums">
            <Navbar/>
            {/* <button onClick={logout}>Logout</button> */}
            {
                stadiumList.map((stadium, index) => (
                    <div key={index}>
                        <h2>{stadium.teamName}</h2>
                        <h2><Link to={`/stadiums/${stadium._id}`}>{stadium.stadiumName}</Link></h2>
                        <img src={require(`../images/${stadium.stadiumImage}`)} alt="Picture of stadium" />

                        
                    </div>
                ))
            }
        </div>
    )
}

export default Dashboard