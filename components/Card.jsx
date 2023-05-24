"use client";

import Image from "next/image";

const Card = ({ author, image, title, date }) => {
    // console.log(image);
  return (
    <div className="bg-white w-64 h-fit">
      <div className="flex justify-center items-center h-40 w-64">
        {/* <Image src={image} width={275} height={150} alt="" /> */}
        <img src={image} alt="" className="w-full h-full"/>
      </div>
      {/* {alert(image)} */}
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
