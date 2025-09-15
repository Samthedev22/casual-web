'use client';

import React, { useEffect, useState } from 'react';
import { FaClock, FaMapMarkerAlt, FaPhoneAlt, FaStar } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const sliderImages = ['/image1.png', '/image2.png', '/image9.png', '/image3.png'];

const serviceList = {
  'Haircuts': ['Fade', 'Taper', 'Buzz Cut', 'Scissor Cut'],
  'Beard Trim': ['Outline Trim', 'Beard Shape Up', 'Neck Shave'],
  'Hot Shave': ['Straight Razor', 'Hot Towel Shave'],
  'Low Cuts': ['Even Cut', 'Temple Fade', 'Shadow Fade'],
  'Hair Twist': ['Two-Strand Twist', 'Finger Twist', 'Comb Coils'],
  'Hair Locs': ['Starter Locs', 'Loc Maintenance', 'Interlocking'],
  'Bald Shave': ['Clean Bald', 'Hot Razor Finish'],
  'Full Service': ['Haircut + Beard', 'Hot Towel + Facial', 'Scalp Massage'],
};

const bannerImage = ['/image15.png', '/image18.png', '/image13.png'];

const reviews = [
  { name: 'Josh D', message: 'Really happy with my haircut, been here twice now and plan  to keep coming back.' },
  { name: 'Antoine L.', message: 'Had a very pleasant experience here today! I recieived a warm welcome...' },
  { name: 'Brenna B', message: 'I went to Sharna for my extensions, she was honest about what would be best for my hair and did a great job.' },
];

const Home = () => {
  const [activeService, setActiveService] = useState(null);

 
  const toggleService = (service) => {
    setActiveService((prev) => (prev === service ? null : service));
  };

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[550px] overflow-hidden">
        <Image
          src="/image1.png"
          alt="Hero Image"
          fill
          className="object-cover absolute inset-0 transition-all duration-1000 ease-in-out"
          priority
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black/50 text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">The Best Barber Shop Salon</h1>
          <p className="text-lg mb-6 font-semibold">Experience the finest traditional barbering with a modern touch.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            
            <div className='flex flex-col gap-5'>

            <div className='flex gap-1 translate-y-6 translate-x-10'>
              <FaStar className='text-yellow-400 text-sm'/>
              <FaStar className='text-yellow-400 text-sm'/>
              <FaStar className='text-yellow-400 text-sm'/>
              <FaStar className='text-yellow-400 text-sm'/>
              <FaStar className='text-yellow-400 text-sm'/>
            </div>
            
            <div className="flex items-center gap-2 px-3 py-2">
              <Image src="/google.png" alt="Google" width={24} height={24} />
              <Link href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.9853434087922!2d-75.61980512373009!3d45.38946647107285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0f39da0444e3%3A0xc406c9f9ea980afe!2sCasuals!5e0!3m2!1sen!2sca!4v1747090398488!5m2!1sen!2sca" className="text-sm text-white font-semibold">
              4.8 out of 5 ratings</Link>
            </div>

          </div>

            <Link href="/Salon">
              <button className="bg-white text-black px-6 py-2 rounded-full font-semibold">Casuals Salon</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-10">Featured Services</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {Object.keys(serviceList).map((service) => (
              <div
                key={service}
                className="bg-white shadow rounded-lg py-6 px-4 hover:bg-black hover:text-white transition duration-300 cursor-pointer"
                onClick={() => toggleService(service)}
              >
                <h3 className="font-semibold text-lg">{service}</h3>
                {activeService === service && (
                  <ul className="mt-3 text-sm bg-white text-black rounded p-3 text-left">
                    {serviceList[service].map((item, i) => (
                      <li key={i} className="border-b border-gray-200 py-1">{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Image Section */}
      <section className="w-full">
        <div className="flex w-full overflow-hidden object-cover">
          {bannerImage.map((img, i) => (
            <Image key={i} src={img} alt="Banner" width={1000} height={500} className="h-70 object-cover w-full" />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">WHY CHOOSE US</h2>
          <p className="text-gray-600 mb-16">
            Casuals Barber Salon has been proudly serving the community for over 20 years. Our mission is to ensure every client leaves looking fresh and feeling confident.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-black">
            <div>
              <h4 className="font-bold text-lg mb-2">LICENSED</h4>
              <p className="text-sm">Strict cleanliness and sanitation by licensed professionals.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">QUALITY</h4>
              <p className="text-sm">Our expert barbers are passionate about high-quality results.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">TRUSTED</h4>
              <p className="text-sm">Numerous 5 star reviews from satisfied clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Discount Section */}
      <section className="w-full bg-[#f5f5f5] py-16 md:px-14">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-extrabold text-black mb-2">
              Get 10% Discount <br /> On Your First Visit <br/> When You Book With Us
            </h2>
            <p className="text-gray-600 mb-6">
              We are running a limited offer discount for new customers.
            </p>
            <div className="flex gap-4 overflow-x-auto no-scrollbar mt-4">
              {['/image14.png', '/image13.png', '/image12.png', '/image8.png', '/image9.png'].map((img, i) => (
                <Image key={i} src={img} alt={`Style ${i + 1}`} width={70} height={70} className="rounded-full grayscale" />
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/3 text-center justify-start">
            <div className="w-full space-y-3 mb-6">
              <div className="flex items-center justify-center gap-2">
                <FaClock />
                <p>Mon–Sat 09:30 AM - 9:00 PM, Sun 10:00 AM - 6:00 PM</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <FaMapMarkerAlt />
                <p>2229 St. Laurent Blvd, Ottawa, ON K1G 1B1</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <FaPhoneAlt />
                <p>(+1) 613-260-0333</p>
              </div>
            </div>
            <Link href="/appointment">
              <button className="bg-black text-white px-6 py-3 rounded-md">Book Appointment</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <section className="bg-gray-200 text-black py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-2">What Our Clients Say</h2>
          <p className="text-lg mb-10">Don&apos;t just take our word for it</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow text-left">
                <div className="flex text-yellow-500 mb-3">
                  {[...Array(5)].map((_, idx) => <FaStar key={idx} />)}
                </div>
                <p className="italic mb-4">"{review.message}"</p>
                <p className="font-semibold text-yellow-600">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 flex items-center justify-center">
      <a 
        href="https://www.google.com/maps/place/Casuals/@45.3894664,-75.6198051,17z/data=!4m7!3m6!1s0x4cce0f39da0444e3:0xc406c9f9ea980afe!8m2!3d45.3894664!4d-75.6172302!9m1!1b1?entry=ttu" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-white text-black mt-3 p-2 hover:blue-400 text-sm font-medium cursor-pointer"
      >
        Rate Us On Google
      </a>
    </div>


      </section>

      {/* Video Section */}
      <section className="w-full py-10 mt-5">
        <div className="flex max-md:grid-cols-3 max-md:px-10 justify-center gap-6">
          {['/video1.mp4', '/video2.mp4', '/video3.mp4'].map((video, idx) => (
            <video key={idx} src={video} controls className="w-64 h-60 max-md:h-40 max-md:w-90 rounded shadow-md object-cover" />
          ))}
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.9853434087922!2d-75.61980512373009!3d45.38946647107285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0f39da0444e3%3A0xc406c9f9ea980afe!2sCasuals!5e0!3m2!1sen!2sca!4v1747090398488!5m2!1sen!2sca"
          className="w-full h-[300px] md:h-[500px]"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0 }}
        />
      </section>
    </main>
  );
};

export default Home;
