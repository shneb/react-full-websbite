import React from "react";
import "./footer.css";
import gpt3logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3logo} alt="" />
          <p>
            Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
          </p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>overons</p>
          <p>overons</p>
          <p>overons</p>
          <p>overons</p>
          <p>overons</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>company</h4>
          <p>overons</p>
          <p>overons</p>
          <p>overons</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>overons</p>
          <p>overons</p>
          <p>overons</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>All copy Rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
