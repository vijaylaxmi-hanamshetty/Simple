import React from "react";

export default function Data2({ title, description, imgUrl }) {
  return (
    <div className=" bg-light-blue-50 rounded-md p-4  mx-auto sm:overflow-hidden">
      <img
        src={imgUrl}
        alt="avatar"
        className="relative inline-block h-8 w-8 mx-4 my-2 rounded-full object-cover object-center bg-green-600"
      />
      <div>
        <h6 className="font-semibold">{title}</h6>
        <p>{description}</p>
      </div>
    </div>
  );
}
