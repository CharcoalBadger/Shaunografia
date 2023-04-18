import React, { useState } from "react";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [state, handleSubmit] = useForm("mlekjgvg");
  if (state.succeeded) {
    return;
  }

  return (
    <div className="contact-container">
      <div className="page-container">
        <div className="contact-info-container">
          <h2 className="contact-info">Contact Info</h2>
          <a
            href="https://www.instagram.com/shaunografia/"
            className="contact-insta"
          >
            instagram.com/shaunografia
          </a>
          <a
            href="https://www.pexels.com/@shaunografia/"
            className="contact-pexel"
          >
            pexels.com/@shaunografia
          </a>
          <a href="https://www.instagram.com/shaunografia/">
            <img
              className="insta-icon"
              src="/insta-black-1.png"
              alt="Instagram"
            />
          </a>
          <a href="https://www.pexels.com/@shaunografia/">
            <img className="pexel-icon" src="/pexel-black-1.png" alt="Pexel" />
          </a>
        </div>
        <h2 className="together-title">Let's Work Together!</h2>
        <h2 className="form-title">Any Questions?</h2>
        <h2 className="contact-title">Send a Message</h2>
        <form
          onSubmit={handleSubmit}
          className="form-container"
          action="https://formspree.io/f/mlekjgvg"
          method="POST"
        >
          <div className="form-input-container">
            <input
              type="text"
              placeholder="Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
            />
            <input
              type="email"
              placeholder="Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              id="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-textarea"
            id="message"
            name="message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            className="form-button"
            disabled={state.submitting}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
