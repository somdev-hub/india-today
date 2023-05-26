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
          keyword={index}
        />
      ))}
    </div>
  );
};

const MainScreen = ({ data }) => {
  const [newData, setNewData] = useState([...data]);
  // console.log(data);
  useEffect(() => {
    setNewData([...data]);
  }, [data]);

  const clicked = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/news_search", {
      method: "POST",
      body: JSON.stringify({
        query: e.target.innerText
      })
    });
    const json = await res.json();
    setNewData(json);
  };
  const date = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return (
    <section className="ml-12 mt-8">
      <div className="flex items-center gap-16 border-b-2 pb-4">
        <div className="">
          <h3 className="text-stone-800 font-bold text-lg">
            {days[date.getDay()]}
          </h3>
          <p>{`${
            months[date.getMonth()]
          } ${date.getDate()}, ${date.getFullYear()}`}</p>
        </div>
        <div className="">
          <ul className="flex items-center gap-16">
            <li
              onClick={clicked}
              className="cursor-pointer hover:text-stone-600"
            >
              INDIA
            </li>
            <li
              onClick={clicked}
              className="cursor-pointer hover:text-stone-600"
            >
              WORLD
            </li>
            <li
              onClick={clicked}
              className="cursor-pointer hover:text-stone-600"
            >
              SPORTS
            </li>
            <li
              onClick={clicked}
              className="cursor-pointer hover:text-stone-600"
            >
              BUSINESS
            </li>
            <li
              onClick={clicked}
              className="cursor-pointer hover:text-stone-600"
            >
              FILMS
            </li>
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
