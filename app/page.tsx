"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import AssetsTable from "@/components/AssetsTable";
import EmployeeSection from "@/components/EmployeeSection";
import RepairLog from "@/components/RepairLog";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <AssetsTable />
      <EmployeeSection />
      <RepairLog />
      <CTA />
      <Footer />
    </>
  );
}