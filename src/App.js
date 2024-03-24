import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import LogoutButton from "./components/Logout";
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleUpdateName = async (updatedName) => {
    // Implementasi pembaruan nama pengguna ke backend atau penyimpanan lokal
    console.log("Updated name:", updatedName);
    // Contoh: menyimpan ke penyimpanan lokal
    // localStorage.setItem("username", updatedName);
  };

  return (
    <div>
      {/* Tampilkan form login/register jika user belum login */}
      {!user && <LoginForm onLogin={handleLogin} />}
      {!user && <RegisterForm onLogin={handleLogin} />}

      {/* Tampilkan konten website jika user sudah login */}
      {user && (
        <>
          
          <div>
            <Header onLogout={handleLogout} user={user} handleUpdateName={handleUpdateName}/>
            <Home/>
            <Footer/>
          </div>
        </>
      )}

      {/* Tampilkan tombol logout jika user sudah login */}
      {/* {user && <LogoutButton onLogout={handleLogout} />} */}
    </div>
  );
}

export default App;
