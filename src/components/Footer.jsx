import React from "react";
import { FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa";
//import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Styles/Footer.css";

const Footer = () => {
  // Map style const marker = {  lat: 23.1793,lng: 75.7849, };

  return (
    <footer className="footer">
      <div className="footer__links" id="footer">
        <div className="implinks">
          <p className="links">Links</p>
          <a href="https://www.ted.com">TEDx</a>
          <a href="https://blog.ted.com">TED Blog</a>
        </div>
        <div className="footer__content">
          {/* Socials */}
          <p>Contact us here</p>
          <div className="footer__icons">
            <a
              href="mailto:Tedxmitujjain@gmail.com"
              className="footer__icon-link"
            >
              <FaEnvelope size={40}/>
            </a>

            <a className="footer__icon-link" href="https://www.instagram.com/tedxmitujjain/">
              <FaInstagram size={40} />
            </a>
            <a className="footer__icon-link" href="https://www.linkedin.com/showcase/tedxofficial/">
              <FaLinkedin size={40} />
            </a>
          </div>
        </div>
        {/*<div className="footer__map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2114.8060962409745!2d75.80074294834374!3d23.17125044125409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963747a32368f65%3A0x154534689ce9ab49!2sKalidas%20Academy!5e0!3m2!1sen!2sin!4v1686891618825!5m2!1sen!2sin" width="40" height="30" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>*/}
      </div>
    </footer>
  );
};

export default Footer;
