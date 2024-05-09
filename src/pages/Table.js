const TABLE_ROWS = [
  {
    name: "Bitcoin price",
    job: "$16,815.46",
    date: "Market Cap",
    Rate: "$323,507,290,047",
  },
  {
    name: "24h Low /24h High",
    job: "$16,382.07/$16,874.12",
    date: "Market Cap Dominance",
    Rate: "38.343%",
  },
  {
    name: "7d Low/7d High",
    job: "$16,382.07/$16,874.12",
    date: "volume/Market Cap",
    Rate: "0.0718",
  },
  {
    name: "Trading Volume",
    job: "$123,249,202,782",
    date: "All time High",
    Rate: "$69,044.77",
  },
  {
    name: "MARKET Cap Rank",
    job: "#1",
    date: "All-Time Low",
    Rate: "$69.81",
  },
];

export function Table() {
  return (
    <div className="bg-white sm:rounded-md lg:rounded-md lg:px-4 lg:mr-96 lg:mx-7 lg:my-6 sm:mx-6 sm:px-4">
      <h5 className="text-2xl font-bold py-2">Performance</h5>

      <div className="flex">
        <div className="flex flex-col">
          <p className="text-base">Today's Low</p>
          <p className="">{`46,930.22`}</p>
        </div>
        <div className="h-2 w-full mx-8 rounded-md my-5border-b-2 border-black bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 via-purple-500 via-pink-500 via-gray-500 via-teal-500 via-orange-500 to-cyan-500  my-3 "></div>
        <div className="flex flex-col">
          <p className="">Today's High</p>
          <p className="">{`46,930.22`}</p>
        </div>
      </div>
      <div className="flex py-4">
        <div className="flex flex-col">
          <p className="">Today's Low</p>
          <p className="">{`46,930.22`}</p>
        </div>
        <div className="border-b-2 border-black bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 via-purple-500 via-pink-500 via-gray-500 via-teal-500 via-orange-500 to-cyan-500 h-2 w-full rounded-md my-3 mx-8"></div>
        <div className="flex flex-col">
          <p className="">{`46,930.22`}</p>
          <p className="">Today's High</p>
        </div>
      </div>
      <h4 className="text-xl py-2">Fundamentals</h4>
      <table className="w-full">
        <thead></thead>
        <tbody>
          {TABLE_ROWS.map(({ name, job, date, Rate }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={name}>
                <td className={classes}>
                  <p className="text-sm text-blue-gray font-normal">{name}</p>
                </td>

                <td className={classes}>
                  <p className="text-lg text-blue-gray font-normal">{job}</p>
                </td>
                <td className={classes}>
                  <p className="text-sm text-blue-gray font-normal">{date}</p>
                </td>
                <td className={classes}>
                  <a href="/" className="text-lg text-blue-gray font-medium">{Rate}</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
