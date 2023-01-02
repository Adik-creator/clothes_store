import React from 'react';
import styles from './Register.module.scss'
import {Link} from "react-router-dom";

export const Register = () => {
    return (
        <div className={styles.register}>
            <Link to="/login">Login</Link>
        </div>
    );
};
