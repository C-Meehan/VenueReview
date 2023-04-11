import React, {useEffect} from 'react';
import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';
import './stadium.css'


const ReviewBox = (props) => {

    const {id, reviews, setReviews} = props

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    }

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
                    <div className="review-box-single-review" key={index}>
                        <p className="review-date">Posted on: {formatDate(review.createdAt)}</p>
                        <p className="additional-review">{review.additionalReview}</p>
                        <p className="reviewer-name">{review.creator.firstName} {review.creator.lastName}</p>
                    </div>
                )) : null
            }
        </div>
    )
}

export default ReviewBox