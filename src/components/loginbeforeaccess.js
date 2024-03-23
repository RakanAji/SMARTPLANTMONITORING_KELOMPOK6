import React, { useState, useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import RegisterModal from "./Register";
import LoginModal from "./Login";

function AuthContainer() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Fungsi untuk menangani login berhasil
  function handleLoginSuccess() {
    setIsLoggedIn(true);
  }

  // Fungsi untuk menangani logout
  function handleLogout() {
    // Lakukan logika logout di sini, misalnya menghapus token dari local storage
    setIsLoggedIn(false);
  }

  // Efek samping untuk memeriksa status login dari local storage saat komponen dimuat
  useEffect(() => {
    const isLoggedInLocalStorage = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(isLoggedInLocalStorage === "true");
  }, []);

  // Efek samping untuk menyimpan status login ke local storage saat terjadi perubahan pada state isLoggedIn
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <>
      {!isLoggedIn && (
        <>
          <RegisterModal />
          <LoginModal onLoginSuccess={handleLoginSuccess} />
        </>
      )}
      {isLoggedIn && (
        <>
          <Header onLogout={handleLogout} />
          <Home />
          <Footer />
        </>
      )}
    </>
  );
}

export default AuthContainer;

