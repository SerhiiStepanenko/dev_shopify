import React from "react";
import Container from "../../../templates/container/Container";
import styles from './FirstLineHeader.module.css'
import FlexContainer from "../../../templates/flexContainer/FlexContainer";
import Logo from "./logo/Logo";
import TopMenu from "./topMenu/TopMenu";
import PhonesTrigger from "./phonesTrigger/PhonesTrigger";


const FirstLineHeader = () => {
    return(
        <Container className={styles.mainContainer}>
            <FlexContainer className={styles.flexContentContainer}>
                <Logo/>
                <TopMenu/>
                <FlexContainer>
                    <PhonesTrigger/>
                </FlexContainer>
            </FlexContainer>
        </Container>
    )
}

export default FirstLineHeader