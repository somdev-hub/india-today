"use client";

import Image from "next/image";
import styles from "@/styles/main.module.css";
import Link from "next/link";

const HeadLines = ({ image, author, headline, date, cw, keyword }) => {
  // console.log(styles.headlines);
  return (
    <div
      className={`flex justify-center items-center mb-5 ${
        cw === "full" ? "w-full" : styles.headlines
      }`}
    >
      <div className="h-32 w-1/3">
        {/* <Image src={image} width={150} height={150} alt="" /> */}
        <Link href={`/article?keyword=${keyword}`}>
          <img src={image} className="w-full h-full object-cover" alt="" />
        </Link>
      </div>
      <div className="ml-4 w-2/3">
        <div className="flex gap-3 items-center">
          {/* <div className="bg-stone-400 rounded-full w-8 h-8"></div> */}
          <p className="text-stone-400">{author}</p>
        </div>
        <div className="my-2">
          <h3 className="font-medium text-lg">{headline}</h3>
        </div>
        <div className="">
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default HeadLines;
