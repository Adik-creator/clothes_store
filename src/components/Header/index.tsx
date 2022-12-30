import React from 'react';
import styles from "./header.module.scss";
import uniqlo from "../../assets/images/uniqlo.png"
import {FiSearch, FiUser} from 'react-icons/fi'
import {AiOutlineHeart} from 'react-icons/ai'
import {CgShoppingCart} from 'react-icons/cg'
// import {RxHamburgerMenu} from 'react-icons/rx'
import {DropdownItem} from "../DropDown";
import {data} from "../../utils/data.ts";
import {Link} from "react-router-dom";

export const Header: React.FC = () => {

    const [currentState, setCurrentState] = React.useState<string | null>(null)

    const close = () => {
        setCurrentState(null)
    }

    return (
        <header className={styles.header}>
            <div className={styles.headerRight}>

                <div className={styles.headerLogo}>
                    <img src={uniqlo} alt="logo"/>
                </div>

                <ul className={styles.headerCategories}>
                    {data.map((each) => (
                        <li
                            onMouseEnter={() => setCurrentState(each.value)}
                            onMouseLeave={close}
                        >
                            {each.label}
                            {currentState === each.value && (
                                <DropdownItem items={each.children} close={close}/>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.headerLeft}>
                <ul className={styles.headerIcons}>
                    <li><FiSearch className={styles.icons}/><span>Search</span></li>
                    <li><AiOutlineHeart className={styles.icons}/><span>Wishlist</span></li>
                    <li><CgShoppingCart className={styles.icons}/><span>Cart</span></li>
                    <Link to="/login">
                        <li>
                            <FiUser className={styles.icons}/>
                            <span>Log in</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </header>
    );
};