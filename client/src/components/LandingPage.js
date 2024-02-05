import React from "react";
import { Link } from "react-router-dom";
import http from "../images/http.png";
import quote from "../images/quote.png";
import movie from "../images/movies.png";
import "./LandingPage.css";

const LandingPage = () => {
  const apis = [
    {
      id: 1,
      header: "Quote Generator",
      img: quote,
      info: "Get inspired from these Quotes",
      urlto: "/quote-generator",
      tech: "Made with PostgreSQL, TailwindCSS and useContext",
    },
    {
      id: 2,
      header: "HTTP Game",
      img: http,
      info: "Test your HTTP knowledge!",
      urlto: "/http-game",
      tech: "Made with PostgreSQL and TailwindCSS",
    },
    {
      id: 3,
      header: "Entertainment Database",
      img: movie,
      info: "A list of Movies and Shows",
      urlto: "/movie-db",
      tech: "Made with Redux, OMDb API and vanilla CSS",
    },
  ];

  return (
    <div>
      <div className="h-screen bg-black flex justify-center items-center flex-col">
        <h1 className="font-custom text-white text-5xl font-bold">
          API Generator
        </h1>
        <h2 className="mt-10 text-white text-3xl font-bold font-custom text-center px-2 md:px-0">
          A website where you can play with APIs
        </h2>
        <a href="#apis">
          <button className="text-white mt-10 text-xl p-3 bg-black border border-white rounded-md hover:bg-white hover:text-black">
            Get Started
          </button>
        </a>
      </div>
      <div className="inset-0 inset-x-0 pt-10 h-screen bg-gray-100" id="apis">
        <h2 className="flex text-black  text-2xl justify-center mb-16 font-bold text-center">
          Choose the following list of API's and test it out!
        </h2>

        <div className=" flex flex-col gap-12 md:flex-row md:gap-12 justify-center px-4 md:px-0 pb-16">
          {apis.map(({ id, header, img, info, urlto, tech }) => (
            <div className="max-w-96 bg-white border border-gray-200 rounded-lg shadow shadow-neutral-100 dark:bg-black dark:border-gray-700">
              <div key={id}>
                <img
                  className="rounded-t-lg h-48 w-80 object-cover"
                  src={img}
                  alt="api_image"
                />
                <div className="has-tooltip absolute flex pl-1">
                  <span className="tooltip text-sm font-semibold w-60 rounded shadow-lg p-1 bg-gray-100 text-indigo-600 -mt-12">
                    {tech}
                  </span>
                  <p className="text-white font-bold text-lg hover:scale-105 hover:opacity-50">
                    &#9432;
                  </p>
                </div>

                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    {header}
                  </h5>

                  <p className="mb-3 font-normal text-gray-700 dark:text-white text-center">
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
