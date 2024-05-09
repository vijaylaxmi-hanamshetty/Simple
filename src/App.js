import Nav from "./pages/Nav";
import About from "./pages/About";
import Display from "./pages/Display";
import Sent from "./pages/Sent";
import { Table } from "./pages/Table";
import Get from "./pages/Get";
import Chart from "./pages/Chart";
import { NavbarDefault } from "./Component/Navbar";
import Donat from "./pages/Donat"
export default function App() {
  return (
    <>
      <NavbarDefault />

      <div className="bg-indigo-50">
        <h6 className="font-extralight p-2">
          Cryptocurrencies<span className="px-2 font-semibold">Bitcon</span>
        </h6>
        <div className=" px-10 gap-8  flex">
          <Chart />
          <Get />
        </div>
        <div className="lg:px-4 lg:mr-96 lg:mx-7 lg:my-6 sm:mx-6 sm:px-4">
          <Nav />
          <hr className="bg-black" />
        </div>
        <div>
          <Table />
        </div>
        <div>
          <Sent />
        </div>
        
        <div>
          <About />
        </div>
        <div><Donat/></div>
        <div>
          <Display />
        </div>
      </div>
    </>
  );
}
