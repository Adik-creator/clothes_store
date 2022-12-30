import React from 'react';
import uniqlo from '../../assets/images/uniqlo.png'
import styles from './Login.module.scss'
import {Link} from "react-router-dom";

export const Login: React.FC = () => {
    return (
        <div className={styles.login}>
            <div className={styles.loginHeader}>
                <div className={styles.wrapper}>
                    <Link to="/">
                        <img src={uniqlo} alt="logo"/>
                    </Link>
                </div>
            </div>
        </div>
    );
};
