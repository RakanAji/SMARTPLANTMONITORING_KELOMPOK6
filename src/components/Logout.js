import React from "react";

function LogoutButton({ onLogout }) {
  const handleLogout = () => {
    // Hapus token dari local storage atau lakukan sesuai kebutuhan
    onLogout();
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default LogoutButton;
