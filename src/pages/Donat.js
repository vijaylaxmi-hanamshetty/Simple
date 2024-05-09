import React from "react";
import { Typography } from "@material-tailwind/react";
import Chart from "react-apexcharts";

const chartConfig = {
  type: "donut",
  width: 200,
  height: 200,
  series: [43, 22],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "60%",
        },
        colors: ["skyblue", "yellow"],
      },
    },
  },
};

const segmentData = [
  { color: "#00897b", label: "Crowdsale investors:80%" },
  { color: "#1e88e5", label: "Foundation:20%" },
];

export default function Example() {
  return (
    <div className=" bg-white sm:rounded-md lg:rounded-md lg:px-4 lg:mr-96 lg:mx-7 lg:my-6 sm:mx-6 sm:px-4">
     <h5 className="py-2 text-2xl font-bold">Toconomics</h5>
      <h6 className="py-1 text-lg font-bold">initial Distribution</h6>
      
    <div className="   flex ">
      <Chart {...chartConfig} />
      <div className="flex flex-col mr-4 py-10">
    
        {segmentData.map(({ color, label }, index) => (
          <div
            key={index}
            className="flex items-center pointer-events-auto gap-2"
          >
            <div
              className="w-3 h-3  rounded-full  "
              style={{ backgroundColor: color }}
            ></div>
            <Typography variant="subtitle1" color="black">
              {label}
            </Typography>
          </div>
        ))}
       
      </div>
      
    </div>
    <p className="text-sm text-gray-700 leading-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maiores incidunt illo voluptatem atque mollitia veritatis voluptatum ipsum nesciunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, architecto?Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestias error autem facilis, maiores voluptatum dolorum blanditiis aperiam ipsa eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, fuga!
        </p>
    </div>
  );
}
