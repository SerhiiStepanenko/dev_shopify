import Container from "../../../templates/container/Container";
import React from "react";
import styles from "./SecondLineHeader.module.css";
import FlexContainer from "../../../templates/flexContainer/FlexContainer";
import MainMenu from "./mainMenu/MainMenu";
import SearchHeader from "./searchHeader/SearchHeader";
import PersonButton from "../../../molecules/buttons/personButton/PersonButton";
import ComparisonButtonHeader from "../../../molecules/buttons/comparisonButtonHeader/ComparisonButtonHeader";
import WishlistButtonHeader from "../../../molecules/buttons/wishlistButtonHeader/WishlistButtonHeader";
import CartButtonHeader from "../../../molecules/buttons/cartButtonHeader/CartButtonHeader";

const SecondLineHeader = () => {
    return(
        <Container className={styles.mainContainer}>
            <FlexContainer className={styles.flexContentContainer}>
                <MainMenu/>
                <FlexContainer className={styles.headerControlsFlexContainer}>
                    <SearchHeader/>
                    <FlexContainer>
                        <PersonButton/>
                        <ComparisonButtonHeader/>
                        <WishlistButtonHeader/>
                        <CartButtonHeader/>
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
        </Container>
    )
}

export default SecondLineHeader