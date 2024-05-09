import React from "react";
import datas from "../data/data2";
import Data2 from "../Component/Data2";

export default function Sent() {
  return (
    <>
      <div className="bg-white sm:rounded-md lg:rounded-md lg:mr-96 lg:mx-7 lg:my-6 sm:mx-6 sm:px-4lex flex-wrap flex-row sm:overflow-hidden items-center p-4 border border-gray-200 rounded">
        <div>
          <h4 className="text-2xl">Sentiment</h4>
          <h6 className="text-xl">Key Events</h6>
          <div className="flex  overflow-hidden mx-auto gap-2 ">
            {datas.map((item, index) => (
              <Data2
                title={item.title}
                description={item.description}
                imgUrl={item.imgUrl}
              />
            ))}
          </div>
        </div>
        <div className="py-4">
          <h4 className="text-2xl">Analyst Estimates</h4>
          <div className="flex py-4">
            <div className="bg-green-200 text-green-300 rounded-full lg:h-32 lg:w-32  sm:h-16 sm:w-16 flex justify-center items-center">
              <h5 className="text-green-500 text-4xl">76%</h5>
            </div>
            <div className="flex-col">
              <div className="px-10 flex gap-4">
                <div>
                  <p>Buy</p>
                </div>
                <div className="border-b-2 border-black bg-green-600 h-2 w-56 rounded-md my-3"></div>
                <div>
                  <p>76%</p>
                </div>
              </div>
              <div className="px-10 flex gap-4">
                <div>
                  <p>Hold</p>
                </div>
                <div className="border-b-2 border-black bg-blue-gray-300 h-2 w-10 rounded-md my-3"></div>
                <div>
                  <p>18%</p>
                </div>
              </div>
              <div className="px-10 flex gap-4">
                <div>
                  <p>Sell</p>
                </div>
                <div className="border-b-2 border-black bg-red-500 h-2 w-20 rounded-md my-3"></div>
                <div>
                  <p>16%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
