import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import tasksApi from "../../apis/tasks";

const TaskDetails = () => {
  const { id } = useParams();

  const [task, setTask] = useState({
    _id: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    (async function fetchTask() {
      try {
        const result = await tasksApi.get(`/${id}`);

        setTask({ ...result.data[0] });
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div>
      <h1>Task Details</h1>
      <hr></hr>

      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>

      <Link to={`/projects/${task.project}`}>Back to project</Link>
    </div>
  );
};

export default TaskDetails;
