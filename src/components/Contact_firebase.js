import React from "react";
import db from "./firebase";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore/lite";

const ContactForm = () => {
  const initialValues = { name: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);

  const [note, setNote] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    const contactRef = collection(db, "contact");
    e.preventDefault();
    if (formValues) {
      addDoc(
        contactRef,
        {
          name: formValues.name,
          email: formValues.email,
          message: formValues.message,
        },
        { capital: true },
        { merge: true }
      );
      setFormValues(initialValues);
      setNote("Thank You! We will get back to you🙏");
      setTimeout(() => {
        setNote("");
      }, 3000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
    >
      <h2 className="text-white text-lg mb-1 font-medium title-font">
        Contact Us
      </h2>
      <p className="leading-relaxed mb-5">
        Just fill in your details with a few words about yourself and the
        project , and we shall get back to you asap.
      </p>
      <div className="relative mb-4">
        <label for="name" className="leading-7 text-sm text-gray-400">
          Name
        </label>
        <input
          required="true"
          onChange={handleChange}
          value={formValues.name}
          type="text"
          id="name"
          name="name"
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label for="email" className="leading-7 text-sm text-gray-400">
          Email
        </label>
        <input
          required="true"
          name="email"
          onChange={handleChange}
          value={formValues.email}
          type="email"
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label for="message" className="leading-7 text-sm text-gray-400">
          Message
        </label>
        <textarea
          name="message"
          required="true"
          onChange={handleChange}
          value={formValues.message}
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        ></textarea>
      </div>
      <button className="text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 rounded text-lg">
        Submit
      </button>
      <p className="text-xs text-gray-400 text-opacity-90 mt-3">
        We value your privacy and promise that your data is safe with us.
      </p>
      <p className="text-xxl text-cyan-400 text-opacity-90 mt-3">{note}</p>
    </form>
  );
};

export default ContactForm;
