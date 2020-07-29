import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    if (task.attachmentUrl) {
      handleSubmit(task);
    }
  }, [task]);

  async function handleSubmit(data) {
    try {
      await tasksApi.post("", task);

      history.push(`/projects/${projectId}`);
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
      <h1>New Task</h1>
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

export default AddTask;
