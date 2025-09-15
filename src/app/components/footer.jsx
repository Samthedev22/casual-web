"use client";

import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaCopyright,
  FaPhoneAlt,
  FaClock,
  FaFacebookF,
  FaGoogle,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white px-6 max-md:py-12 mb-10 rounded-t-3xl ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 ">
        {/* Left Column */}
        <div className="space-y-4">
          <div className="text-blue-400 text-4xl">✦</div>
          <p className="text-sm">
            We have been in operation since 1985 and have many satisfied loyal
            clients.
          </p>

          <div className="text-sm space-y-3">
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1" />
              <p>
                2229 St. Laurent Blvd, Ottawa, ON
                <br />
                K1G 1B1
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <a href="tel:+16132600333" className="hover:underline">
                (+1) 613-260-0333
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <a
                href="mailto:info@casualsbarbersalon.ca"
                className="hover:underline"
              >
                info@casualsbarbersalon.ca
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaClock />
              <p>Mon–Sat: 09:30AM – 9:00PM</p>
            </div>
            <div className="flex items-center gap-2">
              <FaClock />
              <div className="flex flex-row gap-3">
                <p>Sun</p>
                <p className="text-red-600"> Closed</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Link href="https://facebook.com">
              <FaFacebookF className="text-xl cursor-pointer hover:text-blue-400" />
            </Link>
            <Link
              href="https://g.co/kgs/Ft5gsks"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaGoogle className="text-xl cursor-pointer hover:text-red-400" />
            </Link>
            <Link href="https://instagram.com">
              <FaInstagram className="text-xl cursor-pointer hover:text-pink-400" />
            </Link>
          </div>
        </div>

        {/* Center Column */}
        <div className="border border-white p-4 text-center">
          <h3 className="text-lg font-semibold mb-4">Recent News Feed</h3>
          <Image
            src="/image3.png"
            alt="Recent news"
            width={400}
            height={300}
            className="w-full h-auto object-cover border border-white"
          />
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div className="border border-white p-4">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Open-Close
            </h3>
            <div className="text-sm space-y-2">
              <div className="flex justify-between">
                <span>Monday – Friday</span>
                <span>09 AM To 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>09 AM To 9:00PM</span>
              </div>
              <div className="flex justify-between text-red-500">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          <div className="border border-white p-4">
            <h3 className="text-lg font-semibold mb-2">Stay In Touch</h3>
            <p className="text-sm">
              Folow us on our social platforms and stay up to date
            </p>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="text-center text-xs mt-10 border-t border-gray-500 pt-4 flex flex-col sm:flex-row items-center justify-center gap-2">
        <p className="flex items-center gap-1">
          <span>Casuals 2024-2025</span>
          <FaCopyright className="inline-block text-xs" />
          <span>All rights Reserved.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
