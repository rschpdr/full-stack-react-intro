import React from "react";

const TaskForm = (props) => {
  function handleChange(event) {
    props.setTask({
      ...props.task,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    props.handleSubmit(props.task);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Title</label>
        <input
          type="text"
          className="form-control form-control-lg"
          id="taskTitleField"
          name="title"
          aria-describedby="emailHelp"
          onChange={handleChange}
          value={props.task.title}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Description</label>
        <textarea
          className="form-control form-control-lg"
          name="description"
          id="taskDescriptionField"
          onChange={handleChange}
          value={props.task.description}
        />
      </div>
      <button type="submit" className="btn btn-lg btn-primary">
        Save
      </button>
    </form>
  );
};

export default TaskForm;
