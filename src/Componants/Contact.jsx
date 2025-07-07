import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import contactImg from "../assets/images/contact-me.svg";

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3dimsfp",
        "template_6otpmk6",
        form.current,
        "9Z70WFg7y3g3Ul1Hn"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setSuccess(true);
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <div className="min-h-screen text-gray-200 flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <img
          src={contactImg}
          alt="Contact Illustration"
          className="w-full h-auto object-contain"
        />

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-6 w-full"
        >
          <h2 className="text-3xl font-bold text-[#eaf2f5] mb-4">
            Let’s connect
          </h2>

          <input
            type="text"
            name="user_name"
            placeholder="Name"
            required
            className="border border-gray-300 rounded px-4 py-3 outline-[#1788ae]"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            required
            className="border border-gray-300 rounded px-4 py-3 outline-[#1788ae]"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            required
            className="border border-gray-300 rounded px-4 py-3 outline-[#1788ae]"
          ></textarea>

          <button
            type="submit"
            className="bg-[#1788ae] text-white px-6 py-3 rounded flex items-center justify-center gap-2 hover:bg-[#126d8c] transition"
          >
            <i className="fas fa-paper-plane"></i> Send Message
          </button>

          {success && (
            <p className="text-green-600 font-medium">
              ✔ Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
