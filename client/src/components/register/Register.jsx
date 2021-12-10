import "./register.css"
import { useRef } from "react";
// import axios from "axios";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Pets } from "@mui/icons-material";
import { axiosInstance } from "../../config";

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("passwords don't match!")
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try {
                await axiosInstance.post("/auth/register", user);
                history.push("/login");
            } catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo"><Pets fontSize="x-large"/> Peopets</h3>
                    <span className="loginDesc">Connect with people and pets around you on Peopets.</span>
                </div>
                <div className="loginRight">

                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Username" required ref={username} className="loginInput" />
                        <input placeholder="Email" required ref={email} className="loginInput" type="email" />
                        <input placeholder="Password" required ref={password} className="loginInput" type="password" minLength="6" />
                        <input placeholder="Password Again" required ref={passwordAgain} className="loginInput" type="password" />
                        <button className="loginButton" type="submit">Sign up</button>
                    </form>
                    <div className="loginBoxWrapper">
                        <Link to="/login">
                            <button className="loginRegisterButton">Login to account</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
