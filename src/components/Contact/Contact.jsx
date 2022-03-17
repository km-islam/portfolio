import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a53ejyt",
        "template_2s0oltu",
        form.current,
        "vNHRgKEmgS78n2YPm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <div className="contact_option">
            <HiOutlineMail className="contact_icon" />
            <h4>Email</h4>
            <a href="mailto:example@gmailcom">Send a message</a>
          </div>
          <div className="contact_option">
            <RiMessengerLine className="contact_icon" />
            <h4>Email</h4>
            <a href="mailto:example@gmailcom">Send a message</a>
          </div>
          <div className="contact_option">
            <FaWhatsapp className="contact_icon" />
            <h4>Email</h4>
            <a href="mailto:example@gmailcom">Send a message</a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact_form">
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
