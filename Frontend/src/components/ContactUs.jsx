import React, { useState } from 'react';
import contactImage from '../assets/image.png';

function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      setErrorMessage('Please fill out all required fields.');
      return;
    }
    // Handle form submission logic here
    console.log('Form submitted', formData);
    setErrorMessage('');
  };

  return (
    <div className="container mx-auto my-16 p-6 max-w-4xl bg-white dark:bg-slate-800 rounded-md shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-center dark:text-white">Contact Us</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3 p-4">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Leave us a message</h2>
          <p className="mb-4 dark:text-slate-300">We love to hear from our customers!</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-slate-300 mb-2">Full name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:text-white"
                placeholder="Write your full name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-slate-300 mb-2">Email address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:text-white"
                placeholder="Type your email address"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-slate-300 mb-2">Subject</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:text-white"
                required
              >
                <option value="">Choose Subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Support">Support</option>
                <option value="Feedback">Feedback</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-slate-300 mb-2">Write your message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:text-white"
                placeholder="Write your message here ..."
                required
              />
              {errorMessage && (
                <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 duration-300"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
        <div className="md:w-1/3 p-4">
          <img src={contactImage} alt="Contact Us" className="w-full h-auto rounded-md mb-6" />

          <h2 className="text-2xl font-bold mb-4 dark:text-white">bookStore </h2>
          <p className="text-lg leading-7 mb-4 dark:text-slate-300">
            No: 24, 2nd Cross Jhalwa, Prayagraj, Uttar Pradesh, India - 211510
          </p>
          <p className="mb-4">
            <a href="mailto:cs@bookstore.com" className="text-blue-500 hover:underline dark:text-blue-400">
              cs@bookStore.com
            </a>
          </p>
          <p className="mb-4">
            <a href="tel:+918040114411" className="text-blue-500 hover:underline dark:text-blue-400">
              +91 00 0000 0000
            </a>
          </p>
          <p className="mb-4">
            <span className="text-gray-700 dark:text-slate-300">9:30 AM to 6:30 PM (Mon-Sat)</span>
          </p>
          <p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline dark:text-blue-400"
            >
              Get Directions
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
