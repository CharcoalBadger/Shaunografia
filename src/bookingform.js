import React, { useState, useEffect } from "react";
import { useForm } from "@formspree/react";
import ReactSelect from "react-select";
import "./bookingform.css";
import Navbar from "./navbar";
import Shortfooter from "./shortfooter";
import Aboutstar from "./aboutstar";

export default function Bookingform() {
  const options = [
    {
      label: "Inspired Muses",
      options: [
        {
          value: "Individual",
          label: "Individual",
          groupLabel: "Inspired Muses",
        },
        { value: "Duo", label: "Duo", groupLabel: "Inspired Muses" },
      ],
    },
    {
      label: "Forever & Always",
      options: [
        { value: "Wedding", label: "Wedding", groupLabel: "Forever & Always" },
        {
          value: "Engagement",
          label: "Engagement",
          groupLabel: "Forever & Always",
        },
        {
          value: "Elopement",
          label: "Elopement",
          groupLabel: "Forever & Always",
        },
      ],
    },
    {
      label: "Embracing The Energy",
      options: [
        { value: "Event", label: "Event", groupLabel: "Embracing The Energy" },
        {
          value: "Festival",
          label: "Festival",
          groupLabel: "Embracing The Energy",
        },
      ],
    },
  ];

  const [selectedOption, setSelectedOption] = useState("");

  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [Pfname, setPfname] = useState("");
  const [Plname, setPlname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Send Message");
  const [state, handleSubmit] = useForm("mlekjgvg");

  useEffect(() => {
    window.scrollTo(0, 0);
    let timeoutId;
    if (state.submitting) {
      setButtonText("Sending...");
    } else if (state.succeeded) {
      setButtonText("Message Sent"); // change button text to "Message Sent"
      timeoutId = setTimeout(() => {
        setFname("");
        setEmail("");
        setMessage("");
        setButtonText("Thank you (:"); // reset button text to "Send Message"
      }, 2000);
    }
    return () => clearTimeout(timeoutId);
  }, [state.submitting, state.succeeded]);

  function handleButtonClick() {
    handleSubmit();
  }

  return (
    <div booking-container>
      <div>
        <Navbar />
      </div>
      <Aboutstar />
      <div className="contact-form">
        <h1> Booking Form</h1>
        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/mlekjgvg"
          method="POST"
        >
          <ReactSelect
            options={options}
            value={selectedOption}
            onChange={(option) => setSelectedOption(option)}
            className="bookingType"
            placeholder="Select a booking type"
            formatOptionLabel={({ label, value }, { context }) => {
              if (context === "menu") {
                return label;
              } else {
                const groupLabel = options.find((group) =>
                  group.options.some((opt) => opt.value === value)
                )?.label;
                return `${groupLabel}: ${label}`;
              }
            }}
            styles={{
              menu: (provided) => ({ ...provided, textAlign: "center" }),
              groupHeading: (provided) => ({
                ...provided,
                textAlign: "center",
                fontWeight: "bold",
                color: "var(--color-background)",
              }),
              option: (provided, { isFocused }) => ({
                ...provided,
                textAlign: "center",
                color: "var(--color-background)",
                backgroundColor: isFocused ? "#119DA4" : null,
              }),
            }}
          />
          <input
            type="hidden"
            name="bookingType"
            value={
              selectedOption
                ? `${selectedOption.groupLabel}: ${selectedOption.label}`
                : ""
            }
          />
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={Fname}
            onChange={(e) => setFname(e.target.value)}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={Lname}
            onChange={(e) => setLname(e.target.value)}
          />
          <input
            type="text"
            name="partnerFirstName"
            placeholder="Partner's First Name"
            value={Pfname}
            onChange={(e) => setPfname(e.target.value)}
          />
          <input
            type="text"
            name="partnerLastName"
            placeholder="Partner's Last Name"
            value={Plname}
            onChange={(e) => setPlname(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="date"
            name="bookingDate"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="text"
            name="bookingLocation"
            placeholder="Booking Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <textarea
            name="planDescription"
            placeholder="Describe Your Plan"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" onClick={handleButtonClick}>
            {buttonText}
          </button>
        </form>
      </div>
      <div>
        <Shortfooter />
      </div>
    </div>
  );
}
