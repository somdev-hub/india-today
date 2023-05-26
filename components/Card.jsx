"use client";

import Image from "next/image";
import Link from "next/link";

const Card = ({ image, title, date, keyword, country }) => {
  // console.log(keyword);
  return (
    <div className="bg-white w-64 h-fit">
      <div className="flex justify-center items-center h-40 w-64">
        {/* <Image src={image} width={275} height={150} alt="" /> */}
        <Link
          href={`/article?keyword=${keyword}&country=${country}`}
          className="w-full h-full"
        >
          <img src={image} alt="" className="w-full h-full" />
        </Link>
      </div>
      <div className="mt-4">
        <div className="">
          <h3>{title}</h3>
        </div>
        <div className="mt-3">
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
