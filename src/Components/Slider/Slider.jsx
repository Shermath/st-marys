import React from 'react'

function Slider() {
    return (
        <section id="slider">
        <div id="home-carousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div
              className="item active"
              style={{ backgroundImage: `url("images/Slider/01.jpg")` }}
            >
              <div className="carousel-caption container">
                <div className="row">
                  <div className="col-md-7 col-sm-12 col-xs-12">
                    <h1>We Are St. Marys</h1>
                    <h2>Creative Themes</h2>
                    <p>
                      St. Marys – A One Page Parallax, HTML5 and Responsive
                      Template suitable for any creative business agency.
                      Multiple pages also included in this theme with lots of
                      CSS and JQuery animations
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: `url("images/Slider/02.jpg")` }}
            >
              <div className="carousel-caption container">
                <div className="row">
                  <div className="col-md-7 col-sm-12 col-xs-12">
                    <h1>We Are St. Marys</h1>
                    <h2>Creative Themes</h2>
                    <p>
                      St. Marys – A One Page Parallax, HTML5 and Responsive
                      Template suitable for any creative business agency.
                      Multiple pages layouts also in this theme with lots of CSS
                      and JQuery animations
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: `url("images/Slider/03.jpg")` }}
            >
              <div className="carousel-caption container">
                <div className="row">
                  <div className="col-md-7 col-sm-12 col-xs-12">
                    <h1>We Are St. Marys</h1>
                    <h2>Creative Themes</h2>
                    <p>
                      St. Marys – A One Page Parallax, HTML5 and Responsive
                      Template suitable for any creative business agency.
                      Multiple page also included in this theme with lots of CSS
                      and JQuery animations
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="home-carousel-left"
              href="#home-carousel"
              data-slide="prev"
            >
              <i className="fa fa-angle-left"></i>
            </a>{" "}
            <a
              className="home-carousel-right"
              href="#home-carousel"
              data-slide="next"
            >
              <i className="fa fa-angle-right"></i>
            </a>{" "}
          </div>
        </div>
      </section>
    )
}

export default Slider
