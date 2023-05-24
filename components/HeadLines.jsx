"use client";

import Image from "next/image";
import styles from "@/styles/main.module.css";

const HeadLines = ({ image, author, headline, date }) => {
  return (
    <div className={`flex justify-center items-center mb-5 ${styles.headline}`}>
      <div className="h-32 w-1/3">
        {/* <Image src={image} width={150} height={150} alt="" /> */}
        <img src={image} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="ml-4 w-2/3">
        <div className="flex gap-3 items-center">
          <div className="bg-stone-400 rounded-full w-8 h-8"></div>
          <p className="text-stone-400">{author}</p>
        </div>
        <div className="my-2">
          <h3 className="font-medium">{headline}</h3>
        </div>
        <div className="">
            <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default HeadLines;
