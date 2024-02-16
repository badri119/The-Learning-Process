import React, { useState, useEffect } from "react";

import QuoteDataContext from "./QuoteDataContext";

const QuoteProvider = ({ children }) => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_QUOTE_API);
        const datas = await response.json();
        // console.log(datas);
        setData(datas);
      } catch (error) {
        setError("Oh no, something went wrong!");
      }
    };

    fetchData();
  }, []);

  return (
    <QuoteDataContext.Provider value={{ data, setData }}>
      {children}
    </QuoteDataContext.Provider>
  );
};

export default QuoteProvider;
