import React from 'react';

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { StatsAndPartners } from "@/components/StatsandPart"; // Standardized casing
import { CaseStudies } from "@/components/CaseStudies";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA"; // Standardized back to the original CTA file path
import { Footer } from "@/components/Footer";
// import ClientLogos from '@/components/ClientLogos';


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* <ClientLogos /> */}
        {/* Components are now correctly imported and named */}
        <Services /> 
        <StatsAndPartners /> 
        <CaseStudies /> 
        <About /> 
        <CTA />
      </main>
      <Footer />
    </>
  );
}