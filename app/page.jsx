"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import MainScreen from "@/components/MainScreen";
import RightBar from "@/components/RightBar";

const page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/headline_search");
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, []);

  return (
    <section className="flex h-screen">
      <Sidebar />
      <div className="overflow-y-scroll no-scrollbar">
        <MainScreen data={data} />
      </div>
      <RightBar data={data} screen="screen" height="100%" ml="5" cw="no" />
    </section>
  );
};

export default page;
