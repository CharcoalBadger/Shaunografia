import React, { useState, useEffect } from "react";
import "./maincontact.css";
import { useForm, ValidationError } from "@formspree/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Maincontact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Send Message");
  const [state, handleSubmit] = useForm("mlekjgvg");

  useEffect(() => {
    let timeoutId;
    if (state.submitting) {
      setButtonText("Sending...");
    } else if (state.succeeded) {
      setButtonText("Message Sent"); // change button text to "Message Sent"
      timeoutId = setTimeout(() => {
        setName("");
        setEmail("");
        setMessage("");
        setButtonText("Send again"); // reset button text to "Send Message"
      }, 2000);
    }
    return () => clearTimeout(timeoutId);
  }, [state.submitting, state.succeeded]);

  function handleButtonClick() {
    handleSubmit();
  }

  function autoResize(event) {
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  }

  useEffect(() => {
    // gsap.from(".maincontact-title", {
    //   scrollTrigger: {
    //     trigger: ".maincontact-title",
    //     start: "top 80%",
    //     end: "bottom 400px",
    //   },
    //   "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    //   opacity: 0,
    //   ease: "power4.inOut",
    //   y: 100,
    //   duration: 1,
    // });

    gsap.from(".maincontact-subtitle", {
      scrollTrigger: {
        trigger: ".maincontact-title",
        start: "top 80%",
        end: "bottom 400px",
      },
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      y: 100,
      duration: 1.5,
    });

    gsap.from(".form-input", {
      scrollTrigger: {
        trigger: ".maincontact-title",
        start: "top 80%",
        end: "bottom 400px",
      },
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      y: 100,
      duration: 2,
    });

    gsap.from(".form-textarea", {
      scrollTrigger: {
        trigger: ".maincontact-title",
        start: "top 80%",
        end: "bottom 400px",
      },
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      y: 100,
      duration: 2.5,
    });

    gsap.from(".form-button", {
      scrollTrigger: {
        trigger: ".maincontact-title",
        start: "top 80%",
        end: "bottom 400px",
      },
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      y: 100,
      duration: 1.5,
    });
  }, []);
  return (
    <div className="maincontact-container">
      <div className="maincontact-main">
        <h1 className="maincontact-title">Contact Me</h1>
        <p className="maincontact-subtitle">
          Let's Work <span className="colored-event">Together</span>
        </p>

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

            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onInput={autoResize}
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
              onClick={handleButtonClick}
            >
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
