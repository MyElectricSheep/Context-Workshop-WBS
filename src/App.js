import React, { useState, useEffect } from "react";
import Home from "./Home";
import About from "./About";
import Admin from "./Admin";
import Signin from "./Signin";
import Signup from "./Signup";
import Logout from "./Logout";
import ProtectedRoute from "./ProtectedRoute";
import { Link, Route, Switch } from "react-router-dom";
import CompanyContext from "./context/CompanyContext";
import AuthContext from "./context/AuthContext";
import I18nContext, { i18n } from "./context/I18nContext";
import LanguageSwitcher from "./LanguageSwitcher"
import Cookies from "js-cookie";

const App = () => {
  const [companyInfo, setCompanyInfo] = useState({
    name: "Bwok",
    customers: 500000,
  });

  const [userToken, setUserToken] = useState(null);
  const [i18nData, setI18nData] = useState(i18n['en'])

  useEffect(() => {
    const token = Cookies.get("bwok-token");
    if (token) setUserToken(token);
  }, []);

  return (
    <div>
      <ul>
        <li>
          <Link to="/">{i18nData.home.title}</Link>
        </li>
        <li>
          <Link to="/about">{i18nData.about.title}</Link>
        </li>
        <li>
          <Link to="/admin">{i18nData.admin.title}</Link>
        </li>
        <li>
          <Link to="/signin">{i18nData.signin.title}</Link>
        </li>
        <li>
          <Link to="/signup">{i18nData.signup.title}</Link>
        </li>
      </ul>
      <CompanyContext.Provider value={{ companyInfo, setCompanyInfo }}>
        <I18nContext.Provider value={{ t: i18nData, setI18nData }}>
          <AuthContext.Provider value={{ userToken, setUserToken }}>
            <Switch>
              <Route path="/about" component={About} />
              <ProtectedRoute path="/admin" component={Admin} />
              <Route path="/signin" component={Signin} />
              <Route path="/signup" component={Signup} />
              <Route exact path="/" component={Home} />
            </Switch>
             <Logout />
            <LanguageSwitcher />
          </AuthContext.Provider>
        </I18nContext.Provider>
      </CompanyContext.Provider>
    </div>
  );
};

export default App;
