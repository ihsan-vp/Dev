import { useState } from "react";
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

const handleSubmit = (e) => {
  e.preventDefault();

  // Your WhatsApp number with country code
  const phoneNumber = "+917591943756";

  // Create message
  const message = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}
  `;

  // Encode message for URL
  const encodedMessage = encodeURIComponent(message);

  // WhatsApp URL
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Open WhatsApp
  window.open(whatsappURL, "_blank");

  // Optional success state
  setSubmitted(true);

  // Clear form
  setFormData({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  setTimeout(() => setSubmitted(false), 5000);
};

  return (
    <div className="contact-container" id="contact">
      <div className="contact-header">
        <h2>Contact us We Help You</h2>
        <p>Have questions about compatibility or looking for a specific auto spare? Drop us a line!</p>
      </div>

      {submitted && (
        <div className="success-message">
          Thank you! Your message has been sent. Our team will get back to you shortly.
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group-row">
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Valid email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="tel">Phone Number</label>
            <input
              type="number"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="+91 1234567890"
            />
          </div>
        </div>


        <div className="form-group">
          <label htmlFor="message">Your Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Tell us how we can help you..."
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;