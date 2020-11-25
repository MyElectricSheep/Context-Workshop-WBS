import React from "react";
import { useContext } from "react";
import CompanyContext from './context/CompanyContext';
import I18nContext from "./context/I18nContext";

const Welcome = () => {
  const { companyInfo } = useContext(CompanyContext)

  return (
    <>
      <p>Welcome to {companyInfo.name}! {companyInfo.customers} customers served daily!</p>
    </>
  );
};

export default Welcome;
