import React from "react";
import Bitcoin from "../Images/bitcoin.jpg"
import Eth from "../Images/eth.jpg"
import Poly from "../Images/polygon-matic-logo-2.png"

export default function Trending() {
  return (
    <div className="bg-white rounded-md p-4">
      <h5 className="text-xl font-bold mb-4">Trending coins (24h)</h5>
      <div className="">
        <div className="flex gap-6 items-center">
          <img src={Eth} alt="avatar" className="h-8 w-8 mx-4 my-2 rounded-full object-cover object-center" />{" "}
          <span className="text-base">Ethereum (ETH)</span>
          <button className="bg-green-100 text-green-300 rounded-md px-2 h-7">8.21%</button>
        </div>
        <div className="flex gap-6 items-center">
          <img src={Bitcoin} alt="avatar" className="h-8 w-8 mx-4 my-2 rounded-full object-cover object-center" />{" "}
          <span className="text-base">Bitcoin (BTC)</span>
          <button className="bg-green-100 text-green-300 rounded-md px-2 h-7">5.26%</button>
        </div>
        <div className="flex gap-6 items-center">
          <img src={Poly} alt="" className="h-8 w-8 mx-4 my-2 rounded-full object-cover object-center" />{" "}
          <span className="text-base">Polygon (MATIC)</span>
          <button className="bg-green-100 text-green-500 rounded-md px-2 h-7">4.21%</button>
        </div>
      </div>
    </div>
  );
}
