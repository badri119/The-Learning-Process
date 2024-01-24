import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useContext } from "react";
import QuoteDataContext from "../context/QuoteDataContext";

const QuoteList = () => {
  const [search, setSearch] = useState();
  const { data = [] } = useContext(QuoteDataContext);
  // console.log(data);
  const [allquotes, setAllQuotes] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    setAllQuotes(data);
  }, [data]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    // console.log(search);
    const nameAndQuoteSearch = data.filter((quotesearch) => {
      return (
        quotesearch.name.toLowerCase().includes(e.target.value) ||
        quotesearch.quote.toLowerCase().includes(e.target.value)
      );
    });

    setAllQuotes(nameAndQuoteSearch);
  };
  return (
    <div className="h-screen overflow-x-auto lg:w-screen bg-slate-400 flex flex-col items-center w-screen">
      <div className="flex justify-start gap-7 items-center px-5 py-3 absolute top-0 w-full bg-blue-600">
        <Link
          to="/quote-generator"
          className="text-4xl text-white hover:text-black  hover:bg-green-400 hover:rounded-full "
        >
          <IoMdArrowRoundBack />
        </Link>
        <Link
          to="/"
          className="text-2xl text-white hover:underline decoration-green-400 hover:text-black"
        >
          Home
        </Link>
      </div>

      <div className="flex right-3 md:right-auto mt-3 z-10 absolute">
        <input
          type="text"
          placeholder="Search for a quote or author..."
          className="mb-7 pl-3 rounded-md h-10 w-36 md:w-96 hover:border-green-400 border-2"
          value={search}
          onChange={handleSearch}
        />
      </div>
      <div className="mt-24">
        <div className="overflow-x-auto sm:w-full flex justify-center pb-12 px-4 md:px-0">
          <table className="table-fixed text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 md:w-2/3">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3">
                  Quote
                </th>
                <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 md:w-52 ">
                  Author
                </th>
              </tr>
            </thead>
            <tbody>
              {allquotes.map((value, index) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={index}
                >
                  <th
                    scope="row"
                    className="px-3 py-2 sm:px-6 sm:py-4 font-medium text-gray-900 whitespace-normal dark:text-white"
                  >
                    {value.quote}
                  </th>

                  <td className="px-3 py-2 sm:px-6 sm:py-4 border dark:bg-gray-800 dark:border-gray-700 ">
                    {value.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default QuoteList;
