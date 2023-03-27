import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./Registration.css";
import "react-toastify/dist/ReactToastify.css";
import { FaAngleDoubleDown } from "react-icons/fa";
import { SlPeople } from "react-icons/sl";

const baseURL = "http://localhost:4000/api/users";

const Registration = () => {
  const [inputChange, setInputChange] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [successfullyRegistered, setSuccessfullyRegistered] = useState(false);

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
        toast.success("You have Sucessfully Registered with SocialIO 💐!");
        event.target.reset();
      })
      .catch((err) => {
        console.log("server response with error", err);
      });
  };

  return (
    <>
      <div className="registration-container">
        <div className="social-intro">
          <span className="arrow-icon">
            <FaAngleDoubleDown size={70} />
          </span>
          <h1 className="heading">SOCIAL IO </h1>
          <h4 className="heading-slogan">
            Connect With New People <SlPeople />
          </h4>
          <button className="aboutUsButton">About US</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="conatiner-name-top">
              <h1 className="container-name">Register Here</h1>
              <div className="div-inner-container">
                <div className="input-div">
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    placeholder="Name"
                  />
                </div>
                <div className="input-div">
                  <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </div>
                <div className="input-div">
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="Password"
                  />
                </div>
                <button className="button">Register</button>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* <p>
        Already Have an account?
        <span className="span-switch">Sign In</span>
      </p> */}
      <ToastContainer />
    </>
  );
};

export default Registration;
