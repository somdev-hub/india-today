"use client";

import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import Card from "./Card";
import { useState, useEffect } from "react";
import { BsCaretRight } from "react-icons/bs";

const CardList = ({ data, country }) => {
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
          country={country}
        />
      ))}
    </div>
  );
};

const MainScreen = ({ data }) => {
  const [visible, setVisible] = useState(false);
  const [newData, setNewData] = useState([...data]);
  const [country, setCountry] = useState("in");
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
  const handleChange = (e) => {
    setCountry(e.target.value);
    console.log(e.target.value);
    const fetchCountryData = async () => {
      const res = await fetch("/api/country_news", {
        method: "POST",
        body: JSON.stringify({ country: e.target.value })
      });
      const json = await res.json();
      setNewData(json);
      console.log(json);
    };
    fetchCountryData();
  };
  return (
    <section className="ml-12 mt-8">
      <div className="flex items-center justify-between gap-16 border-b-2 pb-4">
        <div className="border-r-2 pr-5">
          <h3 className="text-stone-800 font-bold text-lg">
            {days[date.getDay()]}
          </h3>
          <p>{`${
            months[date.getMonth()]
          } ${date.getDate()}, ${date.getFullYear()}`}</p>
        </div>
        <div className="flex gap-5 justify-center items-center">
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
          <div className="w-8 h-8 bg-slate-50 rounded-full shadow-2xl flex justify-center items-center">
            <BsCaretRight className="text-lg" />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex justify-between relative">
          <div className="flex gap-8 justify-center">
            <h3 className="font-medium ">FOLLOWING</h3>
            <h3>RECOMMENDED</h3>
          </div>
          <TbAdjustmentsHorizontal
            className="text-xl flex cursor-pointer hover:text-stone-600"
            onClick={() => setVisible(!visible)}
          />
          <div
            className={`absolute right-0 top-8 w-44 h-32 bg-stone-100 shadow-lg p-3 ${
              !visible && "hidden"
            }`}
          >
            <form action="">
              <label htmlFor="" className="mb-5">
                Country
              </label>
              <select name="" id="" onChange={handleChange}>
                <optgroup label="select country">
                  <option value="in">India</option>
                  <option value="us">USA</option>
                  <option value="gb">UK</option>
                  <option value="jp">Japan</option>
                  <option value="germany">Germany</option>
                  <option value="fr">France</option>
                </optgroup>
              </select>
            </form>
          </div>
        </div>
      </div>
      <CardList data={newData} country={country} className="" />
    </section>
  );
};

export default MainScreen;
