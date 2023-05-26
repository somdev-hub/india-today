"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const Results = ({ data, query }) => {
  return (
    <div className="mt-5">
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <div className="flex justify-center items-center gap-5 mb-5 border-b-2 pb-5">
            <div className="h-32 w-40">
              <Link
                href={`/article?query=${query}&keyword=${index}`}
              >
                <img
                  src={item.urlToImage}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </Link>
            </div>
            <div className="w-2/3 ">
              <div className="">
                <h3>{item.author}</h3>
              </div>
              <div className="my-3 ">{item.title}</div>
              <div className="my-3 text-stone-400">{item.description}</div>
              <div className="">{item.publishedAt}</div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

const page = () => {
  const [resultData, setResultData] = useState([]);
  const searchParams = useSearchParams();
  const formData = searchParams.get("data");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/news_search", {
        method: "POST",
        body: JSON.stringify({ query: formData })
      });
      const json = await res.json();
      console.log(json);
      setResultData(json);
    };
    fetchData();
  }, []);
  return (
    <section className=" flex flex-col justify-center items-center mt-5">
      <h1 className="font-bold text-lg text-left">RESULTS</h1>
      <Results data={resultData} query={formData} />
    </section>
  );
};

export default page;
