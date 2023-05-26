"use client";

import HeadLines from "./HeadLines";

const RightBar = ({ data, screen, ml, cw }) => {
  return (
    <section
      className={`bg-stone-100 h-${screen} ml-${ml?ml:"5"} p-5 no-scrollbar overflow-auto`}
    >
      <div className="">
        <h3 className="text-stone-800 font-semibold">WEEKLY TRENDING</h3>
      </div>
      <div className="mt-5">
        {data.map((item, index) => (
          <HeadLines
            cw={cw}
            key={index}
            author={item.author}
            image={item.urlToImage}
            headline={item.title}
            date={item.publishedAt}
            keyword={index}
            country="in"
          />
        ))}
      </div>
    </section>
  );
};

export default RightBar;
