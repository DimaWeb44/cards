import React from 'react';
import { NavLink } from 'react-router-dom';
import {PATH} from "../routes/RoutesApp";
import styles from './Header.module.css';

export const Header = () => {
    return (
        <div className={styles.header}>
            <NavLink to={PATH.MAIN} >Main</NavLink>
            <NavLink to={PATH.SIGN_IN} >SignIn</NavLink>
            <NavLink to={PATH.SIGN_UP} >SignUp</NavLink>
            <NavLink to={PATH.RECOVER_PASSWORD} >RecoverPassword</NavLink>
            <NavLink to={PATH.NEW_PASSWORD} >NewPassword</NavLink>
            <NavLink to={PATH.PROFILE} >Profile</NavLink>
            <NavLink to={PATH.TEST} >TestPage</NavLink>
            <NavLink to={PATH.NOT_FOUND} >NotFound</NavLink>
        </div>
    );
}

