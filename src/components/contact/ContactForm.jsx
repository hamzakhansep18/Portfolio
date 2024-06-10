import Button from "../reusable/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Debugging: Log form values
    console.log({
      from_name: name,
      from_email: email,
      subject,
      message
    });

    emailjs.sendForm(
      "service_0vf3y5s",
      "template_4ziaam4",
      e.target,
      "xgXuN0GKZTSsTJ7Uv"
    ).then(
      (result) => {
        console.log(result);
        toast.success("Message Sent Successfully!");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      },
      (error) => {
        console.error(error.text);
        toast.error("Failed to send message. Please try again later.");
      }
    );
  };

  return (
    <>
      <ToastContainer />
      <div className="w-full lg:w-1/2">
        <div className="leading-loose">
          <form
            onSubmit={handleSubmit}
            className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
          >
            <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
              Contact Form
            </p>
            <div className="font-general-regular mb-4">
              <label
                className="block text-lg text-primary-dark dark:text-primary-light mb-1"
                htmlFor="from_name"
              >
                Name
              </label>
              <input
                className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                type="text"
                value={name}
                id="from_name"
                name="from_name"
                placeholder="Name"
                aria-label="Name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="font-general-regular mb-4">
              <label
                className="block text-lg text-primary-dark dark:text-primary-light mb-1"
                htmlFor="from_email"
              >
                Email
              </label>
              <input
                className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                type="email"
                value={email}
                id="from_email"
                name="from_email"
                placeholder="Email"
                aria-label="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="font-general-regular mb-4">
              <label
                className="block text-lg text-primary-dark dark:text-primary-light mb-1"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                type="text"
                value={subject}
                id="subject"
                name="subject"
                placeholder="Subject"
                aria-label="Subject"
                required
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <div className="mt-6">
              <label
                className="block text-lg text-primary-dark dark:text-primary-light mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                id="message"
                value={message}
                name="message"
                cols="14"
                rows="6"
                aria-label="Message"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
              <Button
                title="Send Message"
                type="submit"
                aria-label="Send Message"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
