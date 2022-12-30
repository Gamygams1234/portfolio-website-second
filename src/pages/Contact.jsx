import React, { useState } from "react";

import Socials from "../components/Socials";
import "../style/Contact.css";

function Contact() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [isValid, setValid] = useState(false);

  const formValid = (event) => {
    event.preventDefault();
    if (form.username && form.email && form.message) {
      setValid({
        isValid: true,
      });
      alert("wyslano");
    } else {
      setValid({
        isValid: true,
      });
    }
  };
  const handleChange = (event) => {
    // event.preventDefault();
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <section className="contact">
        <div className="section_wrapper">
          <span className="line"></span>
          <h2 className="secondary_title">Get in Touch</h2>
          <p className="text">
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a new role and am open to a wide range of
            opportunities. My preference would be to find a position in a
            company in London. But I’m also happy to hear about opportunites
            that don’t fit that description. I’m a hard-working and positive
            person who will always approach each task with a sense of purpose
            and attention to detail. Please do feel free to check out my online
            profiles below and get in touch using the form.
          </p>
          <Socials color={`black`} />
          <span className="line"></span>
        </div>
        <h2 className="secondary_title">Contact Me</h2>
        <form>
          <label>
            Name
            <input
              type="text"
              name="username"
              placeholder="Jane Appleseed"
              value={form.username}
              onChange={handleChange}
            />
            <div className="red">
              {!form.username && isValid ? (
                <span>This file is required</span>
              ) : null}
            </div>
          </label>
          <label>
            Email Address
            <input
              type="email"
              name="email"
              placeholder="email@example.com"
              value={form.email}
              onChange={handleChange}
            />
            <div className="red">
              {!form.email && isValid ? (
                <span>This file is required</span>
              ) : null}
            </div>
          </label>
          <label>
            Message
            <textarea
              className="message"
              type="textarea"
              name="message"
              placeholder="How can I help?"
              value={form.message}
              onChange={handleChange}
            />
            <div className="red">
              {!form.message && isValid ? (
                <span>This file is required</span>
              ) : null}
            </div>
          </label>
          <button
            onClick={(e) => formValid(e)}
            className="submit_button"
            type="submit"
          >
            send message
          </button>
        </form>
      </section>
    </>
  );
}

export default Contact;
