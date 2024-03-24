import React, { useState, useEffect } from "react";
import axios from "axios";

function UserProfile({ user, onUpdateEmail, onClose }) {
  const [updatedEmail, setUpdatedEmail] = useState(user.email);
  const [errorMessage, setErrorMessage] = useState("");

  // Bersihkan input email dan pesan kesalahan ketika profil ditutup
  useEffect(() => {
    return () => {
      setUpdatedEmail(user.email); // Reset input email ke nilai awal
      setErrorMessage(""); // Bersihkan pesan kesalahan
    };
  }, [user]);

  const handleUpdateEmail = async () => {
    try {
      // Kirim permintaan PUT ke backend dengan menggunakan Axios
      const response = await axios.put(`http://localhost:8000/api/updateUser/{user.id}`, {
        email: updatedEmail
      });

      if (response.data.success) {
        console.log("Email updated successfully:", response.data);
        onUpdateEmail(updatedEmail); // Optionally update the UI with the new email
        setErrorMessage(""); // Clear error message
        onClose(); // Close the modal
      } else {
        setErrorMessage(response.data.message); // Set error message from response
        onClose();
      }
    } catch (error) {
      console.error("Error updating email:", error);
      setErrorMessage("Failed to update email");
    }
  };

  return (
    <div className="modal fade" id="profileModal" tabIndex="-1" aria-labelledby="profileModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="profileModalLabel">User Profile</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <p>Email: {errorMessage ? errorMessage : user.email}</p>
            <input
              type="email"
              value={updatedEmail}
              onChange={(e) => setUpdatedEmail(e.target.value)}
              placeholder="Enter updated email"
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>Close</button>
            <button type="button" className="btn btn-primary" onClick={handleUpdateEmail}>Update Email</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
