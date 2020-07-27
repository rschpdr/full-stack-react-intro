import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "../assets/styles/App.css";

import Navbar from "./Navbar";
import ProjectList from "./projects/ProjectList";
import AddProject from "./projects/AddProject";
import EditProject from "./projects/EditProject";
import DeleteProject from "./projects/DeleteProject";
import ProjectDetails from "./projects/ProjectDetails";

import AddTask from "./tasks/AddTask";
import EditTask from "./tasks/EditTask";
import TaskDetails from "./tasks/TaskDetails";
import DeleteTask from "./tasks/DeleteTask";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container-fluid w-75  mt-5">
        <Switch>
          <Route path="/" exact component={ProjectList} />
          <Route path="/projects/create" component={AddProject} />
          <Route path="/projects/edit/:id" component={EditProject} />
          <Route path="/projects/delete/:id" component={DeleteProject} />
          <Route path="/projects/:id" component={ProjectDetails} />
          <Route path="/tasks/:projectId/create" component={AddTask} />
          <Route path="/tasks/:id" exact component={TaskDetails} />
          <Route path="/tasks/edit/:id" component={EditTask} />
          <Route path="/tasks/delete/:id" component={DeleteTask} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
