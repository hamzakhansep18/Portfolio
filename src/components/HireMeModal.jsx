import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function HireMeModal({ onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [projectType, setProjectType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      message,
      projectType,
    };

    emailjs.send('service_0vf3y5s', 'template_35opfg8', templateParams, 'xgXuN0GKZTSsTJ7Uv')
	.then(
		(result) => {
		  console.log(result);
		  toast.success("Message Sent Successfully!");
		  setName("");
		  setEmail("");
		  setMessage("");
		  setProjectType("");
		},
		(error) => {
		  console.error(error.text);
		  toast.error("Failed to send message. Please try again later.");
		}
	  );
  };

  const projectTypes = [
    { value: 'web', label: 'Web Application' },
    { value: 'mobile', label: 'Mobile Application' },
    { value: 'uiux', label: 'UI/UX Design' },
    { value: 'branding', label: 'Branding' },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 dark:bg-gray-800">
        <button
          className="absolute top-0 right-0 mt-4 mr-4 text-2xl font-bold text-gray-800 hover:text-gray-300 dark:text-white"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">Hire Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white"
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md resize-none dark:bg-gray-700 dark:text-white"
            rows="4"
          ></textarea>
          <div className="relative">
            <label htmlFor="projectType" className="sr-only">Project Type</label>
            <select
              id="projectType"
              name="projectType"
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white"
            >
              <option value="">Select Project Type</option>
              {projectTypes.map((type) => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 dark:bg-blue-700 dark:text-white"
          >
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
}

export default HireMeModal;
