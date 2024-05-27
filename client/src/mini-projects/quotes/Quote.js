import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useState, useEffect, useContext } from "react";
import QuoteDataContext from "../context//ForQuotes/QuoteDataContext";

const Quote = () => {
  const [randomQuote, setRandomQuote] = useState(null);
  const [showQuote, setShowQuote] = useState(false);

  const { data = [] } = useContext(QuoteDataContext);

  useEffect(() => {
    if (data.length > 0) {
      generateRandomQuote();
    }
  }, []);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setRandomQuote(data[randomIndex]);
  };

  const handleGenerateQuote = () => {
    if (data.length > 0) {
      generateRandomQuote();
      setShowQuote(true);
    }
  };

  return (
    <div className=" h-screen lg:w-screen  bg-slate-400 flex flex-col justify-center items-center">
      <div className="flex justify-between items-center px-5 py-3 absolute top-0 w-full bg-blue-600 ">
        <Link
          to="/"
          className="text-4xl text-white hover:text-black hover:bg-green-400 hover:rounded-full"
        >
          <IoMdArrowRoundBack />
        </Link>
        <Link
          to="/quotes-list"
          className="text-white text-2xl hover:underline decoration-green-400 hover:text-black"
        >
          All Quotes
        </Link>
      </div>

      <div className="relative h-2/5 w-3/4 md:h-80 md:w-2/4 bg-white p-2 shadow-md shadow-black rounded-md">
        {showQuote && randomQuote ? (
          <div className="flex flex-col items-center pt-5 md:pt-20">
            <p className="text-sm md:text-xl font-mono font-bold text-center overflow-hidden">
              {randomQuote.quote}
            </p>
            <p className="text-sm md:text-xl font-bold mt-4">
              {" "}
              - {randomQuote.name}
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center pt-24">
            <p className="text-xl text-blue-600 font-mono font-bold text-center overflow-hidden">
              Click "Generate a Quote", to generate a random quote
            </p>
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
