"use client";

import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { BsFillBookmarkCheckFill, BsVectorPen } from "react-icons/bs";

const Sidebar = () => {
  return (
    <aside className="bg-stone-200 h-full w-20 p-3">
      <div className="flex flex-col mb-3 justify-center mt-4">
        <div className="flex flex-col mb-8 justify-center items-center">
          <AiFillHome className="text-xl mb-2" />
          <p className="text-stone-700 text-sm font-medium">Home</p>
        </div>
        <div className="flex flex-col mb-8 justify-center items-center">
          <BsVectorPen className="text-xl mb-2 text-stone-500" />
          <p className="text-stone-500 text-sm font-medium">Discover</p>
        </div>
        <div className="flex flex-col mb-8 justify-center items-center">
          <BsFillBookmarkCheckFill className="text-xl mb-2 text-stone-500" />
          <p className="text-stone-500 text-sm font-medium">Bookmark</p>
        </div>
        <div className="flex flex-col mb-8 justify-center items-center">
          <AiFillSetting className="text-xl mb-2 text-stone-500" />
          <p className="text-stone-500 text-sm font-medium">Setting</p>
        </div>
      </div>
      <h3 className="text-stone-700 text-sm flex justify-center mb-6 font-medium">
        FOLLOWERS
      </h3>
      <div className="flex flex-col my-4 justify-center items-center">
        <div className="rounded-full w-8 h-8 bg-stone-400 mb-6"></div>
        <div className="rounded-full w-8 h-8 bg-stone-400 mb-6"></div>
        <div className="rounded-full w-8 h-8 bg-stone-400 mb-6"></div>
        <div className="rounded-full w-8 h-8 bg-stone-400 mb-6"></div>
        <div className="rounded-full w-8 h-8 bg-stone-400 mb-6"></div>
      </div>
    </aside>
  );
};

export default Sidebar;
