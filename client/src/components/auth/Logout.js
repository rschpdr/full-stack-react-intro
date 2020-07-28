import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import authApi from "../../apis/auth";

import { AuthContext } from "../../contexts/auth";

const Logout = () => {
  const history = useHistory();

  const authContext = useContext(AuthContext);

  useEffect(() => {
    (async function sendLogout() {
      try {
        await authApi.post("/logout");
        localStorage.removeItem("loggedInUser");
        authContext.setLoggedInUser({});
        history.push("/login");
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return <div>Logging out...</div>;
};

export default Logout;
