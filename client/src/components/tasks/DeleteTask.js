import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import tasksApi from "../../apis/tasks";

const DeleteTask = () => {
  const { id } = useParams();
  const history = useHistory();

  const [task, setTask] = useState({ project: "" });

  useEffect(() => {
    (async function fetchTask() {
      const result = await tasksApi.get(`/${id}`);

      setTask({ ...result.data[0] });
    })();
  }, []);

  async function handleClick() {
    try {
      const result = await tasksApi.delete(`/${id}`);

      history.push(`/projects/${task.project}`);
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
              <span
                aria-hidden="true"
                onClick={() => history.push(`/projects/${task.project}`)}
              >
                &times;
              </span>
            </button>
          </div>
          <div className="modal-body">
            Are you sure you want to delete this task?
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={() => history.push(`/projects/${task.project}`)}
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

export default DeleteTask;
