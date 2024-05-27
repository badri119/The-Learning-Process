import React from "react";
import { Link } from "react-router-dom";
import quiz from "../images/quiz.jpeg";
import quote from "../images/quote.png";
import movie from "../images/movies.png";
import cart from "../images/cart.png";
import project from "../images/project.png";
import "./LandingPage.css";
import MainButton from "./components/MainButton";

const LandingPage = () => {
  const apis = [
    {
      id: 1,
      header: "Project Managment",
      img: project,
      info: "Project Management Application to understand useRef and prop drilling",
      urlto: "/management",
      button: "Explore",
      tech: "Made with React",
    },
    {
      id: 2,
      header: "A Simple Cart",
      img: cart,
      info: "Shopping Cart app to understand useContext and useReducer",
      urlto: "/cart",
      button: "Explore",
      tech: "Made React and useContext",
    },
    {
      id: 3,
      header: "Quote Generator",
      img: quote,
      info: "Generate your favorite quote or look at the entire list",
      urlto: "/quote-generator",
      button: "Use API",
      tech: "Made with PostgreSQL, TailwindCSS and useContext",
    },
    {
      id: 4,
      header: "Quiz",
      img: quiz,
      info: "Challenge your technical skills with these quiz topics",
      urlto: "/quiz",
      button: "Get Quizzed",
      tech: "Made with PostgreSQL and TailwindCSS",
    },
    {
      id: 5,
      header: "Entertainment Database",
      img: movie,
      info: "A list of Movies and Shows",
      urlto: "/movie-db",
      button: "Explore",
      tech: "Made with Redux, OMDb API and SCSS",
    },
  ];

  return (
    <div>
      <div className="h-screen bg-black flex justify-center items-center flex-col">
        <h1 className="font-custom text-white text-5xl font-bold text-center">
          The Learning Process
        </h1>
        <h2 className="mt-10 text-white text-2xl font-bold font-custom text-center px-2 md:px-0 w-6/12">
          A website where I created various mini-projects to undertand
          full-stack development involving React, NodeJS, ExpressJS, PostgreSQL,
          RESTful API, Redux and more!
        </h2>
        <a href="#apis" className="mt-10">
          <button className="text-white text-xl p-3 bg-black border border-white rounded-md hover:bg-white hover:text-black">
            Get Started
          </button>
        </a>
      </div>
      <div className="inset-0 inset-x-0 pt-10 h-auto bg-gray-100 " id="apis">
        <h2 className="flex text-black  text-2xl justify-center mb-16 font-bold text-center">
          Choose the following list of Projects and test it out!
        </h2>
        <div className="flex flex-col gap-12 md:flex-row md:flex-wrap md:gap-16 justify-center px-4 md:px-0 items-center pt-12">
          {apis.map(({ id, header, img, info, urlto, tech, button }) => (
            <div
              key={id}
              className="max-w-xs bg-white border border-gray-200 rounded-lg shadow shadow-neutral-100 dark:bg-black dark:border-gray-700 m-2"
            >
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
                    <MainButton button={button} />
                  </Link>
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
