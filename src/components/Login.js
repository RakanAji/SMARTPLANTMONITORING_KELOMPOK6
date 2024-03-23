import React, { useRef } from "react";
import axios from "axios";

export default function LoginModal() {
    const loginEmailRef = useRef(null);
    const loginPasswordRef = useRef(null);

    const handleLogin = (event) => {
        event.preventDefault();

        const email = loginEmailRef.current.value;
        const password = loginPasswordRef.current.value;

        // Kirim data login ke backend
        axios.post("http://localhost:8000/api/login", {
            email: email,
            password: password
        })
        .then(response => {
            // Tangani respons dari server
            console.log(response.data);
            // Lakukan sesuatu setelah login berhasil, misalnya, menyimpan token di local storage
        })
        .catch(error => {
            // Tangani kesalahan
            console.error(error);
        });
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
        </div>
    );
}
