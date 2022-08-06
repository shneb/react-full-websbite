import React from "react";
import ContactFrom from "../components/contactForm/ContactForm";
import Card from "../components/card/Card";
import "./contact.css";
import Maps from "../components/maps/Maps";

const locations = [
  {
    country: "Libya",
    city: "Tripoli",
    title: "The Probe International (TPI) LTD",
    address: "15 Aleskandaria Street",
    address1: "Mizran Street",
    postCode: "P.O. Box 32",
    email: ["Info@TPI.com", "Info@TPI.com"],
    phone: ["+218 91 954 3549", "+218 21 334 6376"],
    isHQ: true,
  },
  {
    country: "Libya",
    city: "Tripoli",
    title: "The Probe International (TPI) LTD",
    address: "15 Aleskandaria Street",
    address1: "Mizran Street",
    postCode: "P.O. Box 32",
    email: ["Info@TPI.com", "Info@TPI.com"],
    phone: ["+218 91 954 3549", "+218 21 334 6376"],
    isHQ: false,
  },
  {
    country: "Libya",
    city: "Tripoli",
    title: "The Probe International (TPI) LTD",
    address: "15 Aleskandaria Street",
    address1: "Mizran Street",
    postCode: "P.O. Box 32",
    email: ["Info@TPI.com"],
    phone: ["+218 91 954 3549", "+218 21 334 6376"],
    isHQ: false,
  },
];

const Contact = () => {
  return (
    <div>
      <div className="map">
        <Maps />
      </div>

      <section class="contactUsCards">
        <section class="cards">
          {locations.map((location, index) => (
            <Card
              key={index}
              country={location.country}
              city={location.city}
              title={location.title}
              address={location.address}
              address1={location.address1}
              postCode={location.postCode}
              email={location.email}
              phone={location.phone}
              isHQ={location.isHQ}
            />
          ))}
        </section>
      </section>
      <h1>Contact Us:</h1>

      <ContactFrom />
    </div>
  );
};

export default Contact;
