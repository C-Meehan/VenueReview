import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {Paper, FormControl, InputLabel, OutlinedInput, Button} from '@mui/material';

const styles = {
    paper: {
        width: "20rem", padding: "1rem"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%"
    }
}

const Register = () => {

    const navigate = useNavigate();
    const [userReg, setUserReg] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const onChangeHandler = e => {
        setUserReg({...userReg, [e.target.name]: e.target.value})
    }

    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/register', userReg, {withCredentials: true})
            .then(res => {
                console.log(res);
                navigate('/dashboard')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <Paper elevation={24} style={styles.paper}>
            <h2>Sign Up!</h2>
            <form onSubmit={submitHandler}>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>First Name</InputLabel>
                    <OutlinedInput type="text" name="firstName" value={userReg.firstName} onChange={onChangeHandler} />
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Last Name</InputLabel>
                    <OutlinedInput type="text" name="lastName" value={userReg.lastName} onChange={onChangeHandler} />
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>E-mail</InputLabel>
                    <OutlinedInput type="email" name="email" value={userReg.email} onChange={onChangeHandler} />
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput type="password" name="password" value={userReg.password} onChange={onChangeHandler} />
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Confirm Password</InputLabel>
                    <OutlinedInput type="password" name='confirmPassword' value={userReg.confirmPassword} onChange={onChangeHandler} />
                </FormControl>
                <Button type="submit" variant="contained" color="primary">Register</Button>
                <p>Already have an account? <Link to={'/'}>Log in!</Link></p>
            </form>
        </Paper>
    )
}

export default Register