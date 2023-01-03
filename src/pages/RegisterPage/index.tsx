import React from 'react';
import styles from './Register.module.scss'
import {Link} from "react-router-dom";
import {SignUp} from "../../components/SignUp";

export const RegisterPage = () => {
    return (
        <div className={styles.register}>
            <SignUp/>
            <Link to="/login">Login</Link>
        </div>
    );
};
