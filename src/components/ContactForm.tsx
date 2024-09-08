"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm: React.FC<{}> = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  // Change this function for mailing or other functionalities
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // EmailJS authentication
    const serviceId = "";
    const templateId = "";
    const userId = "";

    emailjs.send(serviceId, templateId, formState, userId).then(
      (result) => {
        console.log("Email Sucessful:", result.text);
        setFormState({
          name: "",
          email: "",
          message: "",
        });
      },
      (error): void => {
        console.error("Error Sending Email", error.text);
      }
    );
  };

  return (
    <div className="flex justify-center">
      <div className="container rounded-lg shadow-md mx-auto p-6 md:w-1/2">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col space-y-4 ">
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="name"
                className="block font-medium text-sesa-navy"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="input input-bordered w-full p-2 rounded-md"
                placeholder="Enter your name"
                value={formState.name}
                required={true}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="email"
                className="block font-medium text-sesa-navy"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="input input-bordered w-full p-2 rounded-md"
                placeholder="Enter your email"
                value={formState.email}
                required={true}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="message"
                className="block font-medium text-sesa-navy"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="input input-bordered w-full h-40 p-2 rounded-md"
                placeholder="Enter your message"
                value={formState.message}
                required={true}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-left">
          <a
            key="submit-button"
            className="button"
          >
            Submit
          </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
