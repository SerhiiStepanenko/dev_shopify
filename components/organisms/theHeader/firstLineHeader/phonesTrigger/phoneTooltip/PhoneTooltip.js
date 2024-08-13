import Container from "../../../../../templates/container/Container";
import React from "react";
import styles from "./PhoneTooltip.module.css";
import formatPhoneNumber from "../../../../../../app/utils/formatPhoneNumber";
import FlexContainer from "../../../../../templates/flexContainer/FlexContainer";

const PhoneTooltip = ({sortedPhonesData, isTooltipVisible}) => {
    return(
        <Container className={`${styles.mainTooltipContainer} ${isTooltipVisible ? styles.visible : styles.hidden}`}>
            {sortedPhonesData.map(itemPhone => (
                <FlexContainer className={styles.itemFlexContainer}>
                    <FlexContainer className={styles.itemTextFlexContainer}>
                        <span className={styles.phoneItem}>{formatPhoneNumber(itemPhone.phone)}</span>
                        <span className={styles.text}>{itemPhone.description}</span>
                        <span className={styles.text}>{itemPhone.hours}</span>
                    </FlexContainer>
                </FlexContainer>
            ))}
        </Container>
    )
}

export default PhoneTooltip