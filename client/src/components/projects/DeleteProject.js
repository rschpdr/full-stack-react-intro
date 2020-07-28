import React from "react";
import { useParams, useHistory } from "react-router-dom";

import projectsApi from "../../apis/projects";

const DeleteProject = () => {
  const { id } = useParams();
  const history = useHistory();

  async function handleClick() {
    try {
      const result = await projectsApi.delete(`/${id}`);

      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div
      className="modal fade show"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Delete Project
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" onClick={() => history.push("/")}>
                &times;
              </span>
            </button>
          </div>
          <div className="modal-body">
            Are you sure you want to delete this project?
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={() => history.push("/")}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleClick}
            >
              I'm sure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProject;
