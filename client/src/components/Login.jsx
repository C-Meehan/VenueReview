import React, {useState} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import {Paper, FormControl, InputLabel, OutlinedInput, Button} from '@mui/material'

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

const Login = () => {

    const navigate = useNavigate();
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    })

    const onChangeHandler = e => {
        setUserLogin({...userLogin, [e.target.name]: e.target.value})
    }

    const loginHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/login', userLogin, {withCredentials: true})
            .then(res => {
                console.log(res)
                navigate('/dashboard')
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <Paper elevation={24} style={styles.paper}>
            <h2>Login Form</h2>
            <form onSubmit={loginHandler}>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Email</InputLabel>
                    <OutlinedInput type="text" name="email" value={userLogin.email} onChange={onChangeHandler} />
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput type="password" name="password" value={userLogin.password} onChange={onChangeHandler} />
                </FormControl>
                <Button type="submit" variant="contained" color="primary">Login</Button>
                <p>Don't have an account? <Link to={'/register'}>Sign up!</Link></p>
            </form>
        </Paper>
    )
}

export default Login