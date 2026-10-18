import { useState, useEffect, useRef } from "react";
import clm_api from "../utils/api";
import { useNavigate } from "react-router";


const Login = () => {

    const [err, setErr] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const navigate = useNavigate();

    const handleLogin = async () => {
        console.log(email.current.value);
        try {
            const res = await clm_api.post("/auth/login", { email: email.current.value, password: password.current.value });
            if (res?.data?.user) {
                navigate("/dashboard");
            }
        } catch (error) {
            setErr(error);
        }
    }
    return (
        <div className="login-page">
            <div>
                <form className="login-form" onSubmit={(e) => e.preventDefault()}>
                    <input className="login-email" placeholder="email" ref={email}></input>
                    <input className="login-password" placeholder="password" ref={password}></input>
                    {err && <p className="error-message">{err.message}</p>}
                    <button className="login-button" onClick={handleLogin}>login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;