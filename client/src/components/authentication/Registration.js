import React, { useState } from 'react';


const Registration = () => {
    const [name, Setname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) =>{
        event.prevenDefault();
        
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name"/>
            <label htmlFor="email">Email Id</label>
            <input type="text" name="email" id="" />
            <label>Password</label>
            <input type="text" />
            <button>Submit</button>
        </form>
        
    );
};

export default Registration;