import React, {} from "react";
import alat2 from '../assets/img/alat2.jpg';



function Header() {
  return (
    <>
        <div>
        {/* Navigation*/}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-5">
            <a className="navbar-brand" href="index.html">SMART PLANT</a>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
                <li className="nav-item"><a className="nav-link" href="pricing.html">Profile Team</a></li>
                <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                <li className="nav-item"><a className="nav-link" href="faq.html">Rincian Alat</a></li>
                {/* Tambahkan tombol login dan register */}
                <li className="nav-item"><button className="nav-link btn btn-link" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button></li>
                <li className="nav-item"><button className="nav-link btn btn-link" data-bs-toggle="modal" data-bs-target="#registerModal">Register</button></li>
                
                </ul>
            </div>
            </div>
        </nav>
        {/* Header*/}
        <header className="bg-dark py-5">
            <div className="container px-5">
            <div className="row gx-5 align-items-center justify-content-center">
                <div className="col-lg-8 col-xl-7 col-xxl-6">
                <div className="my-5 text-center text-xl-start">
                    <h1 className="display-5 fw-bolder text-white mb-2">Penyiraman Otomatis dan Pendeteksi Hama</h1>
                    <p className="lead fw-normal text-white-50 mb-4">Alat penyiraman otomatis dan pendeteksi hama dengan menggunakan SoilMoisture Sensor dan PIR</p>
                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                    <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#features">Monitoring Alat</a>
                    
                    </div>
                </div>
                </div>
                <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img className="img-fluid rounded-3 my-5" src={alat2} alt="..." /></div>
            </div>
            </div>
        </header>
        </div>
        
        

    </>
  );
}

export default Header;
