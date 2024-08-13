import FlexContainer from "../../../templates/flexContainer/FlexContainer";
import PersonIcon from "../../../atoms/personIcon/PersonIcon";
import React from "react";
import styles from './PersonButton.module.css'

const PersonButton = () => {
    return(
        <button className={styles.personButton}>
            <FlexContainer className={`jcc aic`}>
                <PersonIcon width={32}
                            height={32}
                            color="var(--color-icons)"/>
            </FlexContainer>
            <span>Увійти</span>
        </button>
    )
}

export default PersonButton