import React from "react";

const TaskForm = (props) => {
  function handleChange(event) {
    if (event.currentTarget.files) {
      return props.setTask({
        ...props.task,
        [event.currentTarget.name]: event.currentTarget.files[0],
      });
    }

    props.setTask({
      ...props.task,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    console.log(props.task);

    const attachmentUrl = await props.handleFileUpload(props.task.attachment);

    props.setTask({
      ...props.task,
      attachmentUrl,
    });
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
      {/* <div className="form-group">
        <label htmlFor="exampleInputPassword1">Attachment</label>
        <input
          type="file"
          className="form-control form-control-lg"
          name="attachment"
          id="taskAttachmentField"
          onChange={(event) => {
            props.setTask({
              ...props.task,
              [event.currentTarget.name]: event.currentTarget.files[0],
            });
          }}
          value={props.task.attachment}
        />
      </div> */}
      <div className="form-group">
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            name="attachment"
            id="taskAttachmentField"
            onChange={handleChange}
          />
          <label className="custom-file-label" htmlFor="taskAttachmentField">
            Choose file
          </label>
        </div>
      </div>

      <button type="submit" className="btn btn-lg btn-primary">
        Save
      </button>
    </form>
  );
};

export default TaskForm;
