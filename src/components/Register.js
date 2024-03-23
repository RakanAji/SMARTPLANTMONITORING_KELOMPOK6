import React, { useRef, useState } from "react";
import axios from "axios";

const RegisterModal = () => {
    const registerNameRef = useRef(null);
    const registerEmailRef = useRef(null);
    const registerPhoneRef = useRef(null);
    const registerPasswordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const [registerError, setRegisterError] = useState("");
    const [registerSuccess, setRegisterSuccess] = useState(false);

    const handleRegister = async (event) => {
        event.preventDefault();
        setRegisterError("");
        setRegisterSuccess(false); // Menyembunyikan pesan sukses sebelum mencoba registrasi lagi

        const name = registerNameRef.current.value;
        const email = registerEmailRef.current.value;
        const nohp = registerPhoneRef.current.value;
        const password = registerPasswordRef.current.value;
        const confirm_password = confirmPasswordRef.current.value;

        if (password !== confirm_password) {
            setRegisterError("Password and confirmation password do not match");
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

            if (response.data.success) {
                console.log(response.data);
                setRegisterSuccess(true);
            } else {
                setRegisterError("Register gagal. Silahkan isi data dengan benar.");
            }
        } catch (error) {
            console.error("Failed to register: ", error);
            setRegisterError("Maaf, Email sudah terdaftar.");
        }
    };

    const handleInputChange = () => {
        setRegisterError("");
        setRegisterSuccess(false); // Menyembunyikan pesan sukses saat ada inputan baru
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
                        {registerError && <div className="alert alert-danger">{registerError}</div>}
                        {registerSuccess && <div className="alert alert-success">Registrasi berhasil!</div>}
                        <form onSubmit={handleRegister}>
                            <div className="mb-3">
                                <label htmlFor="registerName" className="form-label">Name</label>
                                <input type="text" className="form-control" id="registerName" ref={registerNameRef} onChange={handleInputChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="registerEmail" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="registerEmail" ref={registerEmailRef} onChange={handleInputChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="registerPhone" className="form-label">Phone</label>
                                <input type="text" className="form-control" id="registerPhone" ref={registerPhoneRef} onChange={handleInputChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="registerPassword" className="form-label">Password</label>
                                <input type="password" className="form-control" id="registerPassword" ref={registerPasswordRef} onChange={handleInputChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="confirmPassword" ref={confirmPasswordRef} onChange={handleInputChange} />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={handleInputChange}>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterModal;
