'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const salonImages = ['/image11.png', '/image12.png', '/image14.png'];

const galleryImages = [
  ['/image1.png', '/image2.png', '/image13.png'],
  ['/image4.png', '/image5.png', '/image11.png'],
  ['/image7.png', '/image8.png', '/image9.png'],
  ['/image12.png', '/image14.png', '/image5.png'],
];

const services = [
  { title: 'Hair Braids', sub: ['Box Braids', 'Cornrows', 'Feed-in Braids'] },
  { title: 'Hair Twist', sub: ['Two Strand Twists', 'Senegalese Twists'] },
  { title: 'Hair Dye', sub: ['Full Color', 'Highlights', 'Root Touch-Up'] },
  { title: 'Hair Locks', sub: ['Starter Locs', 'Retwist', 'Maintenance'] },
  { title: 'Extensions', sub: ['Weave Install', 'Tape-Ins', 'Clip-Ins'] },
  { title: 'Hair Retouch', sub: ['Relaxer Retouch', 'Color Retouch'] },
  { title: 'Wig Installations', sub: ['Lace Front', 'Closure Wig', 'Glue-less'] },
  { title: 'Shampoo', sub: ['Basic Wash', 'Deep Cleanse', 'Hydrating Treatment'] },
];

export default function Page() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [expanded, setExpanded] = useState(null);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', date: '', time: '', note: '', consent: false, firstVisit: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [today, setToday] = useState('');
  const formRef = useRef(null);

  useEffect(() => {
    const now = new Date();
    setToday(`${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % salonImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitted(false);

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => formData.append(key, value));

    try {
      const response = await fetch('https://casualsbarbersalon.ca/salon-form/salon.php', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', phone: '', date: '', time: '', note: '', consent: false, firstVisit: '' });
      } else {
        setError('Submission failed. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('An unexpected error occurred.');
    }
  };

  const timeSlots = [];
  for (let hour = 9; hour <= 20; hour++) {
    for (let min of [0, 30]) {
      const h = hour > 12 ? hour - 12 : hour;
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const label = `${h}:${min === 0 ? '00' : '30'} ${ampm}`;
      const value = `${hour.toString().padStart(2, '0')}:${min === 0 ? '00' : '30'}`;
      timeSlots.push({ label, value });
    }
  }

  return (
    <main className="bg-[#f1f1f1] font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center text-center bg-gray-200">
        <Image src={salonImages[activeSlide]} alt="Salon Hero" layout="fill" objectFit="cover" className="absolute z-0" />
        <div className="relative z-10 bg-white/80 p-6 px-6 rounded shadow-md">
          <h1 className="text-3xl md:text-4xl font-bold my-4">Hair Experience like Never Before</h1>
          <p>Your Satisfaction, Our Passion</p>
          <button className="bg-black text-white py-2 px-6 mt-2" onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}>
            Book Appointment
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 text-center">
        <h2 className="text-2xl font-semibold mb-6">Salon Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded shadow text-sm font-medium cursor-pointer" onClick={() => setExpanded(expanded === idx ? null : idx)}>
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              {expanded === idx && (
                <ul className="space-y-1">{service.sub.map((item, i) => <li key={i}>{item}</li>)}</ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white p-10">
        <h1 className="text-3xl font-bold text-center mb-8">Gallery</h1>
        <div className="flex flex-wrap justify-center gap-10">
          {galleryImages.map((group, idx) => (
            <div key={idx} className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 border-4 border-black cursor-pointer" onClick={() => setSelectedGallery(idx)}>
              <Image src={group[0]} alt={`Gallery ${idx + 1}`} width={128} height={128} className="object-cover w-full h-full" />
            </div>
          ))}
        </div>

        {selectedGallery !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="relative bg-white p-6 rounded-lg max-w-3xl w-full">
              <button onClick={() => setSelectedGallery(null)} className="absolute top-3 right-3 text-black text-2xl">✕</button>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {galleryImages[selectedGallery].map((img, i) => (
                  <Image key={i} src={img} alt={`Preview ${i}`} width={400} height={300} className="w-full rounded h-40 object-cover" />
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Form */}
      <section ref={formRef} className="max-w-4xl mx-auto py-15 p-6">
        <h1 className="text-3xl font-bold mb-8 text-center">Schedule An Appointment with Casuals</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="p-3 border w-full" required />
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="p-3 border w-full" required />
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="p-3 border w-full" required />
            <input type="date" name="date" value={form.date} onChange={handleChange} min={today} className="p-3 border w-full" required />
            <select name="time" value={form.time} onChange={handleChange} className="p-3 border w-full" required>
              <option value="">Select Time</option>
              {timeSlots.map((slot, index) => <option key={index} value={slot.value}>{slot.label}</option>)}
            </select>
          </div>

          <textarea name="note" value={form.note} onChange={handleChange} placeholder="Message" className="w-full p-3 border h-32" required />

          {/* First Time Visit */}
          <div className="flex items-center gap-4">
            <label className="text-sm font-medium">First time visit?</label>
            <label className="flex items-center gap-1">
              <input type="checkbox" checked={form.firstVisit === 'yes'} onChange={() => setForm(prev => ({ ...prev, firstVisit: prev.firstVisit === 'yes' ? '' : 'yes' }))} />
              <span>Yes</span>
            </label>
            <label className="flex items-center gap-1">
              <input type="checkbox" checked={form.firstVisit === 'no'} onChange={() => setForm(prev => ({ ...prev, firstVisit: prev.firstVisit === 'no' ? '' : 'no' }))} />
              <span>No</span>
            </label>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} />
            <span className="text-sm">I agree to be contacted by Casuals.</span>
          </div>

          {error && <p className="text-red-600 font-semibold">{error}</p>}

          <button type="submit" className="bg-black text-white px-6 py-2 font-semibold rounded">Submit</button>

          {submitted && (
            <div className="bg-green-100 border border-green-400 text-green-800 px-4 py-3 mt-4 rounded relative shadow-md">
              <strong>Thank you {form.name}!</strong> Your appointment has been booked.
              <br />A confirmation email has been sent to you.
              <button onClick={() => setSubmitted(false)} className="absolute top-1 right-2 text-xl font-bold text-green-700 hover:text-red-500" aria-label="Close">&times;</button>
            </div>
          )}
        </form>
      </section>

      {/* Videos */}
      <section className="w-full py-10 mt-5">
        <div className="flex flex-wrap justify-center gap-6">
          {['/video1.mp4', '/video2.mp4', '/video3.mp4'].map((video, idx) => (
            <video key={idx} src={video} controls className="w-64 h-60 max-md:h-40 max-md:w-90 rounded shadow-md object-cover" />
          ))}
        </div>
      </section>
    </main>
  );
}
