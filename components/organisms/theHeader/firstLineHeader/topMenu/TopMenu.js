import React from "react";
import {topMenuData} from "./topMenuData";
import styles from './TopMenu.module.css'
import Link from "next/link";


const TopMenu = () => {
    return(
        <ul className={styles.menu}>
            {topMenuData.map(itemMenu => (
                <li key={itemMenu.id}>
                    <Link href={itemMenu.href}>
                        {itemMenu.name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default TopMenu