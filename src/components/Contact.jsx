import React from "react";
import './css_codes/Contact.css'
function Contact() {
  return (
    <div className="contact-page">

      <h1>Contact Us</h1>
      <p className="subtitle">We’d love to hear from you 👋</p>

      <div className="contact-container">

        {/* Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>

        {/* Info */}
        <div className="contact-info">
          <h3>Get in touch</h3>
          <p>Email: support@algoflow.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: India</p>
        </div>

      </div>

    </div>
  );
}

export default Contact;