import { useState, useRef } from "react";
import clm_api from "../utils/api";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {

    const dispatch = useDispatch();
    const [err, setErr] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const email = useRef(null);
    const password = useRef(null);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await clm_api.post("/auth/login", { email: email.current.value, password: password.current.value });
            if (res?.data?.user) {
                dispatch(addUser(res?.data?.user));
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
                    <input type="email" className="login-email" placeholder="email" ref={email}></input>
                    <input type={showPassword ? "text" : "password"} className="login-password" placeholder="password" ref={password}></input>
                    <button className="toggle-password" onClick={() => setShowPassword(prev => !prev)}>{showPassword ? "hide" : "show"}</button>
                    {err && <p className="error-message">{err.message}</p>}
                    <button className="login-button" onClick={handleLogin}>login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;