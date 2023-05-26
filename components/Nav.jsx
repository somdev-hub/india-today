"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineBell } from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
// import { TfiWrite } from "react-icons/tfi";

const Nav = () => {
  const router = useRouter();
  const [formData, setFormData] = useState("");
  const submitted = (e) => {
    e.preventDefault();
    router.push(`/results?data=${formData}`);
    console.log(formData);
  };
  return (
    <nav className="bg-gray-700 flex flex-1 justify-between items-center text-white p-5">
      <div className="flex justify-center items-center gap-4">
        <GiHamburgerMenu className="text-xl" />
        <Link href="/">
          <h3 className="text-xl">India Today</h3>
        </Link>
      </div>
      <form action="/" onSubmit={submitted}>
        <input
          type="text"
          placeholder="search something"
          className="bg-gray-400  w-72 h-8 px-2 text-white"
          onChange={(e) => setFormData(e.target.value)}
        />
      </form>
      <div className="flex gap-16 justify-center items-center">
        <button
          type="button"
          className="bg-yellow-500 text-black flex justify-center items-center w-24 h-8 font-medium"
        >
          {/* <TfiWrite className="flex justify-center items-center" /> */}
          Write
        </button>
        <AiOutlineBell className="text-xl" />
        <div className="bg-gray-500 w-8 h-8 rounded-full flex justify-center">
          {/* <Image src="/images/profile.png" width={15} height={15} /> */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
