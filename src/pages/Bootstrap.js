import React from "react";
import BootstrapAccordion from "../components/BootstrapAccordion";

const Bootstrap = () => {
  return (
    <>
      <div className="bg-success p-5">
        <h1 className="display-1 text-center">Hi, I'm Ethan Delcambre</h1>
        <h3 className="display-5 text-center text-muted">
          Full-Stack Web Developer
        </h3>
      </div>
    <container className="container-fluid justify-content-center">
      <div className="bg-light mx-5">
        <h3>Education</h3>
      </div>
      <div className="accordion mx-5" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              University of Alabama at Birmingham
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>B.S. in Digital Marketing</strong><br/>
              Concentration in Digital Marketing<br/>
              Minor in History 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Innovate Birmingham
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Full-Stack Web Development</strong><br/>
              Created full-stack website using MySQL, React, TypeScript, Material UI, and Node<br/>
              Used Agile methodologies to develop in a team environment
            </div>
          </div>
        </div>
      </div>      
      </container>
      </>    
  );
};

export default Bootstrap;
