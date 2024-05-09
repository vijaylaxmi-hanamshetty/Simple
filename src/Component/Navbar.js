import React from "react";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li className="p-1 font-medium">
        <a href="/" className="flex items-center hover:text-blue-500 transition-colors text-blue-gray">
          crypoTaxes
        </a>
      </li>
      <li className="p-1 font-medium">
        <a href="/" className="flex items-center hover:text-blue-500 transition-colors text-blue-gray">
          FreeTax
        </a>
      </li>
      <li className="p-1 font-medium">
        <a href="/" className="flex items-center hover:text-blue-500 transition-colors text-blue-gray">
          Resource Center
        </a>
      </li>
      <li className="p-1 font-medium">
        <a href="/" className="flex items-center hover:text-blue-500 transition-colors text-blue-gray">
          <button className="bg-blue-800 px-4 py-2 rounded text-white">Get started</button>
        </a>
      </li>
    </ul>
  );
}  

export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 1000 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <nav className="max-h-24 max-w-full py-2 rounded-none bg-white shadow-md">
      <div className="flex items-center justify-between text-blue-gray-900 px-4">
        <h3 className="text-2xl font-bold text-blue-900">
          koin <span className="text-orange-600">%</span>
        </h3>

        <div className="hidden lg:block">
          <NavList />
        </div>
        <button
          className="ml-auto h-6 w-6 text-gray-900 hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>
      {openNav && (
        <div className="px-4">
          <NavList />
        </div>
      )}
    </nav>
  );
}
