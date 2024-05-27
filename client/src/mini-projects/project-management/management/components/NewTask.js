import { React, useState } from "react";
import Button from "./Button";

const NewTask = ({ onAdd }) => {
  const [enteredTask, setEnteredTask] = useState("");

  const handleChange = (event) => {
    setEnteredTask(event.target.value); //stored enterted value to the state
  };

  const handleClick = () => {
    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  };

  return (
    <div className="flex items-center gap-4 ">
      <input
        type="text"
        className="w-64 px-4 py-2 rounded-md bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      ></input>
      <Button onClick={handleClick}>Add Task</Button>
    </div>
  );
};

export default NewTask;
