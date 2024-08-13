"use client";

import React, {useState} from "react";
import Container from "../../../../templates/container/Container";
import FlexContainer from "../../../../templates/flexContainer/FlexContainer";
import {phonesData} from './phonesData'
import ArrowDownIcon from "../../../../atoms/arrowDownIcon/ArrowDownIcon";
import styles from "./PhonesTrigger.module.css";
import formatPhoneNumber from "../../../../../app/utils/formatPhoneNumber";
import PhoneTooltip from "./phoneTooltip/PhoneTooltip";


const PhonesTrigger = () => {
    const sortedPhonesData = phonesData.sort((a, b) => a.order - b.order);

    const [isTooltipVisible, setTooltipVisible] = useState(false);

    const handleMouseEnter = () => {
        setTooltipVisible(true);
    };

    const handleMouseLeave = () => {
        setTooltipVisible(false);
    }

    return(
        <Container className={styles.phoneMainContainer}
                   onMouseEnter={handleMouseEnter}
                   onMouseLeave={handleMouseLeave}>
            <FlexContainer className={styles.phoneFlexContainer}>
                <span className={styles.phoneMain}>{formatPhoneNumber(sortedPhonesData[0].phone)}</span>
                <Container className={styles.iconContainer}>
                    <ArrowDownIcon width={18} height={18} color="var(--color-icons)"/>
                </Container>
            </FlexContainer>
            <PhoneTooltip sortedPhonesData={sortedPhonesData} isTooltipVisible={isTooltipVisible}/>
        </Container>
    )
}

export default PhonesTrigger