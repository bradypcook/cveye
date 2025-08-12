import Image from "next/image";

const basePath = process.env.NODE_ENV === 'production' ? '/cveye' : '';

export default function Navbar() {
  return (
    <nav className="bg-[#EEB200] py-2 px-4 sticky top-0 z-50"> {/** Alternate yellow-ish color (Gold): #FFD700*/}
      <div className="max-w-7xl mx-auto flex items-center justify-center text-black h-16">
        
        <Image
          src={`${basePath}/cveye_logo.png`}
          alt="Next.js logo"
          width={190}
          height={30}
          priority
                />
        
        {/** <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
          CVEye
        </div> */}
      </div>
    </nav>
  )
}
