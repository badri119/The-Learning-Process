import React, { useState, useEffect } from "react";

const Http = () => {
  const [httpdata, setHttpData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const httpdata = async () => {
      try {
        const result = await fetch("http://localhost:4000/http");
        const data = await result.json();
        console.log(data);
        setHttpData(data);
      } catch (err) {
        setError("Oh no, something went wrong!");
      }
    };
    httpdata();
  }, []);
  return (
    <div className="h-screen bg-black flex items-center justify-center flex-col text-white">
      <h1 className="font-bold text-3xl">Type in the right answer!</h1>
    </div>
  );
};

export default Http;
