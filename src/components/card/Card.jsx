import React from "react";
import "./card.css";
const Card = ({
  email2,
  country,
  city,
  title,
  address,
  address1,
  postCode,
  email,
  phone,
  isHQ,
}) => {
  return (
    <div>
      <article class="card">
        <h2>{country}</h2>
        <h3>{city}</h3>
        <h4>
          <span>{isHQ ? "Headquarters" : ""}</span>
        </h4>
        <p>{address} - Mizran Street P.O. Box 32 Tripoli, Libya</p>
        <p>{address1}</p>
        <p>{postCode}</p>
        {email.map((item, index) => (
          <p>
            <a href="mailto:Info@TPI.com" key={index}>
              {item}
            </a>
          </p>
        ))}
        {phone.map((item, index) => (
          <p>
            <a href={`tel:${item}`} key={index}>
              {item}
            </a>
          </p>
        ))}
      </article>
    </div>
  );
};

export default Card;
