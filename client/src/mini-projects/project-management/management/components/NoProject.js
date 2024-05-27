import React from "react";
import notepad from "../../../images/notepad.png";
import Button from "./Button";

const NoProject = ({ onStartAddProject }) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={notepad}
        alt="notepad"
        className="h-16 w-16 object-contain mx-auto"
      ></img>
      <h2 className="text-xl font-bold text-stone-500 mt-4 my-4">
        {" "}
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create New Project</Button>
      </p>
    </div>
  );
};

export default NoProject;
