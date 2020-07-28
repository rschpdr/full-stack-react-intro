import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import authApi from "../../apis/auth";

import { AuthContext } from "../../contexts/auth";

import AuthForm from "./AuthForm";

const Login = (props) => {
  const history = useHistory();

  const authContext = useContext(AuthContext);

  const [user, setUser] = useState({ username: "", password: "" });

  async function handleSubmit(data) {
    try {
      // Colocando uma string em branco como URL, pois os dados que queremos inserir via POST sao sempre o segundo parametro do metodo "post" do Axios
      const result = await authApi.post("/login", data);

      authContext.setLoggedInUser({ ...result.data });

      localStorage.setItem("loggedInUser", JSON.stringify({ ...result.data }));
      // Redirecionar de volta para lista de Projetos
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <hr></hr>
      <AuthForm
        handleSubmit={handleSubmit}
        setUser={setUser}
        user={user}
        buttonText="Login"
      />
    </div>
  );
};

export default Login;
