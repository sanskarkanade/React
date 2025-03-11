import React from 'react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");

    // console statement of form data
    console.log(formData);

    setFormData({ name: "", email: "", message: "" });
  };


  return (
    <div className="flex flex-col items-center p-6 pt-28 sm:pt-18">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      
      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className="w-full p-2 border rounded"
            required 
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="w-full p-2 border rounded"
            required 
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Message</label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            className="w-full p-2 border rounded" 
            required 
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send Message</button>
      </form>

      {/* Contact Details */}
      <div className="mt-6 text-center">
        <p>📍 Address: 123 Eshany Bazzar Street, New Delhi, India</p>
        <p>📞 Phone: +91 9876543210</p>
        <p>📧 Email: support@eshanybazzar.com</p>
        <p>⏰ Hours: Mon-Fri 9:00 AM - 6:00 PM</p>
      </div>
    </div>
  )
}

export default Contact
