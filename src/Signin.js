import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios'
import Cookies from "js-cookie"
import AuthContext from "./context/AuthContext";
import I18nContext from "./context/I18nContext";

const Signin = () => {

  const history = useHistory()
  const { setUserToken } = useContext(AuthContext)

  const [loginInfo, setLoginInfo] = useState({
    login: "", password: ""
  })

  const { t } = useContext(I18nContext);

  const handleChange = e => {
    setLoginInfo(prevLoginInfo => ({
      ...prevLoginInfo,
      [e.target.name]: e.target.value
    }))
  }

  const login = async (credentials) => {
    const { login: username, password } = credentials
    try {
      const data = await axios.post('https://wbs-simple-auth.herokuapp.com/auth/login', {
        username,
        password
      })
      const token = data.headers['x-authorization-token'];
      if (token) {
          console.log({token})
          Cookies.set(`bwok-token`, token);
          setUserToken(token)
          history.push('/admin')
      }
    } catch (e) {
      Cookies.remove(`bwok-token`);
      console.log(e.message)
    }
  }
 

  return (
    <>
      <input
        value={loginInfo.login}
        type="text"
        name="login"
        placeholder={t.signin.login}
        onChange={handleChange}
      />
      <input
        value={loginInfo.password}
        type="text"
        name="password"
        placeholder={t.signin.password}
        onChange={handleChange}
      />
      <button onClick={() => login(loginInfo)}>{t.signin.login}</button>
      <br />
      <Link to="/signup">{t.signin.signup}</Link>
    </>
  );
};

export default Signin;
