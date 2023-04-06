import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'
import Navbar from './Navbar'

const Stadium = () => {

    const [stadium, setStadium] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(id);
        axios.get("http://localhost:8000/api/stadiums/" + id)
            .then(res => {
                console.log(res.data)
                setStadium(res.data);
            })
            .catch(err => console.log(err))
    })

    return (
        <div>
            {/* <Navbar/> */}
            <div className="stadium-content">
                <div className="stadium-info">
                    <h2>{stadium.teamName}</h2>
                    <h2>{stadium.league} {stadium.division}</h2>
                    <h2>Stadium Name: {stadium.stadiumName}</h2>
                    <h2>Located: {stadium.location}</h2>
                    <h2>Capacity: {stadium.capacity}</h2>
                    <h2>Founded: {stadium.founded}</h2>
                    {
                        (stadium && stadium.stadiumImage) ? <img src={require(`../images/${stadium?.stadiumImage}`)} alt="Picture of stadium" /> : null
                    }
                    {/* <img src={require(`../images/${stadium?.stadiumImage}`)} alt="Picture of stadium" /> */}
                </div>
            </div>
        </div>
    )
}

export default Stadium