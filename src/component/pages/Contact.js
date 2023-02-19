import React, { useState } from "react";
import "./style/Contact.css";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';



function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail() {
    const recipient = "example@company.com";
    const subject = `Contact Us - ${firstName} ${lastName}`;
    const body = `First Name: ${firstName}\nLast Name: ${lastName}\nPhone Number: ${phone}\nMessage: ${message}`;
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
      <div className="ContainerContact">
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
        <p className="p1">Contact</p>
        <p className="p2">contact@emsicoders.com</p>
        <p className="p3">Based in</p>
        <p className="p4">Marrakech</p>
      </div>
      <div className="ContainerContact3">
      <a href="Facebook.com" className="facebook"><FacebookOutlinedIcon className="header-icon" fontSize="large" /></a>
      <a href="Instagram.com" className="insta"><InstagramIcon className="header-icon" fontSize="large" /></a>
      <a href="Twitter.com" className="twitter"><TwitterIcon className="header-icon" fontSize="large" /></a>

        </div>
      </div>
    </div>
  );
}

export default Contact;
