'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdEmail, MdPhone,} from 'react-icons/md';
import { MdCalendarMonth } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full z-50 relative">
      {/* Top Contact Bar */}
      <div className="hidden md:flex bg-[#5B3A33] w-full text-white 
      gap-20 items-center justify-center px-2 py-2 text-sm">
        <Link href="mailto:info@casualsbarbersalon.ca" className="flex items-center gap-2">
          <MdEmail className="text-lg" />
          <span className="max-md:text-sm">info@casualsbarbersalon.ca</span>
        </Link>
        <div className="flex items-center gap-2">

          <MdPhone className="text-lg" />
          <span className="max-md:text-sm">+1 (613)-260-0333</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white flex items-center justify-between px-4 py-1 shadow">
        {/* Left: Logo */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <Image src="/logo.png" alt="Casuals Barber Salon Logo" width={70} height={10} />
        </div>

        {/* Center: Nav Links (Desktop Only) */}
        <nav className="hidden md:flex items-center justify-center gap-10 font-medium text-black flex-1">
          <Link href="/" className="hover:font-bold">Home</Link>
          <Link href="/salon" className="hover:font-bold">Salon</Link>
          <Link href="/service" className="hover:font-bold">Service</Link>
          <Link href="/contact" className="hover:font-bold">Contact</Link>
        </nav>

        <Link href="/appointment" className='flex gap-1 max-md:hidden bg-[#5e4738] text-white p-2 text-sm cursor-pointer'>
        <MdCalendarMonth className=' text-xl'/>
        Appointment</Link>

        {/* Menu & Hamburger */}
        <div className="flex flex-col items-center ">
         
          <h1 className='text-black text-lg md:hidden' onClick={() => setIsMobileMenuOpen(true)}>Menu</h1>
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
            <FaBars size={27} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center gap-6 text-lg font-medium transition-all duration-300">
          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-3xl text-gray-700"
            aria-label="Close Menu"
          >
            <FaTimes />
          </button>

          {/* Mobile Nav Links */}
          <Link className="hover:font-bold" href="/" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <Link className="hover:font-bold" href="/salon" onClick={() => setIsMobileMenuOpen(false)}>
            Salon
          </Link>
          <Link className="hover:font-bold" href="/service" onClick={() => setIsMobileMenuOpen(false)}>
            Service
          </Link>
          <Link className="hover:font-bold" href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
          <Link className="hover:font-bold" href="/appointment" onClick={() => setIsMobileMenuOpen(false)}>
            Appointment
          </Link>

          <Image
            src="/logo.png"
            alt="Casuals Barber Salon Logo"
            width={1000}
            height={1000}
            className="object-contain h-25 w-15 translate-y-10"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
