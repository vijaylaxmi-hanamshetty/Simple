import React from "react";
import chart1 from "../Images/chart1.jpg";
import chart2 from "../Images/chart2.jpg";

function About() {
  return (
    <div className="bg-white sm:rounded-md lg:rounded-md lg:px-4 lg:mr-96 lg:mx-7 lg:my-6 sm:mx-6 sm:px-4">
      <h5 className="py-2 text-2xl font-bold">About Bitcoin</h5>
      <h6 className="py-1 text-lg font-bold">What is Bitcoin?</h6>
      <p className="py-2 text-sm text-gray-700 leading-normal">
        Bitcoin's price today is US$16,951.182 with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-days all-time high $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24M BTC and max supply of 21M BTC.
      </p>
      <hr className="bg-black" />
      <div className="py-2">
        <h6 className="text-lg font-bold">Lorem ipsum dolor sit amet</h6>
        <p className="py-2 text-sm text-gray-700 leading-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore iste voluptas! Minima aspernatur quam tempore voluptatum voluptates odit aut omnis voluptas commodi est impedit nisi, error neque esse Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nihil! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, at?
        </p>
        <p className="py-2 text-sm text-gray-700 leading-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quia. Quisquam ea facere dolorem non deserunt? Architecto facere atque ullam eius quam aperiam, voluptatum deserunt facilis sed ex, ratione Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aliquam nesciunt delectus neque, repudiandae voluptate! Minima magni tempora ipsum laboriosam.
        </p>
        <p className="py-2 text-sm text-gray-700 leading-normal">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque consectetur, delectus incidunt, consequatur quasi natus asperiores obcaecati quae, nisi facere tempora vel? Voluptate nisi sit reprehenderit maxime iste, asperiores tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, et?
        </p>
        <hr className="bg-black" />
        <div>
          <h6 className="text-lg font-bold">Already Holding Bitcoin?</h6>
        </div>
      </div>
      <div className="gap-4 flex sm:overflow-hidden py-4">
        <div className="flex bg-green-200 rounded-md">
          <div className="flex gap-3">
            <img src={chart1} alt="" className="rounded-2xl h-32 p-5" />
          </div>
          <div className="py-4 ">
            <h5 className="text-white w-9/12">Calculate your profits</h5>
            <button className="bg-white text-black  rounded-md px-6">Check Now</button>
          </div>
        </div>
        <div className="flex bg-orange-900 rounded-md">
          <div className=" lg:flex-row  gap-3">
            <img src={chart2} alt="" className="rounded-2xl h-32 p-5" />
          </div>
          <div className="py-4">
            <h5 className="text-white w-5/6">Calculate your tax liability</h5>
            <button className="bg-white text-black rounded-md px-6">Check Now</button>
          </div>
        </div>
      </div>
      <div className="py-2">
        <hr className="bg-black" />
      </div>
      <p className="py-2 text-sm text-gray-700 leading-normal">
        Fermentum hendrerit imperdiet nulla viverra. Sit alliquam massa vel convallis duis ac. Miadipising semper science isque porttitor pulvinar nuc rissus. Fermentum potenti lacculis lacinia congaipsum fames amet dul. purus ultrices tincididunt volutpat in ege Ullamcorper dul
      </p>
    </div>
  );
}

export default About;
