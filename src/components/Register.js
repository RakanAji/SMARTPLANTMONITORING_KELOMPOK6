import React, { useRef } from "react";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RegisterModal() {
    const registerNameRef = useRef(null);
    const registerEmailRef = useRef(null);
    const registerPhoneRef = useRef(null);
    const registerPasswordRef = useRef(null);
    const confirm_passwordRef = useRef(null);

    const handleRegister = async (event) => {
        event.preventDefault();

        const name = registerNameRef.current.value;
        const email = registerEmailRef.current.value;
        const nohp = registerPhoneRef.current.value;
        const password = registerPasswordRef.current.value;
        const confirm_password = confirm_passwordRef.current.value;

        if (password !== confirm_password) {
            console.error("Password and confirmation password do not match");
            return;
        }

        try {
            const response = await axios.post("http://localhost:8000/api/register", {
                name,
                email,
                nohp,
                password,
                confirm_password
            });

            console.log(response.data); // Handle response data

            // Tampilkan popup "register berhasil"
            toast.success("Register berhasil");
        } catch (error) {
            console.error("Failed to register: ", error);
            toast.error("Tolong Isi Semua");
        }
    };

    return (
        <div className="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="registerModalLabel">Register</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleRegister}>
                            <div className="mb-3">
                                <label htmlFor="registerName" className="form-label">Name</label>
                                <input type="text" className="form-control" id="registerName" ref={registerNameRef} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="registerEmail" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="registerEmail" ref={registerEmailRef} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="registerPhone" className="form-label">Phone</label>
                                <input type="text" className="form-control" id="registerPhone" ref={registerPhoneRef} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="registerPassword" className="form-label">Password</label>
                                <input type="password" className="form-control" id="registerPassword" ref={registerPasswordRef} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="confirmPassword" ref={confirm_passwordRef} />
                            </div>
                            <button type="submit" className="btn btn-primary">Register</button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer /> {/* Komponen ToastContainer dari react-toastify */}
        </div>
    );
}
