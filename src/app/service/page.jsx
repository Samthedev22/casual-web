'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServicePage = () => {
  const [experience, setExperience] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  useEffect(() => {
    const animateProgress = (setFunc, max) => {
      let value = 0;
      const interval = setInterval(() => {
        if (value >= max) {
          clearInterval(interval);
        } else {
          value += 1;
          setFunc(value);
        }
      }, 10);
    };
    animateProgress(setExperience, 100);
    animateProgress(setSatisfaction, 100);
  }, []);

  return (
    <div id="service-container" className="w-full">
      {/* Hero */}
      <section className="w-full flex items-center justify-center bg-gray-200 relative overflow-hidden">
        <Image
          src="/image9.png"
          alt="Appointment"
          objectFit="cover"
          className="z-0 w-full h-120 max-md:h-100 object-cover"
          width={1000}
          height={1000}
        />
        <h1 className='absolute text-2xl p-5 text-white font-bold bg-black/50'>SERVICE</h1>

      </section>

      {/* Experience */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 py-10 px-10 bg-black text-white">
  <div className="flex-1 text-center md:text-left">
    <h2 className="text-2xl font-bold">Casuals Barber & Salon</h2>
    <p className="mt-2 text-lg">Your Satisfaction is our top priority</p>

    <div className="mt-6 space-y-6">
      <div>
        <p className="mb-1">Experience</p>
        <div className="w-full bg-gray-300 rounded-full h-4">
          <div className="bg-white h-4 rounded-full transition-all duration-500" style={{ width: `100%` }}></div>
        </div>
        <span className="text-sm">100%</span>
      </div>
      <div>
        <p className="mb-1">Satisfaction</p>
        <div className="w-full bg-gray-300 rounded-full h-4">
          <div className="bg-white h-4 rounded-full transition-all duration-500" style={{ width: `100%` }}></div>
        </div>
        <span className="text-sm">100%</span>
      </div>
    </div>
  </div>

  <div className="flex-1">
    <Image
      src="/image15.png"
      alt="Experience Image"
      width={1000}
      height={1000}
      className=" h-80 object-cover w-full"
    />
  </div>
</section>


      {/* Services */}
      <section className="w-full bg-gray-100 text-center py-10">
        <h2 className="text-2xl font-bold">We Offer A wide<br />Range Of Services</h2>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Barber Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-10">
            {["Clean Cut", "Hair Fades", "Buzz Cuts", "Hair Locks", "Line ups", "Moustach Trim", "Skin Fade", "Face Shave"].map(service => (
              <div key={service} className="bg-white py-2 rounded shadow">{service}</div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Salon Service</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-10">
            {["Hair Braids", "Hair Twist", "Hair Dye", "Hair Locks", "Extensions", "Hair Lock", "Wig Installations", "Shampoo"].map(service => (
              <div key={service} className="bg-white py-2 rounded shadow">{service}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white py-10 text-center">
        <h2 className="text-2xl font-bold mb-6">Gallery</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {["/image1.png", "/image3.png", "/image6.png", "/image9.png"].map((src, idx) => (
            <div key={idx} className="w-32 h-32 rounded-full overflow-hidden shadow-md">
              <Image src={src} alt={`Gallery ${idx}`} width={128} height={128} className="object-cover w-full h-full" />
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-[#f9f9f9] py-12 px-4 text-center">
        <h2 className="text-2xl font-bold mb-6">What Our Clients Say</h2>
        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
          {[
            "Best haircut in Ottawa! Professional and friendly staff.",
            "Very clean environment and great vibes. Highly recommended!",
            "I’ve been a loyal client for years. Top-notch service always!",
            "Casuals always gets my beard perfect every time."
          ].map((review, i) => (
            <div key={i} className="bg-white shadow p-4 rounded-md">
              <p className="text-gray-800 text-sm italic">“{review}”</p>
              <p className="mt-2 text-sm text-gray-500">– Verified Customer</p>
            </div>
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <div className='flex max-md:flex-col w-full py-1 bg-white'>
      <section className="w-full flex flex-col  justify-center items-center bg-black text-white py-10 text-center">
        <h2 className="text-xl font-bold mb-4">10% OFF FIRST TIME CUSTOMERS</h2>
        <p className="mb-6 px-10">Book your first appointment online and enjoy a special welcome discount.</p>
        <Link href="/appointment">
          <button className="bg-white text-black px-6 py-2 rounded font-semibold">Book Now</button>
        </Link>
      </section>

      {/* Appointment CTA */}
      <section className="w-full bg-[#3a3a3a] text-white text-center py-12 px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Book An Appointment Today</h2>
        <div className="space-y-2">
          <p>📞 +1 (613) -260 -0333</p>
          <p>✉️ info@casualsbarbersalon.ca</p>
          <p>📍 2229 St. Laurent Blvd. Ottawa ON K1B 1B1</p>
        </div>
        
      </section>
      </div>
    </div>
  );
};

export default ServicePage;
