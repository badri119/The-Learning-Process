import React from "react";
import { Link } from "react-router-dom";
import bgimage from "../images/background.png";
import quote from "../images/quote.png";
const LandingPage = () => {
  const setbgimage = {
    backgroundImage: `url(${bgimage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    position: "relative",
  };

  const apis = [
    {
      id: 1,
      header: "Quote Generator",
      img: quote,
      info: "The following API generatres random quotes",
      urlto: "/quote-generator",
    },
    {
      id: 2,
      header: "API2",
      img: quote,
      info: "TBD",
      urlto: "/tbd",
    },
  ];

  return (
    <div style={setbgimage}>
      <div className="inset-0 inset-x-0">
        <h1 className="flex underline text-white text-5xl font-bold justify-center items-center pt-10 mb-5 text-center">
          Welcome to Random API Generator
        </h1>
        <h2 className="flex text-white  text-2xl justify-center mb-16 font-bold text-center">
          Choose the following list of API's and test it out!
        </h2>

        <div className=" flex flex-col gap-12 md:flex-row md:gap-72 justify-center">
          {apis.map(({ id, header, img, info, urlto }) => (
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow shadow-neutral-100 dark:bg-gray-800 dark:border-gray-700">
              <div key={id}>
                <img className="rounded-t-lg" src={img} alt="api_image" />

                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    {header}
                  </h5>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {info}
                  </p>
                  <div className="flex justify-center">
                    <Link
                      to={urlto}
                      className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
                    >
                      <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                      <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg
                          className="w-5 h-5 text-green-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </span>
                      <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg
                          className="w-5 h-5 text-green-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </span>
                      <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                        Use API
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
