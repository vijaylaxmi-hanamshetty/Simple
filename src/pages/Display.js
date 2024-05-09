import React from "react";
import data from "../data/data";
import Data from "../Component/Data";

export default function Display() {
  return (
    <div className="bg-white sm:rounded-md lg:rounded-md lg:px-4 lg:mr-96 lg:mx-7 lg:my-3 sm:mx-8 sm:px-5 space-y-4 py-5 ">
      <div>
        <h5 className="text-2xl font-bold">Team</h5>
        <p className="text-sm text-gray-700 leading-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maiores incidunt illo voluptatem atque mollitia veritatis voluptatum ipsum nesciunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, architecto?
        </p>
      </div>
      {data.map((user, index) => (
        <div key={index}>
          <Data
            Name={user.Name}
            title={user.title}
            description={user.description}
            imgUrl={user.imgUrl}
          />
        </div>
      ))}
    </div>
  );
}
