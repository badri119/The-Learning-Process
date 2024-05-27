import { React, useState, useEffect } from "react";
import "../styling.css";

const Timer = ({ timeout, onTimeout, mode }) => {
  const [remaingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    // console.log("Setting time out");
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    // console.log("Setting Interval");
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      max={timeout}
      value={remaingTime}
      className={mode}
    />
  );
};

export default Timer;
