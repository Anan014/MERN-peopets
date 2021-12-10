import "./login.css"
import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
// import {CircularProgress} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Pets } from "@mui/icons-material";


export default function Login() {
    const email = useRef();
    const password = useRef();
    const {  isFetching, dispatch } = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        loginCall({ email: email.current.value, password: password.current.value }, dispatch)
    };

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo"><Pets fontSize="x-large"/> Peopets</h3>
                    <span className="loginDesc">Connect with people and pets around you on Peopets.</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input
                            placeholder="Email"
                            type="email"
                            required
                            className="loginInput"
                            ref={email}
                        />
                        <input
                            placeholder="Password"
                            type="password"
                            required
                            minLength="6"
                            className="loginInput"
                            ref={password}
                        />
                        <button className="loginButton">{isFetching ? "Loading" : "Log In"}</button>
                        <span className="loginForgot">Forgot Password?</span>
                    </form>
                    <div className="loginBoxWrapper">
                        <Link to="/register">
                            <button className="loginRegisterButton">{isFetching ? "Loading" : "Create a New Account"}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
