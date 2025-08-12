import Image from "next/image";
import React from "react";

const basePath = process.env.NODE_ENV === 'production' ? '/cveye' : '';

export default function NISTinfo() {
  return (
    <section className="bg-black py-6"> {/* Reduced from py-12 to py-6 for tighter spacing */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Header Text */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2"> {/* Reduced margin */}
          Built with NIST's National Vulnerability Database CVE API
        </h2>
        
        {/* Image Container */}
        <div className="flex justify-center mb-2"> {/* Reduced margin */}
          <Image
            src={`${basePath}/nist_logo_nvd_white.svg`}
            alt="NIST Logo"
            width={650}
            height={325}
            className="object-contain"
            priority={false}
          />
        </div>
        
        {/* Copyright/Attribution Text */}
        <p className="text-sm text-white/60 max-w-2xl mx-auto leading-relaxed">
          {`© ${new Date().getFullYear()} National Institute of Standards and Technology - National Vulnerability Database. All Rights Reserved.`}
        </p>
      </div>
    </section>
  );
};