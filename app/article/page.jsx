"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import RightBar from "@/components/RightBar";

const page = () => {
  const [data, setData] = useState({});
  const [otherData, setOtherData] = useState([]); // [
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const keyword = searchParams.get("keyword");
  useEffect(() => {
    const fetchOtherData = async () => {
      const res = await fetch("/api/headline_search");
      const json = await res.json();
      setOtherData(json);
    };
    const fetchData = async () => {
      const res = await fetch("/api/article_search", {
        method: "POST",
        body: JSON.stringify({ query: query, keyword: keyword })
      });
      const json = await res.json();
      setData(json);
    };
    const fetchKeywordData = async () => {
      const res = await fetch("/api/headline_search", {
        method: "POST",
        body: JSON.stringify({ keyword: keyword })
      });
      const json = await res.json();
      // console.log(json);
      setData(json);
    };
    if (query === null) {
      fetchKeywordData();
    } else {
      fetchData();
    }
    // fetchData();
    fetchOtherData();
  }, []);
  console.log(data);
  return (
    <section className="flex justify-center mt-5">
      <div className="w-1/3">
        <RightBar
          data={otherData}
          screen="full"
          height="100%"
          ml="0"
          cw="full"
          // keyword={otherData.source?.name}
        />
      </div>
      <div className="flex flex-col w-2/3 mx-5">
        <div className="pb-5 w-full border-b-2">
          <img src={data.urlToImage} alt="" />
        </div>
        <div className="flex justify-between py-3 border-b-2">
          <div className="flex flex-col">
            <p className="my-2 text-stone-600 text-lg">Autor</p>
            <h3 className="font-bold text-lg">{data.author}</h3>
          </div>
          <div className="">
            <p className="my-2 text-stone-600 text-lg">Date Published</p>
            <p className="text-stone-600">{data.publishedAt}</p>
          </div>
        </div>
        <div className="">
          <h1 className="text-5xl my-10">{data.title}</h1>
          <h3 className="text-stone-800 text-2xl my-5 font-medium">
            {data.description}
          </h3>
          <p>{data.content}</p>
        </div>
      </div>
    </section>
  );
};

export default page;
