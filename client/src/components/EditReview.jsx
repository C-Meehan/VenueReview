import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import Navbar from './Navbar'
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

// const [review, setReview] = useState({
//     concessions: 0,
//     parking: 0,
//     views: 0,
//     atmosphere: 0,
//     teamShop: 0,
//     additionalReview: ''
// });


const EditReview = (props) => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({})
    const [review, setReview] = useState({})
    const [errors, setErrors] = useState([])
    

    useEffect(() => {
        axios.get("http://localhost:8000/api/reviews/one/" + id)
            .then(res => {
                console.log("Looking for this!!",res.data)
                console.log("Should be concessions score",res.data.concessions)
                setReview({
                    concessions: (res.data.concessions),
                    parking: (res.data.parking),
                    views: (res.data.views),
                    atmosphere: (res.data.atmosphere),
                    teamShop: (res.data.teamShop),
                    additionalReview: (res.data.additionalReview)
                })
            })
            .catch(err => console.log(err))
    }, [])

    const onChangeHandler = e => {
        setReview({...review, [e.target.name]: e.target.value})
    }

    const updateReview = (e) => {
        e.preventDefault();

        axios.put('http://localhost:8000/api/reviews/edit/' + id, review)
            .then(res => {
                console.log("I need this to navigate",user._id)
                navigate("/profile/" + user._id)
            })
            .catch(err => console.log(err))
            console.log("I need this to navigate",user._id)

    }

    return (
        <div>
            <Navbar user={user} setUser={setUser}/>
            {/* <h1>{user.firstName}</h1> */}
            <Paper elevation={4} style={styles.paper}>
            <h2>Edit review</h2>
            <form onSubmit={updateReview}>
                <FormControl variant="outlined" style={styles.input}>
                    {errors.concessions ? <p className="text-danger">{errors.concessions.message}</p> : ""}
                    <InputLabel>Concessions</InputLabel>
                    <Rating name="concessions"  defaultValue={review?.concessions} precision={0.5} value={review.concessions} onChange={onChangeHandler} />
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
                    {errors.concessions ? <p className="text-danger">{errors.concessions.message}</p> : ""}
                    <InputLabel>{review.additionalReview}</InputLabel>
                    <OutlinedInput type="textarea" name="additionalReview" value={review.additionalReview} onChange={onChangeHandler} />
                </FormControl>
                <Button type="submit" variant="contained" color="primary">Submit Edited Review</Button>
            </form>
        </Paper>
        </div>
    )
}

export default EditReview