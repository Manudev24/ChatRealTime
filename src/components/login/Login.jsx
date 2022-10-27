import React from "react"
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
    return (

        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">ChatRealTime</span>
                <span className="title">Login</span>
                <form>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <button>Sign in</button>
                </form>
                <p>You don't have an account? <Link to="/register">Register here</Link></p>
            </div>
        </div>
    )
}

export default Login