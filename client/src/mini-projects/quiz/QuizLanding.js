import React from "react";
import { Link } from "react-router-dom";
import httpquiz from "../../images/http.png";
import Reactquiz from "../../images/React.png";
import { FaHome } from "react-icons/fa";
import ButtonQuiz from "./components/ButtonQuiz";

const LandingPage = () => {
  const quizzes = [
    {
      id: 1,
      header: "HTTP Quiz",
      img: httpquiz,
      info: "Practise your HTTP codes",
      urlto: "/quiz/http-game",
    },
    {
      id: 2,
      header: "React Quiz",
      img: Reactquiz,
      info: "Take the React Quiz",
      urlto: "/quiz/react-quiz",
    },
  ];

  return (
    <div>
      <div className="inset-0 inset-x-0 bg-gray-100 " id="apis">
        <div className="flex items-center px-5 py-3 absolute top-0 w-full bg-black ">
          <Link
            to="/"
            className="text-4xl text-white hover:bg-white hover:text-black hover:rounded-md"
          >
            <FaHome />
          </Link>
        </div>
        <div className=" flex flex-col gap-12 md:flex-row md:gap-12 justify-center px-4 md:px-0 items-center pt-40 md:pt-12 h-screen">
          {quizzes.map(({ id, header, img, info, urlto }) => (
            <div className="max-w-96 bg-white border border-gray-200 rounded-lg shadow shadow-neutral-100 dark:bg-black dark:border-gray-700">
              <div key={id}>
                <img
                  className="rounded-t-lg h-48 w-80 object-cover"
                  src={img}
                  alt="api_image"
                />

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
                      <ButtonQuiz />
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
