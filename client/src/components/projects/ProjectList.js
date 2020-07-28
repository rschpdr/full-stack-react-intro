import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import projectsApi from "../../apis/projects";

const ProjectList = () => {
  const history = useHistory();

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async function fetchProjects() {
      try {
        const result = await projectsApi.get();

        setProjects([...result.data]);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div>
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col" style={{ width: "5%" }}>
              ID
            </th>
            <th scope="col" style={{ width: "15%" }}>
              Title
            </th>
            <th scope="col" colSpan="2">
              Description
            </th>
            <th scope="col" style={{ width: "10%" }}>
              # of tasks
            </th>
            <th scope="col" style={{ width: "15%" }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr className="clickable" key={project._id}>
              <td>
                <Link to={`/projects/${project._id}`}>{project._id}</Link>
              </td>
              <td>
                <Link to={`/projects/${project._id}`}>{project.title}</Link>
              </td>
              <td colSpan="2">
                <Link to={`/projects/${project._id}`}>
                  {project.description}
                </Link>
              </td>
              <td>
                <Link to={`/projects/${project._id}`}>
                  {project.tasks.length}
                </Link>
              </td>
              <td>
                <Link
                  type="button"
                  className="btn btn-sm btn-warning mr-2"
                  to={`projects/edit/${project._id}`}
                >
                  Edit
                </Link>
                <Link
                  type="button"
                  className="btn btn-sm btn-danger"
                  to={`projects/delete/${project._id}`}
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectList;
