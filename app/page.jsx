"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import MainScreen from "@/components/MainScreen";
import RightBar from "@/components/RightBar";


const page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/news");
      const json = await res.json();
      setData(json);
      // console.log(json);
    };
    fetchData();
  }, []);

  return (
    <section className="flex h-screen">
      <Sidebar />
      <div className="overflow-y-scroll no-scrollbar">
        <MainScreen data={data}/>
      </div>
      <RightBar data={data}/>
    </section>
  );
};

export default page;
