import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SquareGrid from "@/app/components/SquareGrid";
import NISTinfo from "@/app/components/nist_info";

const basePath = process.env.NODE_ENV === 'production' ? '/cveye' : '';

export default function Home() {
  return (
    <main>
    <Navbar />
    <SquareGrid />
    <NISTinfo />
    <Footer />
    {/** <Footer /> */}
    </main>
  );
}
