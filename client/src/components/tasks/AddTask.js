import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import TaskForm from "./TaskForm";

import tasksApi from "../../apis/tasks";

const AddTask = () => {
  const { projectId } = useParams();
  const history = useHistory();

  const [task, setTask] = useState({
    title: "",
    description: "",
    projectID: projectId,
  });

  async function handleSubmit(data) {
    try {
      const result = await tasksApi.post("", data);

      history.push(`/projects/${projectId}`);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>New Task</h1>
      <hr></hr>
      <TaskForm task={task} setTask={setTask} handleSubmit={handleSubmit} />
    </div>
  );
};

export default AddTask;
