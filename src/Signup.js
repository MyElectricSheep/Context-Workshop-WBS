import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import I18nContext from "./context/I18nContext";

const Signup = () => {

    const { t } = useContext(I18nContext);

    const notImplemented = () => {
        alert('We\'re sorry, this functionality is not implemented yet!')
    }

    return ( 
        <>
        <input type="text" placeholder={t.signup.email}/>
        <input type="text" placeholder={t.signup.password}/>
        <button onClick={notImplemented}>{t.signup.register}</button>
        <br/>
        <Link to="/signin">{t.signup.signin}</Link>
        </>
     );
}
 
export default Signup;