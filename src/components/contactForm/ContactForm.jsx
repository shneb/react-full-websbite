import React from "react";
import "./contactForm.css";

const ContactForm = () => {
  return (
    <div>
      <section className="contactUsForm">
        <h2>Message us</h2>
        <form action="" method="post">
          <section className="contactContainer">
            <article className="input">
              <label for="nameInput">Name:</label>
              <input id="nameInput" type="text" placeholder=" John Smith" />
            </article>
            <article className="input">
              <label for="telInput">Contact Number:</label>
              <input
                type="tel"
                name=""
                id="telInput"
                placeholder=" +44 7231 987345"
              />
            </article>
            <article className="input">
              <label for="emailInput">Email:</label>
              <input
                type="email"
                name=""
                id="emailInput"
                placeholder=" John@tpi.com"
              />
            </article>
          </section>
          <section className="messageContainer">
            <label for="messageInput">Message:</label>
            <textarea
              name=""
              id="messageInput"
              cols="30"
              rows="10"
              placeholder=" Message..."
            ></textarea>
          </section>
          <section className="submitBtnContainer">
            <button type="submit">Send</button>
          </section>
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
