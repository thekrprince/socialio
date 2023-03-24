import React, { useEffect, useState } from "react";
import axios from "axios";
import Regist from "./Registration.css";

const baseURL = "http://localhost:4000/api/users";

const Registration = () => {
  const [inputChange, setInputChange] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputChange({
      ...inputChange,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(baseURL, {
        name: inputChange.name,
        email: inputChange.email,
        password: inputChange.password,
      })
      .then((res) => {
        console.log("server response", res);
      })
      .catch((err) => {
        console.log("server response with error", err);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="conatiner-name-top">
          <h1 className="container-name">Register Here</h1>
          <div className="div-inner-container">
            <div className="input-div">
              {/* <label htmlFor="name">Name</label> */}
              <input type="text" name="name" onChange={handleChange} placeholder="Name"/>
            </div>
            <div className="input-div">
              {/* <label htmlFor="email">Email Id</label> */}
              <input type="text" name="email" onChange={handleChange} placeholder="Email" />
            </div>
            <div className="input-div">
              {/* <label>Password</label> */}
              <input type="password" name="password" onChange={handleChange} placeholder="Password"/>
            </div>
            <button className="button">Register</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Registration;
