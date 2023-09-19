import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      setError(null);
      setLoading(true);
      await emailjs.sendForm(
        "service_2e61c8i",
        "template_yw4hdf8",
        e.target,
        "o8droO4B2miGlUWSI"
      );
      setLoading(false);
      setSuccess("Email successfully sent");
    } catch (err) {
      setLoading(false);
      setSuccess(null);
      setError("Something went wrong. Try again");
    }
  };

  return (
    <div className="contact-container">
      <h2 className="text-center">CONTACT</h2>

      <ul className="flex flex-col gap-2 mb-2">
        <li>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/thabang-masola-140985231/">
            Thabang Masola
          </a>
        </li>
        <li>
          Phone/whatsapp: <span>064 937 6761</span>
        </li>
        <li>
          Email: <span>tjmasola11@gmail.com</span>
        </li>
      </ul>

      <p className="text-yellow-300">
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible
      </p>

      {error && !success && !loading && (
        <p
          style={{
            padding: "10px",
            borderRadius: "8px",
            backgroundColor: "red",
            color: "white",
          }}
        >
          {error}
        </p>
      )}
      {success && !error && !loading && (
        <p
          style={{
            padding: "10px",
            borderRadius: "8px",
            backgroundColor: "green",
            color: "white",
          }}
        >
          {success}
        </p>
      )}
      {loading && (
        <p
          style={{
            padding: "10px",
            borderRadius: "8px",
            backgroundColor: "orange",
            color: "white",
          }}
        >
          Loading...
        </p>
      )}

      <form onSubmit={(e) => sendEmail(e)}>
        <label htmlFor="email_from">Your Email:</label>
        <input
          type="text"
          id="email_from"
          name="email_from"
          spellCheck={false}
          placeholder="Email address"
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter Your Message"
          spellCheck={false}
        />

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default Contact;
