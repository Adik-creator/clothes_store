import React from "react";
import { Navigate } from "react-router-dom";
import {useAppDispatch} from "../../hooks/react-redux-hook";


import {useAuth} from '../../hooks/use-auth'
import { Header } from "../../components/Header";
import {removeUser} from "../../redux/slices/userSlice";
import styles from "./Home.module.scss";

export const Home: React.FC = () => {

    const {isAuth, email} = useAuth()
    const dispatch = useAppDispatch()
    return isAuth ? (
        <div className={styles.home}>
            <Header />
            <button
                onClick={() => dispatch(removeUser())}
            >
                log out {email}
            </button>
        </div>
    ) : (
        <Navigate to={"/login"}/>
    )
};
