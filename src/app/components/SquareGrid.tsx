'use client'

import React, { useState } from "react";

type SquareProps = {
  title: string;
  children?: React.ReactNode;
  size?: number; // square size in pixels
  bgColor?: string;
  borderColor?: string;
  borderWidth?: number;
  titleFontSize?: string;
  textFontSize?: string;
};

const Square: React.FC<SquareProps> = ({
  title,
  children,
  size = 300,
  bgColor = "#27272a",
  borderColor = "#EEB200",
  borderWidth = 4,
  titleFontSize = "1.8rem", // ~18px
  textFontSize = "0.875rem",  // ~14px
}) => {
  return (
    <div
      className="flex flex-col items-center justify-center text-center rounded-lg"
      style={{
        width: size,
        height: size,
        backgroundColor: bgColor,
        border: `${borderWidth}px solid ${borderColor}`,
        color: borderColor,
        padding: "1rem",
      }}
    >
      <h3
        className="font-semibold mb-2"
        style={{ fontSize: titleFontSize }}
      >
        {title}
      </h3>
      <div style={{ fontSize: textFontSize }}>{children}</div>
    </div>
  );
};

export default function SquareRow() {
  // Add separate state for each input
  const [cveIdValue, setCveIdValue] = useState("");
  const [keywordValue, setKeywordValue] = useState("");

  // Add the function to handle CVE ID search
  const fetchCVEData = () => {
    console.log("Searching for CVE ID:", cveIdValue);
    // TODO: Add your CVE API call here later
    if (cveIdValue.trim()) {
      alert(`Searching for CVE: ${cveIdValue}`);
      // Clear input after search
      setCveIdValue("");
    }
  };

  // Add the function to handle keyword search
  const fetchKeywordData = () => {
    console.log("Searching for keywords:", keywordValue);
    // TODO: Add your keyword search API call here later
    if (keywordValue.trim()) {
      alert(`Searching for keywords: ${keywordValue}`);
      // Clear input after search
      setKeywordValue("");
    }
  };

  return (
  // Added responsive margin-top so desktop has extra space above the section
  <section className="bg-black py-15 mt-8 md:mt-16">
    <div className="max-w-7xl mx-auto px-4">
      {/* Mobile: stacked / Desktop: row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
        <Square title="What is a CVE?">
          A CVE (otherwise known as a Common Vulnerabilites & Exposure) is a publicly disclosed cybersecurity flaw. 
          The CVE database system was established in 1999 by the MITRE corporation (and funded by the US government) so that the tracking of software bugs could be streamlined.
        </Square>
        
        <Square title="Search by CVE ID">
          Search for information on a specific CVE by entering its ID below:
          <form
            onSubmit={(e) => {
              e.preventDefault();
              fetchCVEData();
            }}
            className="flex flex-col items-center space-y-4 w-full mt-4"
          >
            <input
              type="text"
              value={cveIdValue}
              onChange={(e) => setCveIdValue(e.target.value)}
              placeholder="e.g., CVE-2024-12345"
              className="border border-[#EEB200] bg-black text-[#EEB200] px-4 py-2 rounded w-full focus:outline-none focus:border-[#FFD700]"
            />

            <button
              type="submit"
              className="bg-[#EEB200] hover:bg-[#FFD700] text-black font-bold py-2 px-6 rounded-full transition duration-300"
            >
              Search CVE
            </button>
          </form>
        </Square>
        
        
        <Square title="Search by Keyword(s)">
          Search for CVEs by putting in words that match the description below.
          <form
            onSubmit={(e) => {
              e.preventDefault();
              fetchKeywordData();
            }}
            className="flex flex-col items-center space-y-4 w-full mt-4"
          >
            <input
              type="text"
              value={keywordValue}
              onChange={(e) => setKeywordValue(e.target.value)}
              placeholder="e.g., 'Remote Code Execution'"
              className="border border-[#EEB200] bg-black text-[#EEB200] px-4 py-2 rounded w-full focus:outline-none focus:border-[#FFD700]"
            />

            <button
              type="submit"
              className="bg-[#EEB200] hover:bg-[#FFD700] text-black font-bold py-2 px-6 rounded-full transition duration-300"
            >
              Search CVE
            </button>
          </form>
        </Square>
      </div>
    </div>
  </section>
);
}