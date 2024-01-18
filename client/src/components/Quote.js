// To do: Add a default message stating "Click Button to generate a quote and change the state accordingly"

import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useState, useEffect } from "react";

const Quote = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [randomQuote, setRandomQuote] = useState(null);
  const [showQuote, setShowQuote] = useState(false);
  //   const [val, setVal] = useState("Click on Generate to obtain a quote"); -------> To do for default text

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://type.fit/api/quotes");
        const data = await response.json();
        // console.log(data);
        setData(data);
      } catch (error) {
        setError("401 Unauthorized");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      generateRandomQuote();
    }
  }, [data]);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setRandomQuote(data[randomIndex]);
  };

  const handleGenerateQuote = () => {
    if (data.length > 0) {
      generateRandomQuote();
      setShowQuote(true);
    }
    // setVal(""); ---> To do for default text
  };

  return (
    <div className=" h-screen lg:w-screen bg-slate-800 flex flex-col justify-center items-center">
      <div className="flex px-5 pt-4 pb-4 absolute top-0 left-0">
        <Link
          to="/"
          className="text-5xl   text-white hover:text-black hover:bg-green-400 hover:rounded-full"
        >
          <IoMdArrowRoundBack />
        </Link>
      </div>
      <h1 className="text-3xl font-bold text-white pb-8 text-center">
        The following API generates random quotes
      </h1>
      <div className="relative h-3/6 md:h-80 w-2/4 bg-white p-2 border-4 border-red-700 ">
        {showQuote && randomQuote && (
          <div className="flex flex-col items-center pt-20">
            <p className="text-xl font-mono font-bold text-center overflow-hidden">
              {randomQuote.text}
            </p>
            <p className="text-md font-bold"> - {randomQuote.author}</p>
          </div>
        )}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <button
            onClick={handleGenerateQuote}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Generate a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quote;
