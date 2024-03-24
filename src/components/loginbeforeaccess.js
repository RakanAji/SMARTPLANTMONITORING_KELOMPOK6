import React, { useRef, useState } from "react";
import axios from "axios";

export default function AuthPage({ onLogin }) {
    const [isLogin, setIsLogin] = useState(true);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const [error, setError] = useState(null);

    const handleAuth = async (event) => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const data = {
            email,
            password,
        };

        if (!isLogin) {
            const name = nameRef.current.value;
            const phone = phoneRef.current.value;
            const confirmPassword = confirmPasswordRef.current.value;

            data.name = name;
            data.phone = phone;
            data.confirm_password = confirmPassword;
        }

        try {
            const response = await axios.post(
                `http://localhost:8000/api/${isLogin ? 'login' : 'register'}`,
                data
            );
            console.log(response.data);
            // handle successful login/register, e.g., store token in local storage
            if (response.data.success) {
                onLogin(); // Panggil fungsi onLogin untuk mengubah status isLoggedIn pada App.js
            }
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    return (
        <div>
            <h2>{isLogin ? "Login" : "Register"}</h2>
            <form onSubmit={handleAuth}>
                {!isLogin && (
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" ref={nameRef} required />
                    </div>
                )}
                {!isLogin && (
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input type="text" id="phone" ref={phoneRef} required />
                    </div>
                )}
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" ref={emailRef} required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" ref={passwordRef} required />
                </div>
                {!isLogin && (
                    <div>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" ref={confirmPasswordRef} required />
                    </div>
                )}
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <button type="submit">{isLogin ? "Login" : "Register"}</button>
            </form>
            <p>
                {isLogin
                    ? "Don't have an account? "
                    : "Already have an account? "}
                <button onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? "Register" : "Login"}
                </button>
            </p>
        </div>
    );
}
