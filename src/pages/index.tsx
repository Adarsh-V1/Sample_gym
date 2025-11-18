import { gymContent } from "@/data/gym/content";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Facilities } from "@/components/Facilities";
import { Trainers } from "@/components/Trainers";
import { Pricing } from "@/components/Pricing";
import { Gallery } from "@/components/Gallery";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import Head from "next/head";

const GymHome = () => {
  return (
    <>
      <Head>
        <title>{gymContent.name} – {gymContent.tagline}</title>
        <meta name="description" content={gymContent.about} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={`${gymContent.name} – ${gymContent.tagline}`} />
        <meta property="og:description" content={gymContent.about} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </Head>
      <main className="text-gray-100">
        <Navbar name={gymContent.name} />
        <Hero data={gymContent} />
        <About data={gymContent} />
        <Facilities data={gymContent} />
        <Trainers data={gymContent} />
        <Pricing data={gymContent} />
        <Gallery data={gymContent} />
        <Reviews data={gymContent} />
        <Contact data={gymContent} />
      </main>
    </>
  );
};

export default GymHome;
