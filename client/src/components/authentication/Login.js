import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Registration.scss";
import { FaAngleDoubleDown } from "react-icons/fa";
import { SlPeople } from "react-icons/sl";
const Login = () => {

    const inputChangeHandler = () => {
      
    }

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
  
          <form onSubmit={inputChangeHandler}>
            <div className="container">
              <div className="conatiner-name-top">
                <h1 className="container-name">Login Here</h1>
                <div className="div-inner-container">
                  <div className="input-div">
                    <input
                      type="text"
                      name="email"
                      onChange={inputChangeHandler}
                      placeholder="Email"
                    />
                  </div>
                  <div className="input-div">
                    <input
                      type="password"
                      name="password"
                      onChange={inputChangeHandler}
                      placeholder="Password"
                    />
                  </div>
                  <button className="button">Login</button>
                  <p>Don't have an account??&nbsp;
                    <a href="/"> Register now</a></p>
                </div>
              </div>
            </div>
          </form>
        </div>
        <ToastContainer />
        </>
    );
  };
  

export default Login