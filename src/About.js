import React, { useContext } from "react";
import I18nContext from "./context/I18nContext";

const About = () => {
  const { t } = useContext(I18nContext);
  return (
    <>
      <div>{t.about.title}</div>
    </>
  );
};

export default About;
