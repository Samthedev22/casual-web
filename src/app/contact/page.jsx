'use client';

import React, { useState, useEffect } from 'react';
import { MdPhone, MdEmail, MdLocationOn, MdPerson } from 'react-icons/md';
import Image from 'next/image';

const ContactPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
    consent: false,
  });

  const [status, setStatus] = useState({
    message: '',
    type: '', // 'success' or 'error'
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('number', form.number);
    formData.append('message', form.message);
    formData.append('consent', form.consent ? 'Yes' : 'No');

    try {
      const response = await fetch('https://casualsbarbersalon.ca/contact-form/contact.php', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus({ message: 'Message sent successfully!', type: 'success' });
        setForm({ name: '', email: '', number: '', message: '', consent: false });
      } else {
        setStatus({ message: 'Failed to send message.', type: 'error' });
      }
    } catch (error) {
      setStatus({ message: 'An error occurred. Please try again later.', type: 'error' });
    }
  };

  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => {
        setStatus({ message: '', type: '' });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="flex flex-col gap-5 pb-10 bg-[#f1f1f1]">
      <section className="w-full flex items-center justify-center bg-gray-200 relative overflow-hidden">
        <Image
          src="/image1.png"
          alt="Appointment"
          objectFit="cover"
          className="z-0 w-full h-120 max-md:h-90 object-cover"
          width={1000}
          height={1000}
        />
        <h1 className="absolute text-2xl p-5 text-white font-bold bg-black/50">CONTACT</h1>
      </section>

      <section>
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto flex flex-col gap-4 p-6"
        >
          <h2 className="text-3xl font-bold text-center mb-5 mt-0 px-10">
            Leave a Message or Feedback
          </h2>

          {status.message && (
            <div
              className={`text-center p-3 rounded font-semibold ${
                status.type === 'success'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {status.message}
            </div>
          )}

          <label className="flex gap-1 flex-row">Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="border border-gray-400 p-3 rounded"
          />

          <label className="flex gap-1 flex-row">Email <span className="text-red-500">*</span></label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="user@domain.com"
            required
            className="border border-gray-400 p-3 rounded"
          />

          <label className="flex gap-1 flex-row">Phone <span className="text-red-500">*</span></label>
          <input
            type="tel"
            name="number"
            value={form.number}
            onChange={handleChange}
            placeholder="+1 (555)-xxx-xxxx"
            className="border border-gray-400 p-3 rounded"
            required
          />

          <label className="flex gap-1 flex-row">Message <span className="text-red-500">*</span></label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            rows={5}
            className="border border-gray-400 p-3 rounded"
            required
          />

          <div>
            <input
              type="checkbox"
              name="consent"
              checked={form.consent}
              onChange={handleChange}
              className="mr-2"
            />
            I agree to be contacted by Casual's to the email and phone number provided above.
          </div>

          <button
            type="submit"
            className="bg-black text-white py-3 rounded hover:opacity-90"
          >
            Submit
          </button>
        </form>
      </section>

      <section className="bg-[#e0e0e0] p-6 text-center rounded py-15 gap-15">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="mb-4 max-w-2xl mx-auto">
          Welcome to Casuals. We are a team of hair stylists and barbers with 20+ years of experience.
        </p>
        <div className="flex items-center justify-center gap-2 text-lg font-semibold">
          <span>Join The Team</span>
          <MdPerson size={22} />
        </div>
        <p className="mt-4 max-w-2xl mx-auto">
          To join the Casuals, kindly fill the contact form with your details and message or call us on our number.
        </p>
      </section>

      <div className="flex w-full max-md:flex-col py-10 gap-10">
        <section className="w-full md:w-1/2 grid place-items-center px-4">
          <div className="text-gray-800 text-center flex flex-col gap-4 max-w-md">
            <h3 className="text-2xl font-bold mb-2">Casuals Barber Salon</h3>
            <div className="flex items-center justify-center gap-3">
              <MdPhone className="text-xl text-[#3B4CA3]" />
              <span>+1 (613) -260 -0333</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MdEmail className="text-xl text-[#3B4CA3]" />
              <span>info@casualsbarbersalon.ca</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MdLocationOn className="text-xl text-[#3B4CA3]" />
              <span>2229 St. Laurent Blvd. Ottawa ON K1B 1B1</span>
            </div>
          </div>
        </section>

        <section className="w-full md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.9853434087922!2d-75.61980512373009!3d45.38946647107285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0f39da0444e3%3A0xc406c9f9ea980afe!2sCasuals!5e0!3m2!1sen!2sca!4v1747090398488!5m2!1sen!2sca"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full rounded shadow-lg"
          />
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
