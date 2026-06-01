import { useState } from "react";
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    partNumber: "", // Added since your theme is auto spares
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
    
    // Process form data here (e.g., API call to backend)
    console.log("Form Submitted Successfully:", formData);
    
    // Show success message and clear form
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", partNumber: "", message: "" });
    
    // Hide success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-header">
        <h2>Contact Our Parts Experts</h2>
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
          <label htmlFor="partNumber">Part Number / Vehicle Model (Optional)</label>
          <input
            type="text"
            id="partNumber"
            name="partNumber"
            value={formData.partNumber}
            onChange={handleChange}
            placeholder="e.g., 2018 suzuki vxi Brake Pad"
          />
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