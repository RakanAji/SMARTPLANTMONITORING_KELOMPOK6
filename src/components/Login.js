import React, { useRef, useState, useEffect } from "react";
import axios from "axios";

const LoginModal = () => {
    const loginEmailRef = useRef(null);
    const loginPasswordRef = useRef(null);
    const [loginError, setLoginError] = useState("");
    const [loginSuccess, setLoginSuccess] = useState(false);

    useEffect(() => {
        const modalElement = document.getElementById("loginModal");
        modalElement.addEventListener("hidden.bs.modal", handleModalHidden);

        return () => {
            modalElement.removeEventListener("hidden.bs.modal", handleModalHidden);
        };
    }, []);

    const handleModalHidden = () => {
        setLoginError("");
        setLoginSuccess(false);
    };

    const handleLogin = async (event) => {
        event.preventDefault();

        const email = loginEmailRef.current.value;
        const password = loginPasswordRef.current.value;

        if (!email || !password) {
            setLoginError("Email dan password harus diisi.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:8000/api/login", {
                email,
                password
            });

            if (response.data.success) {
                setLoginError("");
                setLoginSuccess(true);
            } else {
                setLoginError("Login gagal. Email atau password salah.");
            }
        } catch (error) {
            console.error("Failed to login: ", error);
            setLoginError("Terjadi kesalahan saat melakukan login.");
        }
    };

    const handleInputChange = () => {
        setLoginError("");
        setLoginSuccess(false);
    };

    return (
        <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="loginModalLabel">Login</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {loginError && <div className="alert alert-danger">{loginError}</div>}
                        {loginSuccess && <div className="alert alert-success">Login berhasil!</div>}
                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <label htmlFor="loginEmail" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="loginEmail" ref={loginEmailRef} onChange={handleInputChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="loginPassword" className="form-label">Password</label>
                                <input type="password" className="form-control" id="loginPassword" ref={loginPasswordRef} onChange={handleInputChange} />
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;
