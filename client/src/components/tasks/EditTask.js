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

  useEffect(() => {
    if (task.attachmentUrl) {
      handleSubmit(task);
    }
  }, [task]);

  async function handleSubmit(data) {
    try {
      const result = await tasksApi.put(`/${task._id}`, data);

      history.push(`/projects/${task.project}`);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleFileUpload(data) {
    try {
      const uploadData = new FormData();

      uploadData.append("attachment", data);

      const result = await tasksApi.post("/upload-attachment", uploadData);

      console.log(result.data.attachmentUrl);

      // Retorna a URL do arquivo no Cloudinary
      return result.data.attachmentUrl;
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>Edit Task {task.title}</h1>
      <hr></hr>
      <TaskForm
        task={task}
        setTask={setTask}
        handleSubmit={handleSubmit}
        handleFileUpload={handleFileUpload}
      />
    </div>
  );
};

export default EditTask;
