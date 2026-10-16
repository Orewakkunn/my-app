"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="bg-slate-800 h-20 flex px-5 items-center justify-between">
      <div className="flex items-center gap-3">
        <Link href="/">
          <Image src="/main-icon.gif" alt="main-icon" width={40} height={40} />
        </Link>
        <span className="text-white">Our Writings</span>
      </div>

      <div className="relative" ref={ref}>
        <button
          onClick={() => setShowDropdown((v) => !v)}
          aria-expanded={showDropdown}
          aria-haspopup="true"
          className="inline-flex items-center justify-center mx-1 text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 focus:outline-none"
          type="button"
        >
          Welcome
          <svg
            className="w-4 h-4 ms-1.5 -me-0.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" fill="none" viewBox="0 0 24 24"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
          </svg>
        </button>

        {showDropdown && (
          <div className="z-10 absolute right-0 mt-2 bg-gray-700 border border-gray-900 rounded-lg shadow-lg w-44">
            <ul className="p-2 text-sm text-white font-medium">
              <li>
                <Link href="/her" className="block p-2 rounded hover:bg-gray-800">
                  Her
                </Link>
              </li>
              <li>
                <Link href="/him" className="block p-2 rounded hover:bg-gray-800">
                  Him
                </Link>

              </li>
               <li>
                <Link href="/" className="block p-2 rounded hover:bg-gray-800">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;