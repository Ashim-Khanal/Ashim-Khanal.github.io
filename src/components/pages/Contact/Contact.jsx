import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xwsmucb",     // from EmailJS dashboard
        "template_mza8jnn",    // from EmailJS dashboard
        form.current,
        "S6YrKjY3MGHinj20S"      // from EmailJS account 
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message. Try again!");
          console.error(error);
        }
      );
  };

  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        <form ref={form} onSubmit={sendEmail} className="p-8 md:mx-4 bg-white rounded-md shadow-md">
          <div className="m-3">
            <h3 className="text-2xl text-gray-800 font-bold mb-6">Get in Touch</h3>
          </div>
          <div className="w-full flex flex-wrap">
            <div className="w-full md:w-1/2">
              <div className="m-3">
                <input type="text" name="name" placeholder="Your Name" required className="w-full border border-gray-100 rounded py-4 px-6 text-sm bg-white" />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="m-3">
                <input type="email" name="email" placeholder="Your Email" required className="w-full border border-gray-100 rounded py-4 px-6 text-sm bg-white" />
              </div>
            </div>
            <div className="w-full">
              <div className="m-3">
                <input type="text" name="subject" placeholder="Subject" required className="w-full border border-gray-100 rounded py-4 px-6 text-sm bg-white" />
              </div>
            </div>
            <div className="w-full">
              <div className="m-3">
                <textarea name="message" rows="6" placeholder="Your Message" required className="w-full border border-gray-100 rounded py-4 px-6 text-sm bg-white" />
              </div>
            </div>
            <div className="w-full">
              <div className="m-3 text-right">
                <input type="submit" value="Send Message" className="rounded bg-blue-600 text-center border-0 py-3 px-6 text-white leading-7 tracking-wide hover:bg-blue-800 cursor-pointer" />
              </div>
            </div>
          </div>
          <ToastContainer />
        </form>
      </div>
    </section>
  );
};

export default Contact;
