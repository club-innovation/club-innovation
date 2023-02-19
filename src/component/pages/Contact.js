import React, { useState } from "react";
import "./style/Contact.css";

import { Outlet, Link } from "react-router-dom";



function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail() {
    const recipient = "example@company.com";
    const subject = `Contact Us - ${firstName} ${lastName}`;
    const body = `First Name: ${firstName}\n\nLast Name: ${lastName}\n\nPhone Number: ${phone}\n\nMessage: ${message}`;
    const messageUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(messageUrl, "_blank");
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!phone || !message) {
      alert("Please fill out all required fields.");
      return;
    }
    sendEmail();
  }

  return (
    <div className="Contact">
    <p className="Info">Contact <span className="primary-color">Us</span></p>
      <div className="ContainerContact1">
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            required
          />
          <br />
          <br />
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            required
          />
          <br />
          <br />
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            pattern="[0-9]*"
            required
          />
          <br />
          <br />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />
          <br />
          <br />
          <button type="submit">Contact Us</button>
        </form>
      </div>
      <div className="ContainerContact2">
        <p>Contact</p>
        <p>contact@emsicoders.com</p>
        <p>Based in</p>
        <p>Marrakech</p>
      </div>
      <div className="ContainerContact3">
      
      </div>
    </div>
  );
}

export default Contact;
