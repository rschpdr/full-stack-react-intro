import React, { useState, useEffect } from "react";
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

import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Logout from "./auth/Logout";
import PrivateRoute from "./auth/PrivateRoute";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser") || '""');
    setLoggedInUser({ ...storedUser });
  }, []);

  return (
    <BrowserRouter>
      <Navbar loggedInUser={loggedInUser} />
      <div className="container-fluid w-75  mt-5">
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route
            path="/login"
            render={() => (
              <Login user={loggedInUser} setUser={setLoggedInUser} />
            )}
          />
          <Route
            path="/logout"
            render={() => <Logout setUser={setLoggedInUser} />}
          />
          <PrivateRoute
            path="/"
            exact
            component={ProjectList}
            user={loggedInUser}
          />
          <PrivateRoute
            path="/projects/create"
            component={AddProject}
            user={loggedInUser}
          />
          <PrivateRoute
            path="/projects/edit/:id"
            component={EditProject}
            user={loggedInUser}
          />
          <PrivateRoute
            path="/projects/delete/:id"
            component={DeleteProject}
            user={loggedInUser}
          />
          <PrivateRoute
            path="/projects/:id"
            component={ProjectDetails}
            user={loggedInUser}
          />
          <PrivateRoute
            path="/tasks/:projectId/create"
            component={AddTask}
            user={loggedInUser}
          />
          <PrivateRoute
            path="/tasks/:id"
            exact
            component={TaskDetails}
            user={loggedInUser}
          />
          <PrivateRoute
            path="/tasks/edit/:id"
            component={EditTask}
            user={loggedInUser}
          />
          <PrivateRoute
            path="/tasks/delete/:id"
            component={DeleteTask}
            user={loggedInUser}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
