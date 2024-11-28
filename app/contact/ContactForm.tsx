"use client";
import CustomButton from "@/components/ui/custom-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  website: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData: FormData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      website: (form.elements.namedItem('website') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowModal(true);
        form.reset();
      } else {
        console.error('Error sending email:', await response.text());
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative z-50 py-20">
      <div className="container">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="heading-1">Let&apos;s Get To Work</h2>
          <p className="my-3 max-w-[600px] mx-auto leading-8">
            We would love to learn more about your business. If you would like
            to get in touch, please use the form below.
          </p>
        </div>

        <div className="items-center md:flex m-auto justify-center gap-12 mt-8">
          <div className="flex items-center gap-2 md:mb-0 mb-4">
            <Image src={"/images/phone_icon.png"} width={50} height={50} alt="Phone Icon" />
            <h1><a href="tel:+14696197722" className="relative group">
              <span className="relative z-10">(469) 619-7722</span>
              <span className="absolute inset-x-0 bottom-0 h-[40%] bg-customGreen scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a></h1>
          </div>
          <div className="flex items-center gap-2">
            <Image src={"/images/email_icon.png"} width={50} height={50} alt="Email Icon" />
            <h1><a href="mailto:contactmired@gmail.com" className="relative group">
              <span className="relative z-10">contact@mired.io</span>
              <span className="absolute inset-x-0 bottom-0 h-[40%] bg-customGreen scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a></h1>
          </div>
        </div>

        <form className="grid grid-cols-1 gap-4 mt-8 max-w-4xl m-auto" onSubmit={handleSubmit}>
          <div className="grid sm:grid-cols-2 gap-4">
            <Input
              type="text"
              name="name"
              placeholder="Name"
              className="rounded sm:px-6 h-12 text-lg"
            />
            <Input
              type="phone"
              name="phone"
              placeholder="Phone Number"
              className="rounded sm:px-6 h-12 text-lg"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Input
              type="email"
              name="email"
              placeholder="Email address"
              className="rounded sm:px-6 h-12 text-lg"
            />
            <Input
              type="text"
              name="website"
              placeholder="What's your website? (optional)"
              className="rounded sm:px-6 h-12 text-lg"
            />
          </div>
          <Textarea
            name="message"
            placeholder="What would you like us to know?"
            cols={30}
            rows={8}
            className="rounded px-6 py-4 text-lg"
          />
          <div className="flex justify-center mt-12">
            <button 
              type="submit"
              className="w-fit rounded-10 outline-none focus:outline-none text-sm sm:text-base font-bold font-manrope relative py-2 px-10 h-14 inline-flex items-center justify-center gap-4 bg-skin-blue-800 hover:bg-skin-blue-800/95 text-white transition-colors ease-in-out duration-300
              before:absolute before:w-full before:h-full before:bg-skin-pink-300 before:-z-10 before:-top-0 before:-left-0 before:rounded-10 before:transition-all before:ease-out before:duration-300 hover:before:-top-1 hover:before:-left-1
              after:absolute after:w-full after:h-full after:bg-skin-yellow-600 after:-z-10 after:top-0 after:left-0 after:rounded-10 after:transition-all after:ease-out after:duration-300 hover:after:top-1.5 hover:after:left-1.5"
            >
              Submit Your Consultation
            </button>
          </div>
        </form>

        {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#F6F3EC] bg-opacity-75">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
            <p className="mb-6">We will reach out within 24-48 business hours.</p>
            <button
              className="bg-[#F6F3EC] text-black font-bold py-2 px-4 rounded focus:outline-none hover:bg-yellow-500 transition-colors duration-300 w-full"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default ContactForm;
