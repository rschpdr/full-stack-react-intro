import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import TaskForm from "./TaskForm";

import tasksApi from "../../apis/tasks";

const EditTask = () => {
  const { id } = useParams();
  const history = useHistory();

  const [task, setTask] = useState({
    title: "",
    description: "",
    project: "",
  });

  useEffect(() => {
    (async function fetchTask() {
      const result = await tasksApi.get(`/${id}`);

      setTask({ ...result.data[0] });
    })();
  }, []);

  async function handleSubmit(data) {
    try {
      const result = await tasksApi.put(`/${task._id}`, data);

      history.push(`/projects/${task.project}`);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>Edit Task {task.title}</h1>
      <hr></hr>
      <TaskForm task={task} setTask={setTask} handleSubmit={handleSubmit} />
    </div>
  );
};

export default EditTask;
