import React from "react";

const AuthForm = (props) => {
  function handleChange(event) {
    props.setUser({
      ...props.user,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    props.handleSubmit(props.user);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Username</label>
        <input
          type="text"
          className="form-control form-control-lg"
          id="authUsernameField"
          name="username"
          onChange={handleChange}
          value={props.user.username}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control form-control-lg"
          name="password"
          id="authPasswordField"
          onChange={handleChange}
          value={props.user.password}
        />
      </div>
      <button type="submit" className="btn btn-lg btn-primary">
        {props.buttonText}
      </button>
    </form>
  );
};

export default AuthForm;
