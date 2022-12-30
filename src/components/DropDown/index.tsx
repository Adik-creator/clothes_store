import React, {useState} from "react";
import styles from '../Header/header.module.scss'
import {AiOutlineClose} from 'react-icons/ai'


interface DropdownItemProps {
    items: {
        id: number;
        label: string;
        value: string;
        children: string[];
    }[];
    close: () => void
}

export const DropdownItem: React.FC<DropdownItemProps> = ({items, close}) => {

    const [open, setOpen] = useState<number>(0)

    const handleOpen = (id: number) => {
        setOpen(id)
    }

    return (
        <div className={styles.headerDropDown}>
            <ul>
                {
                    items.map((category, index: number) => (
                        <li
                            key={index}
                            onClick={() => handleOpen(category.id)}
                        >
                            {category.label}
                            {
                                open === category.id && (
                                    <ul>
                                        {category.children.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                )
                            }
                        </li>
                    ))
                }
            </ul>
            <span onClick={close}>
                <AiOutlineClose className={styles.closeMenu}/>
            </span>
        </div>
    )
}