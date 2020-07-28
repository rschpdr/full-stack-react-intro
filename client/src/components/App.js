import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "../assets/styles/App.css";

import { AuthContextComponent } from "../contexts/auth";

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

import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Logout from "./auth/Logout";
import PrivateRoute from "./auth/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <Navbar />
        <div className="container-fluid w-75  mt-5">
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" render={() => <Login />} />
            <Route path="/logout" render={() => <Logout />} />
            <PrivateRoute path="/" exact component={ProjectList} />
            <PrivateRoute path="/projects/create" component={AddProject} />
            <PrivateRoute path="/projects/edit/:id" component={EditProject} />
            <PrivateRoute
              path="/projects/delete/:id"
              component={DeleteProject}
            />
            <PrivateRoute path="/projects/:id" component={ProjectDetails} />
            <PrivateRoute path="/tasks/:projectId/create" component={AddTask} />
            <PrivateRoute path="/tasks/:id" exact component={TaskDetails} />
            <PrivateRoute path="/tasks/edit/:id" component={EditTask} />
            <PrivateRoute path="/tasks/delete/:id" component={DeleteTask} />
          </Switch>
        </div>
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
