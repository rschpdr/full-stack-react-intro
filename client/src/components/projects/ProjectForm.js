import React from "react";

const ProjectForm = (props) => {
  function handleChange(event) {
    props.setProject({
      ...props.project,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    props.handleSubmit(props.project);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Title</label>
        <input
          type="text"
          className="form-control form-control-lg"
          id="projectTitleField"
          name="title"
          aria-describedby="emailHelp"
          onChange={handleChange}
          value={props.project.title}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Description</label>
        <textarea
          className="form-control form-control-lg"
          name="description"
          id="projectDescriptionField"
          onChange={handleChange}
          value={props.project.description}
        />
      </div>
      <button type="submit" className="btn btn-lg btn-primary">
        Save
      </button>
    </form>
  );
};

export default ProjectForm;
