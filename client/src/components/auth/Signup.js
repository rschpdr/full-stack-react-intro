import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import authApi from "../../apis/auth";

import AuthForm from "./AuthForm";

const Signup = () => {
  const history = useHistory();

  const [user, setUser] = useState({ username: "", password: "" });

  async function handleSubmit(data) {
    try {
      // Colocando uma string em branco como URL, pois os dados que queremos inserir via POST sao sempre o segundo parametro do metodo "post" do Axios
      const result = await authApi.post("/signup", data);

      // Redirecionar de volta para lista de Projetos
      history.push("/login");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>Signup</h1>
      <hr></hr>
      <AuthForm
        handleSubmit={handleSubmit}
        setUser={setUser}
        user={user}
        buttonText="Sign up"
      />
    </div>
  );
};

export default Signup;
