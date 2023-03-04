<<<<<<< Updated upstream
import React from "react"
import "./Footer.css"

function Footer() {
=======
import React, { useState, useEffect } from "react";
import "./Footer.css";

import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DiscordIcon from "../imgs/svg/discord-mark-white1.svg";

import { addEmail, isEmailExists } from "../utils/firestore";

function Footer() {
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [isEmailValid, setEmailValid] = useState(false);

  const [submitCount, setSubmitCount] = useState(0);
  const emailSubscribtionKey = "submitCount";
  const expirationDateKey = "expirateDate";

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  }

  function handleInputChange(event) {
    setEmail(event.target.value.trim());
  }



  function validateEmail() {
    if (submitCount > 2) {
      setMessage("The subscription send limit has been exceeded.");
      setEmailValid(false);
      setShowMessage(true);
      localStorage.setItem(emailSubscribtionKey, 3);
      localStorage.setItem(expirationDateKey, (Date.now() + 1 * 24 * 60 * 60 * 1000));
      return;
    }

    const rejex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (rejex.test(email)) {

      isEmailExists(email).then((result) => {
        console.log(result);
        if (!result) {
          addEmail(new Date().toLocaleString(), email, isChecked);
        }
        setMessage("You have successfully subscribed.");
        setEmailValid(true);
      });

      setSubmitCount(submitCount => submitCount + 1);
      localStorage.setItem(emailSubscribtionKey, submitCount);
      console.log("New count: " + submitCount);
    } else {
      setMessage("Please enter a valid email address.");
      setEmailValid(false);
    }
    setShowMessage(true);
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function ResetCounter() {
    const tmpExpirationDateValue = localStorage.getItem(expirationDateKey);
    if (Date.now() > tmpExpirationDateValue) {
      setSubmitCount(0);
      localStorage.setItem(emailSubscribtionKey, 0);
    }
  }

  useEffect(() => {
    ResetCounter();
    const tmpValue = localStorage.getItem(emailSubscribtionKey);
    const local_submitCount = tmpValue ? +tmpValue : 0;
    setSubmitCount(() => local_submitCount);
  }, []);

>>>>>>> Stashed changes
  return (
    <div>Footer</div>
  )
}

export default Footer;