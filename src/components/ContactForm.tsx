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
      <div className="container custom-border mx-auto p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col space-y-4" style={{ width: "50%" }}>
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="name"
                className="block text-m font-medium text-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter your name"
                value={formState.name}
                required={true}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="email"
                className="block text-m font-medium text-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
                value={formState.email}
                required={true}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="message"
                className="block text-m font-medium text-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="input input-bordered w-full h-40"
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
