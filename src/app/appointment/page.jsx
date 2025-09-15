"use client";

import React, { useState, useEffect } from "react";
import { PiScissorsLight } from "react-icons/pi";
import Image from "next/image";

const AppointmentPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    barber: "",
    time: "",
    note: "",
    firstVisit: "", // ✅ corrected typo here
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [today, setToday] = useState("");

  useEffect(() => {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    setToday(`${yyyy}-${mm}-${dd}`);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.firstVisit) {
      setError("Please indicate if this is your first visit.");
      return;
    }

    if (!form.consent) {
      setError("Please check the agreement box.");
      return;
    }

    setError("");

    const formData = new FormData();
    for (let key in form) {
      formData.append(key, form[key]);
    }

    try {
      const res = await fetch(
        "https://casualsbarbersalon.ca/appointment-form/appointment.php",
        {
          method: "POST",
          body: formData,
        }
      );

      if (res.ok) {
        setSubmitted(true);
        setForm({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: "",
          barber: "",
          time: "",
          note: "",
          firstVisit: "", // ✅ also reset here
          consent: false,
        });
      } else {
        setError("Failed to book appointment. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again.");
    }
  };

  const timeSlots = [];
  for (let hour = 9; hour <= 20; hour++) {
    for (let min of [0, 30]) {
      const h = hour > 12 ? hour - 12 : hour;
      const ampm = hour >= 12 ? "PM" : "AM";
      const label = `${h}:${min === 0 ? "00" : "30"} ${ampm}`;
      const value = `${hour.toString().padStart(2, "0")}:${min === 0 ? "00" : "30"}`;
      timeSlots.push({ label, value });
    }
  }

  return (
    <div className="w-full bg-[#F0F0F0]">
      {/* Hero Section */}
      <section className="w-full h-25 max-sm:h-30 bg-black/90 py-8">
        <div className="max-w-5xl mx-auto px-6 text-center pb-10">
          <h1 className="text-white text-2xl md:text-3xl font-bold">
            Get <span className="text-yellow-400">10% Off</span> on Your First
            Visit to Our Shop!
          </h1>
        </div>
      </section>

      <section className="hidden md:flex items-center px-15 bg-gray-500">
        <div className="w-50 h-50 flex flex-row gap-10 p-10">
          <Image
            src="/image5.png"
            width={150}
            height={150}
            alt="appointment image"
            className="rounded-full"
            priority
          />
          <Image
            src="/image18.png"
            width={150}
            height={150}
            alt="appointment image"
            className="rounded-full"
            loading="lazy"
          />
          <Image
            src="/image11.png"
            width={150}
            height={150}
            alt="appointment image"
            className="rounded-full"
            loading="lazy"
          />
          <Image
            src="/image13.png"
            width={1000}
            height={1000}
            alt="appointment image"
            className="rounded-full"
            loading="lazy"
          />
          <Image
            src="/image17.png"
            width={150}
            height={150}
            alt="appointment image"
            className="rounded-full"
            loading="lazy"
          />
          <Image
            src="/image14.png"
            width={150}
            height={150}
            alt="appointment image"
            className="rounded-full"
            loading="lazy"
          />
          <Image
            src="/image16.png"
            width={150}
            height={150}
            alt="appointment image"
            className="rounded-full"
            loading="lazy"
          />
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-4xl mx-auto py-15 p-6 text-left">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Schedule An Appointment with Casuals
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block font-semibold mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="p-3 border w-full"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="p-3 border w-full"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block font-semibold mb-1">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="p-3 border w-full"
                required
              />
            </div>

            <div className="w-full flex">
              <div className="flex-col w-full">
                <label htmlFor="service" className="block font-semibold mb-1">
                  Service <span className="text-red-500">*</span>
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="p-3.5 px-5 border"
                  required
                >
                  <option value="">Choose Service</option>
                  <option value="Barber">Barber</option>
                  <option value="Salon">Salon</option>
                </select>
              </div>

              {form.service === "Barber" && (
                <div className="flex flex-col w-full">
                  <label htmlFor="barber" className="flex gap-1 mb-1">
                    Barber <span className="text-gray-500">(optional)</span>
                  </label>
                  <select
                    name="barber"
                    value={form.barber}
                    onChange={handleChange}
                    className="p-3.5 border"
                  >
                    <option value="">Choose A Barber</option>
                    <option value="Tony">Tony</option>
                    <option value="Micheal">Micheal</option>
                    <option value="Danny">Danny</option>
                    <option value="Any">Endrias</option>
                    <option value="Any">Any</option>
                  </select>
                </div>
              )}
            </div>
          </div>

          <div className="w-full flex flex-row gap-2">
            <div className="w-full">
              <label htmlFor="date" className="block font-semibold mb-1">
                Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="date"
                value={form.date}
                min={today}
                onChange={handleChange}
                className="p-3 border w-full"
                required
              />
            </div>

            <div className="w-full">
              <label htmlFor="time" className="block font-semibold p-1">
                Time <span className="text-red-500">*</span>
              </label>
              <select
                name="time"
                value={form.time}
                onChange={handleChange}
                className="p-3 border w-full"
                required
              >
                <option value="">Select Time</option>
                {timeSlots.map((slot, idx) => (
                  <option key={idx} value={slot.value}>
                    {slot.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="note" className="block font-semibold mb-1">
              Message <span className="text-gray-500 text-sm">(optional)</span>
            </label>
            <textarea
              name="note"
              value={form.note}
              placeholder="leave a message..."
              onChange={handleChange}
              className="w-full p-3 border h-32"
            />
          </div>

          {/* ✅ First Time Visit Question */}
          <div className="flex items-center gap-4">
            <label className="text-sm font-medium">First time visit?</label>

            <label className="flex items-center gap-1">
              <input
                type="checkbox"
                checked={form.firstVisit === "yes"}
                onChange={() =>
                  setForm((prev) => ({
                    ...prev,
                    firstVisit: prev.firstVisit === "yes" ? "" : "yes",
                  }))
                }
              />
              <span>Yes</span>
            </label>

            <label className="flex items-center gap-1">
              <input
                type="checkbox"
                checked={form.firstVisit === "no"}
                onChange={() =>
                  setForm((prev) => ({
                    ...prev,
                    firstVisit: prev.firstVisit === "no" ? "" : "no",
                  }))
                }
              />
              <span>No</span>
            </label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="consent"
              checked={form.consent}
              onChange={handleChange}
            />
            <span className="text-sm">
              I agree to be contacted by Casuals using the info I provided.
            </span>
          </div>

          {error && <p className="text-red-600 font-semibold">{error}</p>}

          <button
            type="submit"
            className="w-full bg-black text-white px-6 py-2 font-semibold rounded"
          >
            Submit
          </button>

          {submitted && (
            <div className="bg-green-100 text-green-800 px-4 py-3 mt-4 rounded shadow">
              Thank you <strong>{form.name || "Customer"}</strong>! Your
              appointment has been booked.
              <br />A confirmation email has been sent to{" "}
              <strong>{form.email}</strong>.
            </div>
          )}
        </form>
      </section>

      {/* Map Section */}
      <section className="w-full py-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.9853434087922!2d-75.61980512373009!3d45.38946647107285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0f39da0444e3%3A0xc406c9f9ea980afe!2sCasuals!5e0!3m2!1sen!2sca!4v1747090398488!5m2!1sen!2sca"
          className="w-full h-100 pt-10"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          style={{ border: 0 }}
          width="800"
          height="600"
        ></iframe>
      </section>
    </div>
  );
};

export default AppointmentPage;
