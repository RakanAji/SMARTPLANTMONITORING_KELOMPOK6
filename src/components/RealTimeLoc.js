import React, { useState, useEffect } from 'react';

function RealTimeLocation() {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
          .then(response => response.json())
          .then(data => {
            if (data.display_name) {
              setCurrentLocation(data.display_name);
            } else {
              setCurrentLocation("Unknown location");
            }
          })
          .catch(error => {
            console.error("Error fetching location:", error);
            setCurrentLocation("Unknown location");
          });
      }, error => {
        console.error("Error getting geolocation:", error);
        setCurrentLocation("Unknown location");
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
      setCurrentLocation("Geolocation not supported");
    }
  }, []);

  return (
    <div className="py-5 bg-light">
      <div className="container px-5 my-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-10 col-xl-7">
            <div className="text-center">
              <div className="fs-4 mb-4 fst-italic">
                {currentLocation ? `Your current location is: ${currentLocation}` : "Fetching location..."}
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <img className="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RealTimeLocation;
