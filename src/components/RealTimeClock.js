import React, { useState, useEffect } from 'react';
import RealTimeLocation from './RealTimeLoc';

function RealTimeClock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-5 bg-light">
      <div className="container px-5 my-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-10 col-xl-7">
            <div className="text-center">
              <div className="fs-4 mb-4 fst-italic">
                {"The current time is: " + currentTime.toLocaleTimeString()}
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <img className="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                <div className="fw-bold">
                <RealTimeLocation/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RealTimeClock;
