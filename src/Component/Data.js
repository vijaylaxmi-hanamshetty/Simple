import React from "react";

export default function Data({ title, Name, imgUrl, description }) {
  return (
    <div>
    <div className="bg-teal-50 rounded-md flex  gap-6 ">
      <div className=" ">
      <div className="px-4 py-4  ">
        <img src={imgUrl} alt="" className="h-20 rounded-md" />
        <h6 className="text-xl font-semibold">{Name}</h6>
        <p className="text-sm font-thin">{title}</p>
        </div>
      </div>
      <div>
        <p className="text-sm font-sans antialiased font-light leading-normal text-inherit py-6">
          {description}
        </p>
      </div>
    </div>
  </div>
);
}
  
