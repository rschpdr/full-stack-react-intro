import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import authApi from "../../apis/auth";

const Logout = (props) => {
  const history = useHistory();

  useEffect(() => {
    (async function sendLogout() {
      try {
        await authApi.post("/logout");
        localStorage.removeItem("loggedInUser");
        props.setUser({});
        history.push("/login");
      } catch (err) {
        console.error(err);
      }
    })();
  }, [props]);

  return <div>Logging out...</div>;
};

export default Logout;
