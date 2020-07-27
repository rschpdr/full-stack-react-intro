import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import projectApi from "../../apis/projects";

const ProjectDetails = () => {
  const { id } = useParams();

  const [project, setProject] = useState({
    _id: "",
    title: "",
    description: "",
    tasks: [],
  });

  useEffect(() => {
    async function fetchProject() {
      try {
        const result = await projectApi.get(`/${id}`);
        setProject({ ...result.data[0] });
      } catch (err) {
        console.error(err);
      }
    }
    fetchProject();
  }, []);

  return (
    <div>
      <h1>Project Details</h1>
      <hr></hr>

      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul>
          {project.tasks.map((task) => (
            <li key={task._id}>
              <div className="d-inline-block">
                <Link className="m-1" to={`/tasks/${task._id}`}>
                  {task.title}
                </Link>
                <Link
                  className="btn btn-sm btn-warning m-1"
                  to={`/tasks/edit/${task._id}`}
                >
                  Edit
                </Link>
                <Link
                  className="btn btn-sm btn-danger m-1"
                  to={`/tasks/delete/${task._id}`}
                >
                  Delete
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <Link className="btn btn-primary" to={`/tasks/${project._id}/create`}>
          New Task
        </Link>{" "}
      </div>
    </div>
  );
};

export default ProjectDetails;
