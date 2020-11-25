import React, { useContext, useState } from "react";
import CompanyContext from "./context/CompanyContext"
import I18nContext from "./context/I18nContext";
import Welcome from "./Welcome";

const Admin = () => {
  const [newCustomerValue, setNewCustomerValue] = useState('')
  const { companyInfo, setCompanyInfo } = useContext(CompanyContext)
  const { t } = useContext(I18nContext);
  return (
    <>
      <h3>{companyInfo.name}</h3>
      <br />
      <div>{t.admin.title}</div>
      <br />
      <Welcome />
      <br />
      <div>{t.admin.changeCustomers}</div>
      <input
        value={newCustomerValue}
        onChange={(e) => setNewCustomerValue(e.target.value)}
        placeholder="Daily customers"
        type="text"
      />
      <button
        onClick={(e) => {
          setCompanyInfo({ ...companyInfo, customers: newCustomerValue });
        }}
      >
        Save
      </button>
    </>
  );
};

export default Admin;
