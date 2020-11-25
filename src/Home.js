import React, { useContext } from "react";
import Welcome from "./Welcome";
import I18nContext from "./context/I18nContext";

const Home = () => {
  const { t } = useContext(I18nContext);
  return (
    <>
      <div>{t.home.title}</div>
      <br />
      <Welcome />
      <br />
    </>
  );
};

export default Home;
