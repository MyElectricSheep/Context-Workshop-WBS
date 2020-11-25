import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie"
import AuthContext from "./context/AuthContext";
import I18nContext from "./context/I18nContext";

const Logout = () => {
  const history = useHistory()
  const { setUserToken } = useContext(AuthContext)

  const { t } = useContext(I18nContext);

  const handleLogout = () => {
    Cookies.remove(`bwok-token`);
    setUserToken(null);
    history.push('/');
  }

  return (
    <>
      <br />
      <button
        style={{ marginTop: "2em" }}
        onClick={handleLogout}
      >
        {t.logout.button}
      </button>
    </>
  );
};

export default Logout;
