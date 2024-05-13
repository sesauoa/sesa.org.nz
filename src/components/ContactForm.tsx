"use client";
import React, { useState } from "react";

// Information to describe the form
interface FormProps {
  id: string;
  name: string;
}

// Data collected by the form depending on inputs
export interface FormDataProps {
  email: string;
  message: string;
}

const ContactForm: React.FC<FormProps> = (props) => {
  const [formData, setFormData] = useState<FormDataProps>({} as FormDataProps);

  // When the text in one of the inputs changes, updating the value of the appropriate form property
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Change this function for mailing or other functionalities
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Data currently just logged to show that it is working
    console.log(formData);
    alert("Form submitted successfully!");
    setFormData({ email: "", message: "" });
  };

  return (
    <div className="flex justify-center">
      <div className="container mx-auto py-6">
        <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col space-y-4" style={{ width: "50%" }}>
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
                value={formData.email}
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
                value={formData.message}
                required={true}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-left">
            <button type="submit" className="btn btn-outline font-sans">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
