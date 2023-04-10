import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';


const ReviewBox = (props) => {

    const {id, reviews, setReviews} = props

    useEffect(() => {
        // console.log("Stadium id for reviews " + id);
        axios.get("http://localhost:8000/api/reviews/stadium/" + id)
            .then(res => {
                console.log("This is my get request for review", res.data)
                setReviews(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {
                (reviews) ? 
                    reviews.map((review, index) => (
                    <div key={index}>
                        <p>{review.additionalReview}</p>
                        <p>{review.creator.firstName} {review.creator.lastName}</p>
                    </div>
                )) : null
            }
        </div>
    )
}

export default ReviewBox