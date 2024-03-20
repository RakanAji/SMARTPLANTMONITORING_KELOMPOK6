import React, {} from "react";
import DataMonitor from "./DataMonitor";
import RealTimeClock from "./RealTimeClock";


function Home() {
  return (
    <>
<div>
  {/* Features section*/}
  {/* <section className="py-5" id="features">
    <div className="container px-5 my-5">
      <div className="row gx-5">
        <div className="col-lg-4 mb-5 mb-lg-0"><h2 className="fw-bolder mb-0">A better way to start building.</h2></div>
        <div className="col-lg-8">
          <div className="row gx-5 row-cols-1 row-cols-md-2">
            <div className="col mb-5 h-100">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-collection" /></div>
              <h2 className="h5">Featured title</h2>
              <p className="mb-0">Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
            </div>
            <div className="col mb-5 h-100">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-building" /></div>
              <h2 className="h5">Featured title</h2>
              <p className="mb-0">Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
            </div>
            <div className="col mb-5 mb-md-0 h-100">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-toggles2" /></div>
              <h2 className="h5">Featured title</h2>
              <p className="mb-0">Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
            </div>
            <div className="col h-100">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-toggles2" /></div>
              <h2 className="h5">Featured title</h2>
              <p className="mb-0">Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}
  <DataMonitor/>
  {/* Testimonial section*/}
  {/* <div className="py-5 bg-light">
    <div className="container px-5 my-5">
      <div className="row gx-5 justify-content-center">
        <div className="col-lg-10 col-xl-7">
          <div className="text-center">
            <div className="fs-4 mb-4 fst-italic">"Working with Start Bootstrap templates has saved me tons of development time when building new projects! Starting with a Bootstrap template just makes things easier!"</div>
            <div className="d-flex align-items-center justify-content-center">
              <img className="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
              <div className="fw-bold">
                Tom Ato
                <span className="fw-bold text-primary mx-1">/</span>
                CEO, Pomodoro
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
  <RealTimeClock/>
  {/* Blog preview section*/}
  <section className="py-5">
    <div className="container px-5 my-5">

      {/* Call to action*/}
      <aside className="bg-primary bg-gradient rounded-3 p-4 p-sm-5 mt-5">
        <div className="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
        <div className="mb-4 mb-xl-0">
            <div className="fs-3 fw-bold text-white">Berikan feedback anda untuk alat kami</div>
            <div className="text-white-50">Feedback yang kamu berikan membantu kami mengembangkan SMART PLANT menjadi lebih baik</div>
        </div>
        <div className="ms-xl-4">
            <a href="pratamarakan11@gmail.com" className="btn btn-outline-light">Send Feedback</a>
            
        </div>
        </div>
      </aside>

    </div>
  </section></div>
   
    </>
  );
}

export default Home;
