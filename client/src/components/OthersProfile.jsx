import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'
import Navbar from './Navbar'
import {Rating} from '@mui/material'
import './stadium.css'

const OthersProfile = () => {

    const {id} = useParams();
    const [reviews, setReviews] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/reviews/user/' + id)
            .then(res => {
                console.log(res.data)
                console.log("Persons ID is: ", res.data)
                setReviews(res.data)
            })
            .catch(err => console.log("Error trying to get user reviews"))
    }, [])

    const deleteReview = (reviewId) => {
        axios.delete("http://localhost:8000/api/reviews/" + reviewId)
            .then(res => {
                setReviews(reviews.filter(review => review._id !== reviewId));
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Navbar user={user} setUser={setUser}/>
            <h1 className="profile-name">{reviews[0]?.creator?.firstName}'s Reviews</h1>
            <div>
            {
                (reviews) ? 
                reviews.map((review, index) => (
                    <div className="profile-main-review-container" key={index}>
                        <div className="left-side-review-info">
                            <p className="review-rating">Concessions: <Rating name="concessions" defaultValue={review.concessions} precision={0.5} value={review.concessions} readOnly/></p>
                            <p className="review-rating">Parking: <Rating name="parking" defaultValue={review.parking} precision={0.5} value={review.parking} readOnly/></p>
                            <p className="review-rating">Views: <Rating name="views" defaultValue={review.views} precision={0.5} value={review.views} readOnly/></p>
                            <p className="review-rating">Team Shop: <Rating name="teamShop" defaultValue={review.teamShop} precision={0.5} value={review.teamShop} readOnly/></p>
                            <p className="review-rating">Atmosphere: <Rating name="atmosphere" defaultValue={review.atmosphere} precision={0.5} value={review.atmosphere} readOnly/></p>
                            <p className="review-rating">Additional Review: {review.additionalReview}</p>
                            <div className="edit-delete-buttons">
                                {
                                    (review.creator._id == user._id ? 
                                        <Link to={`/review/edit/${review._id}`}><button className="edit-button">Edit</button></Link> : "")
                                    }
                                {
                                    (review.creator._id == user._id ? 
                                        <button className="delete-button" onClick={(e) => {deleteReview(review._id)}}>Delete</button> : "")
                                    }
                            </div>
                        </div>
                        <div className="right-side-review-info">
                            <p>{review.stadium.stadiumName}</p>
                            <img className="profile-review-img" src={require(`../images/${review.stadium.stadiumImage}`)} alt="stadium image" />
                        </div>
                        {/* {console.log("The review.creator._id", review.creator)}
                        {console.log("The user._id", user._id)} */}
                    </div>
                )) : null
            }
            </div>
        </div>
    )
}

export default OthersProfile