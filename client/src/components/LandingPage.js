import React from "react";
import { Link } from "react-router-dom";
import bgimage from "../images/API.png";
import quote from "../images/quote.png";
const LandingPage = () => {
  const setbgimage = {
    backgroundImage: `url(${bgimage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    filter: "brightness(80%)",
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
  ];

  return (
    <div>
      <div style={setbgimage}></div>
      <div className="inset-0 inset-x-0 absolute">
        <h1 className="flex underline text-white text-5xl font-bold justify-center items-center pt-10 mb-5 text-center">
          Welcome to Random API Generator
        </h1>
        <h2 className="flex text-white text-2xl justify-center mb-16 font-bold">
          Choose the following list of API's and test it out!
        </h2>

        <div className="lg:px-48">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow shadow-neutral-100 dark:bg-gray-800 dark:border-gray-700">
            {apis.map(({ id, header, img, info, urlto }) => (
              <div key={id}>
                <img className="rounded-t-lg" src={img} alt="api_image" />

                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {header}
                  </h5>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {info}
                  </p>
                  <div className="flex justify-center">
                    <Link
                      to={urlto}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Use API
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
