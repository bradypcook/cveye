'use client'

import Image from "next/image";

const basePath = process.env.NODE_ENV === 'production' ? '/cveye' : '';

export default function Footer() {
  return (
    <footer className="bg-[#EEB200] text-black py-3 mt-0">
      <div className="max-w-7xl mx-auto px-2 flex flex-col md:flex-row justify-between items-center text-lg">
        <p className="mb-1 md:mb-0">
          © {new Date().getFullYear()} Brady Cook
        </p>
      </div>
    </footer>
  )
}
