import Container from "../../../../templates/container/Container";
import React from "react";
import styles from "./MainMenu.module.css";
import MainMenuIcon from "../../../../atoms/mainMenuIcon/MainMenuIcon";

const MainMenu = () => {
    return(
        <Container>
            <Container className={styles.mr8}>
                <button className={styles.catalogButton}>
                    <MainMenuIcon width={32}
                                  height={32}
                                  color="var(--color-icons)"
                                  className={styles.catalogIcon}/>
                    <span className={styles.textButton}>Каталог</span>
                </button>
            </Container>
            <nav></nav>
        </Container>
    )
}

export default MainMenu