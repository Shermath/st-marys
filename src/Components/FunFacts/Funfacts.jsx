import React from 'react'

function Funfacts() {
    return (
        <section id="fun-facts">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <div className="fun-fact text-center">
                <h3>
                  <i className="fa fa-thumbs-o-up"></i>{" "}
                  <span className="timer">365</span>
                </h3>
                <h6>Happy Clients</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="fun-fact text-center">
                <h3>
                  <i className="fa fa-briefcase fa-6"></i>{" "}
                  <span className="timer">73987</span>
                </h3>
                <h6>Completed Projects</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="fun-fact text-center">
                <h3>
                  <i className="fa fa-coffee"></i>{" "}
                  <span className="timer">297345</span>
                </h3>
                <h6>Cups of Coffee</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="fun-fact text-center">
                <h3>
                  <i className="fa fa-code"></i>{" "}
                  <span className="timer">9823686</span>
                </h3>
                <h6>Lines of Code</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Funfacts
