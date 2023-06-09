import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Stadium from '../components/Stadium'
import ReviewForm from '../components/ReviewForm'
import ReviewBox from '../components/ReviewBox'
import '../components/stadium.css'

const SingleStadium = () => {
    
    const {id} = useParams();
    const [stadium, setStadium] = useState([]);
    const [user, setUser] = useState({});
    const [reviews, setReviews] = useState([]);

    //Storing current user
    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/currentuser', {withCredentials: true})
    //         .then(res => {
    //             console.log("logged user " + res.data.firstName)
    //             setUser(res.data);
    //         })
    //         .catch(err => {
    //             console.log("current user error: " + err)
    //             setUser({})
    //         });
    // }, []);

    //useEffect to populate stadium info
    useEffect(() => {
        console.log("Stadium id from single stadium  " + id);
        axios.get("http://localhost:8000/api/stadiums/" + id)
            .then(res => {
                console.log(res.data)
                setStadium(res.data);
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            <Navbar user={user} setUser={setUser} />
            <div className="container">
                <div className="stadium-card-single-stadium jang">
                    <Stadium stadium={stadium} setStadium={setStadium} />
                </div>
                <div className="review-form-container">
                    <ReviewForm stadium={stadium} setStadium={setStadium} user={user} setUser={setUser} reviews={reviews} setReviews={setReviews}/>
                    <div className="review-box">
                        <ReviewBox id={id} reviews={reviews} setReviews={setReviews} /> 
                    </div>
                </div>
            </div>
        </div>
    );
}

// return (
//     <div>
//         <Navbar user={user} setUser={setUser}/>
//         <div className="single-stadium">
//             <Stadium stadium={stadium} setStadium={setStadium}/>
//             <ReviewForm stadium={stadium} setStadium={setStadium} user={user} setUser={setUser} reviews={reviews} setReviews={setReviews}/>
//         </div>
//             <ReviewBox id={id} reviews={reviews} setReviews={setReviews} />
//     </div>
// )
export default SingleStadium