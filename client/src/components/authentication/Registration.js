import React, { useEffect, useState } from 'react';
import axios from 'axios';

const baseURL= "http://localhost:4000/api/users";

const Registration = () => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [inputChange, setInputChange] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [registration, setRegistration] = useState(null);

    // useEffect(() => {
    //     axios.get(baseURL).then((res) => {
    //         setRegistration(res.data);
    //     });
    // }, []);

    const handleChange = (e) => {
        setInputChange({
            ...inputChange,
            [e.target.name]: e.target.value,
        });
    };

    console.log(inputChange);
    const handleSubmit = event =>{
        event.preventDefault();
        axios.post(baseURL, {
            name: inputChange.name,
            email: inputChange.email,
            password: inputChange.password,
        }).then((res) => {
            console.log("server response", res);
        }).catch((err) => {
            console.log("server response with error", err);
        });
        
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" onChange={handleChange}/>
            <label htmlFor="email">Email Id</label>
            <input type="text" name="email" onChange={handleChange}/>
            <label>Password</label>
            <input type="password" name='password' onChange={handleChange}/>
            <button>Submit</button>
        </form>
        
    );
};

export default Registration;