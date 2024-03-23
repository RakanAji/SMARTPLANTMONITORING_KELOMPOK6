import React, {} from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import RegisterModal from "./components/Register";
import LoginModal from "./components/Login";

function App() {
  return (
    <>
      <RegisterModal />
      <LoginModal/>
      <Header/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;

