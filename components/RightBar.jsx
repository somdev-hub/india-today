"use client";

import HeadLines from "./HeadLines";

const RightBar = ({ data }) => {
  return (
    <section className="bg-stone-100 h-screen ml-5 p-5">
      <div className="">
        <h3 className="text-stone-800 font-semibold">WEEKLY TRENDING</h3>
      </div>
      <div className="mt-5">
        {data.slice(6,11).map((item, index) => (
          <HeadLines
            key={index}
            author={item.author}
            image={item.urlToImage}
            headline={item.title}
            date={item.publishedAt}
          />
        ))}
      </div>
    </section>
  );
};

export default RightBar;
