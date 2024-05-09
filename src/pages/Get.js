import React from "react";
import img1 from "../Images/img.jpg";
import Trending from "./Trading";

export default function Get() {
  return (
    <div className="">
      <div className="bg-blue-800 text-white rounded-md px-5 w-96">
        <h1 className="text-2xl font-bold mt-4 mb-2">Get started with KoinX for free</h1>
        <p className="text-sm">With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
        <img src={img1} className="rounded-lg h-80 w-80 mx-auto" alt="" />
        <div className="flex justify-center">
          <button className="bg-white text-black px-4 py-2 mt-4 rounded-lg">Get Started for FREE</button>
        </div>
      </div>
      <div className="py-4 mx-auto">
        <Trending />
      </div>
    </div>
  );
}
