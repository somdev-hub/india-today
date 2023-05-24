"use client";

import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import Card from "./Card";
import { useState, useEffect } from "react";

const CardList = ({ data }) => {
  const newData = data.slice(0, 6);
  return (
    <div className="mt-8 grid grid-rows-2 gap-5 grid-cols-3">
      {newData.map((item, index) => (
        <Card
          key={index}
          author={item.author}
          image={item.urlToImage}
          title={item.title}
          date={item.publishedAt}
        />
      ))}
    </div>
  );
};

const MainScreen = ({ data }) => {
  const [newData, setNewData] = useState(data);

  // setNewData(data);

  // console.log(data);
  // console.log(newData);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("/api/news");
  //     const json = await res.json();
  //     setData(json);
  //     console.log(json);
  //   };
  //   fetchData();
  // }, []);
  const clicked = async (e) => {
    console.log(e.target.innerText);
    e.preventDefault();
    const res = await fetch("/api/news_search", {
      method: "POST",
      body: JSON.stringify({
        query: e.target.innerText
      })
    });
    const json = await res.json();
    setNewData(json);
    // console.log(json);
  };

  return (
    <section className="ml-12 mt-8">
      <div className="flex items-center gap-16 border-b-2 pb-4">
        <div className="">
          <h3 className="text-stone-800 font-bold text-lg">WEDNESDAY</h3>
          <p>May 20, 2023</p>
        </div>
        <div className="">
          <ul className="flex items-center gap-16">
            <li onClick={clicked}>INDIA</li>
            <li onClick={clicked}>WORLD</li>
            <li onClick={clicked}>SPORTS</li>
            <li onClick={clicked}>BUSINESS</li>
            <li onClick={clicked}>FILMS</li>
          </ul>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex justify-between">
          <div className="flex gap-8 justify-center">
            <h3 className="font-medium ">FOLLOWING</h3>
            <h3>RECOMMENDED</h3>
          </div>
          <TbAdjustmentsHorizontal className="text-xl flex" />
        </div>
      </div>
      <CardList data={newData} className="" />
    </section>
  );
};

export default MainScreen;
