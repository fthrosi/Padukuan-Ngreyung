"use client";
import { useState, useEffect } from "react";
import Dukuh from "@/components/tentangPadukuhan/dukuh";
import Susunan from "@/components/tentangPadukuhan/susunan";
import Struktur from "@/components/tentangPadukuhan/struktur";
import { Spinner } from "@nextui-org/react";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <Spinner color="primary" size="lg" className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
    );
  }

  return (
    <div className="bg-[#354b396f] flex justify-center lg:pt-[110px] md:pt-[110px] pt-16">
      <div className="bg-white w-[800px]">
        <Dukuh />
        <Struktur />
        <Susunan />
      </div>
    </div>
  );
};

export default About;
