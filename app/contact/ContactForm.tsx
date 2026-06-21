"use client";
import CustomButton from "@/components/ui/custom-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { isSupabaseConfigured, supabase } from "@/integrations/supabase/client";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "sonner";

const ContactForm: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formLoadTime] = useState(() => Date.now().toString());
  const useSupabase = isSupabaseConfigured;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const honeypot = (form.elements.namedItem("_honeypot") as HTMLInputElement).value;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const website = (form.elements.namedItem("website") as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    if (honeypot) {
      setShowModal(true);
      form.reset();
      return;
    }

    if (Date.now() - parseInt(formLoadTime, 10) < 3000) {
      setShowModal(true);
      form.reset();
      return;
    }

    if (!name || !email || !message) {
      toast.error("Name, email, and message are required.");
      return;
    }

    setSubmitting(true);
    try {
      if (useSupabase) {
        const { data: result, error } = await supabase.functions.invoke("send-quote-request", {
          body: { name, email, phone: phone || null, website: website || null, message },
        });
        if (error || !result?.success) {
          throw new Error(error?.message || result?.error || "Submission failed");
        }
      } else {
        const response = await fetch("/api/sendEmail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            website,
            phone,
            message,
            _honeypot: honeypot,
            _timestamp: formLoadTime,
          }),
        });
        if (!response.ok) {
          throw new Error(await response.text());
        }
      }

      setShowModal(true);
      form.reset();
    } catch (error) {
      const msg = error instanceof Error ? error.message : "Something went wrong";
      toast.error(`Couldn't send your message: ${msg}`);
      console.error("Contact form error:", error);
    } finally {
      setSubmitting(false);
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
            <h1><a href="tel:+15755136238" className="hover:text-customGreen active:text-customGreen">Phone: (575) 513-6238</a></h1>
          </div>
          <div className="flex items-center gap-2">
            <Image src={"/images/email_icon.png"} width={50} height={50} alt="Email Icon" />
            <h1><a href="mailto:contact@mired.io" className="hover:text-customGreen active:text-customGreen">Email: contact@mired.io</a></h1>
          </div>
        </div>

        <form className="grid grid-cols-1 gap-4 mt-8 max-w-4xl m-auto" onSubmit={handleSubmit}>
          <input
            type="text"
            name="_honeypot"
            style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0 }}
            tabIndex={-1}
            autoComplete="off"
          />
          <Input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="rounded-none sm:px-6 h-12"
          />
          <Input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="rounded-none sm:px-6 h-12"
          />
          <Input
            type="email"
            name="email"
            placeholder="Email address"
            required
            className="rounded-none sm:px-6 h-12"
          />
          <Input
            type="text"
            name="website"
            placeholder="What's your website? (optional)"
            className="rounded-none sm:px-6 h-12"
          />
          <Textarea
            name="message"
            placeholder="What would you like us to know?"
            required
            cols={30}
            rows={8}
            className="px-6 py-4"
          />
          <div className="flex justify-center mt-12">
            <CustomButton type="submit" disabled={submitting}>
              {submitting ? "Sending…" : "Submit Your Consultation"}
            </CustomButton>
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
