import React from "react";

function Footer() {
  return (
    <footer id="footer-down">
      <h2>Follow Us On</h2>
      <ul className="social-icon">
        <li className="facebook hvr-pulse">
          <a href="#">
            <i className="fa fa-facebook-f"></i>
          </a>
        </li>
        <li className="twitter hvr-pulse">
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li className="linkedin hvr-pulse">
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
        <li className="google-plus hvr-pulse">
          <a href="#">
            <i className="fa fa-google-plus"></i>
          </a>
        </li>
        <li className="youtube hvr-pulse">
          <a href="#">
            <i className="fa fa-youtube"></i>
          </a>
        </li>
        <li className="instagram hvr-pulse">
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
        </li>
        <li className="behance hvr-pulse">
          <a href="#">
            <i className="fa fa-behance"></i>
          </a>
        </li>
      </ul>
      <p>
        {" "}
        &copy; Copyright 2016 Manalel - Created By :{" "}
        <a href="http://manalel.com.au" target="_blank">
          Template Stock
        </a>{" "}
      </p>
    </footer>
  );
}

export default Footer;
