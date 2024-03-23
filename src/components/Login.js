import React, { useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginModal() {
    const loginEmailRef = useRef(null);
    const loginPasswordRef = useRef(null);

    const handleLogin = async (event) => {
        event.preventDefault();

        const email = loginEmailRef.current.value;
        const password = loginPasswordRef.current.value;

        try {
            const response = await axios.post("http://localhost:8000/api/login", {
                email: email,
                password: password
            });

            if (response.data.success) {
                // Jika respons dari server menunjukkan login berhasil
                console.log(response.data);
                toast.success("Login berhasil");
            } else {
                // Jika respons dari server menunjukkan login gagal
                toast.error("Login gagal. Email atau password salah.");
            }
        } catch (error) {
            // Tangani kesalahan
            console.error(error);
            toast.error("Terjadi kesalahan saat melakukan login.");
        }
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
                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <label htmlFor="loginEmail" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="loginEmail" ref={loginEmailRef} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="loginPassword" className="form-label">Password</label>
                                <input type="password" className="form-control" id="loginPassword" ref={loginPasswordRef} />
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}
