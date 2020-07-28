import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import projectApi from "../../apis/projects";

import ProjectForm from "./ProjectForm";

const AddProject = () => {
  const history = useHistory();
  const { id } = useParams();

  const [project, setProject] = useState({
    _id: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    (async function fetchProject() {
      const result = await projectApi.get(`/${id}`);

      setProject({ ...result.data[0] });
    })();
  }, []);

  async function handleSubmit(data) {
    try {
      // Colocando uma string em branco como URL, pois os dados que queremos inserir via POST sao sempre o segundo parametro do metodo "post" do Axios
      const result = await projectApi.put(`/${id}`, data);

      // Redirecionar de volta para lista de Projetos
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>Edit Project {project.title}</h1>
      <hr></hr>
      <ProjectForm
        handleSubmit={handleSubmit}
        project={project}
        setProject={setProject}
      />
    </div>
  );
};

export default AddProject;
