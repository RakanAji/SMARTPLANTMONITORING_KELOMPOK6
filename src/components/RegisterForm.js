// RegisterForm.js

import React, { useState } from "react";
import axios from "axios";
import "./loginregister.css"; // Import file CSS

function RegisterForm({ onLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/register", {
        name,
        email,
        nohp: phone,
        password,
        confirm_password: confirmPassword,
      });
      if (response.data.success) {
        onLogin(response.data.data);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Terjadi kesalahan, silakan coba lagi.");
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Register</h2>
      <form onSubmit={handleRegister}>
        <div className="form-input">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <label>Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="form-button">Register</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
}

export default RegisterForm;
