import React, { useContext, useState } from "react";
import I18nContext, { i18n } from "./context/I18nContext";

const LanguageSwitcher = () => {
  const { t, setI18nData } = useContext(I18nContext);
  const [english, setEnglish] = useState(true);
  return (
    <>
    <div style={{paddingTop: '2em'}}>{t.language.current}: {english ? "English" : "German"}.</div>
      <button
        onClick={() => {
          english ? setI18nData(i18n["de"]) : setI18nData(i18n["en"]);
          setEnglish(!english);
        }}
      >
         {t.language.change}
      </button>
    </>
  );
};

export default LanguageSwitcher;
