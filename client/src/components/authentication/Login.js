
const Login = () => {

    const inputChangeHandler = () => {

    }

    return (
        <div>
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
                <button className="button">Register</button>
        </div>

    );
};

export default Login