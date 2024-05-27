import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SelectedProject from "./components/SelectedProject";

function Main() {
  const [projectState, setProjectState] = useState({
    selectedProjecId: undefined, //to store the ID of the selected project or null if we want to add a new project or undefined if we're not adding a new project nor selecting a project
    projects: [],
    tasks: [],
  });

  //function to add a task:
  const handleAddTask = (text) => {
    setProjectState((prevState) => {
      const taskID = uuidv4();
      // console.log(generateID);
      const newTask = {
        text: text,
        project: prevState.selectedProjecId,
        id: taskID,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  };

  //function to delete a task:
  const handleDeleteTask = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState, //spreading old state so we don't lose it
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  };

  //function to add a new project
  const handleStart = () => {
    setProjectState((prevState) => {
      return {
        ...prevState, //spreading old state so we don't lose it
        selectedProjecId: null, //changing it from undefined to null, means we're adding a new project
      };
    });
  };

  const handleAddProject = (projectData) => {
    setProjectState((prevState) => {
      const generateID = uuidv4();
      // console.log(generateID);
      const newProject = {
        ...projectData,
        id: generateID,
      };
      return {
        ...prevState,
        selectedProjecId: undefined, //going back to the fall back screen
        projects: [...prevState.projects, newProject],
      };
    });
  };

  // console.log(projectState);

  //Handle Delete Project:
  const handleDeleteProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState, //spreading old state so we don't lose it
        selectedProjecId: undefined, //changing it from mull to undefined, means we're not adding a new project
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjecId
        ),
      };
    });
  };

  //Cancel project:
  const handleCancelProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState, //spreading old state so we don't lose it
        selectedProjecId: undefined, //changing it from mull to undefined, means we're not adding a new project
      };
    });
  };

  //Handle select project:
  const handleSelectProject = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState, //spreading old state so we don't lose it
        selectedProjecId: id, //changing it from undefined to null, means we're adding a new project
      };
    });
  };

  //selected project stored in a variable that is derived from the state
  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjecId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />
  );

  if (projectState.selectedProjecId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />
    );
  } else if (projectState.selectedProjecId === undefined) {
    content = <NoProject onStartAddProject={handleStart} />;
  } else {
  }

  return (
    <main className="h-screen flex gap-8 ">
      <Sidebar
        onStartAddProject={handleStart}
        projects={projectState.projects}
        selectProject={handleSelectProject}
        selectedProjectId={projectState.selectedProjecId}
      />
      {content}
    </main>
  );
}

export default Main;
