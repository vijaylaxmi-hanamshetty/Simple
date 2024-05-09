import Chart from "react-apexcharts";
import Bitcoin from "../Images/bitcoin.jpg";

const chartConfig = {
  type: "line",
  height: 500,
  width: 900,
  series: [
    {
      name: "Bitcoin",
      data: [0,1,2,4,43,76,56,87,652,32,467,30,92,85,3,6,7,8,9,
      
      ],
    },
  ],
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
    colors: ["#00008B"],
    stroke: {
      lineCap: "round",
      curve: "smooth",
      width: 2,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: false,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 10,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "white",
    },
  },
};

export default function Example() {
  return (
    <div className="w-full sm:mx-auto rounded-lg bg-white">
      <div className="p-4">
        <div className="flex items-center">
          <img
            src={Bitcoin}
            alt="avatar"
            className="inline-block h-8 w-8 mx-4 my-2 rounded-full object-cover object-center"
          />
          <h6 className="text-lg font-bold py-3">Bitcoin</h6>
          <span className="text-base text-gray-500 py-3 px-1">BTC</span>
          <div className="px-9">
            <button className="bg-gray-500 text-white py-2 px-4 rounded-md">
              Rank#1
            </button>
          </div>
        </div>
        <div className="py-3">
          <div className="flex items-center">
            <h4 className="text-2xl font-bold">$46,953.04</h4>
            <div className="px-4 flex items-center">
              <button className="bg-green-200 text-green-400 rounded-md h-7 px-3">
                2.51%
              </button>
              <div>
                <span className="px-5 text-base">(24H)</span>
              </div>
            </div>
          </div>
        </div>
        <h6 className="text-lg font-bold">RS 39,42,343</h6>
      </div>
      <hr className="bg-black" />
      <div className="px-2 pb-0">
        <Chart {...chartConfig}></Chart>
      </div>
    </div>
  );
}
