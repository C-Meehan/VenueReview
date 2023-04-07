import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {Paper, FormControl, InputLabel, OutlinedInput, Button, Rating} from '@mui/material'

const styles = {
    paper: {
        // display: "flex",
        width: "18rem", padding: "1rem",
        opacity: 0.8
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%"
    }
}

const ReviewForm = (props) => {
    const {user, setUser, stadium, setStadium, reviews, setReviews} = props
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();

    const [review, setReview] = useState({
        concessions: 1,
        parking: 1,
        views: 1,
        atmosphere: 1,
        teamShop: 1,
        additionalReview: "",
        // creator: user._id,
        // stadium: stadium._id
    }) 

    const onChangeHandler = e => {
        setReview({...review, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Handle submit", user._id)
        console.log("Handle submit chris chris", stadium._id)
        // Add user redirect
        // if (!user.firstName) {
        //     navigate('/')
        // }
        axios.post("http://localhost:8000/api/reviews", {...review, creator: user._id, stadium: stadium._id})
            .then(res => {
                console.log(res.data)
                
                setReviews([...reviews, res.data.review])
                navigate("/dashboard")
                // setReview({
                //     concessions: 1,
                //     parking: 1,
                //     views: 1,
                //     atmosphere: 1,
                //     teamShop: 1,
                //     additionalReview: "",
                // })
            })
            .catch(err => {
                console.log(err.response.data.error.errors)
                setErrors(err.response.data.error.errors)
            })
    }

    return (
        <Paper elevation={4} style={styles.paper}>
            <h2>Review Stadium</h2>
            <form onSubmit={handleSubmit}>
                <FormControl variant="outlined" style={styles.input}>
                    {errors.concessions ? <p className="text-danger">{errors.concessions.message}</p> : ""}
                    <InputLabel>Concessions</InputLabel>
                    <Rating name="concessions" defaultValue={1} precision={0.5} value={review.concessions} onChange={onChangeHandler} />
                    {/* <OutlinedInput type="text" name="concessions" value={review.concessions} onChange={onChangeHandler} /> */}
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Parking</InputLabel>
                    <Rating name="parking" defaultValue={1} precision={0.5} value={review.parking} onChange={onChangeHandler} />
                    {/* <OutlinedInput type="text" name="parking" value={review.parking} onChange={onChangeHandler} /> */}
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Views</InputLabel>
                    <Rating name="views" defaultValue={1} precision={0.5} value={review.views} onChange={onChangeHandler} />
                    {/* <OutlinedInput type="text" name="views" value={review.views} onChange={onChangeHandler} /> */}
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Atmosphere</InputLabel>
                    <Rating name="atmosphere" defaultValue={1} precision={0.5} value={review.atmosphere} onChange={onChangeHandler} />
                    {/* <OutlinedInput type="text" name="atmosphere" value={review.atmosphere} onChange={onChangeHandler} /> */}
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Team Shop</InputLabel>
                    <Rating name="teamShop" defaultValue={1} precision={0.5} value={review.teamShop} onChange={onChangeHandler} />
                    {/* <OutlinedInput type="text" name="teamShop" value={review.teamShop} onChange={onChangeHandler} /> */}
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>How was your visit?</InputLabel>
                    <OutlinedInput type="textarea" name="additionalReview" value={review.additionalReview} onChange={onChangeHandler} />
                </FormControl>
                <Button type="submit" variant="contained" color="primary">Submit Review</Button>
            </form>
        </Paper>
    )
}

export default ReviewForm