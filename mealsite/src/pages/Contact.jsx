import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css"; // Import the CSS file

function Contact() {
  const [state, handleSubmit] = useForm("mwpkwdqg");
  if (state.succeeded) {
    return (
      <p className="success-message">Thank you, we will get back to you! </p>
    );
  }
  return (
    <div className="contactformpage">
      {" "}
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="email" className="form-label">
          Email Address
        </label>
        <input id="email" type="email" name="email" className="form-input" />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="validation-error"
        />{" "}
        <label htmlFor="number"><b>Phone Number</b></label>
        <input
          type="number"
          name="Phone-number"
          id="phone"
          className="form-input"
        />
        <label htmlFor="message" className="form-label">
          Your Message
        </label>
        <textarea id="message" name="message" className="form-textarea" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="validation-error"
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="form-button"
        >
          Submit
        </button>
      </form>
      <section className="contact-image">
        <h2>Reach Us Out!</h2>
        <p>Let's share ideas about food and more recipes</p>
        <img id="contactimages"
          src="https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aWVhcyUyMGFib3V0JTIwZm9vZCUyMGFuZCUyMHJlY2lwZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="berries"
        />
      </section>
    </div>
  );
}
export default Contact;
