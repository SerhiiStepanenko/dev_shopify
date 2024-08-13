import Container from "../../../templates/container/Container";
import FlexContainer from "../../../templates/flexContainer/FlexContainer";
import CartIcon from "../../../atoms/cartIcon/СartIcon";
import React from "react";
import styles from './CartButtonHeader.module.css'

const CartButtonHeader = () => {
    return(
        <FlexContainer>
            <Container>
                <button className={styles.cartButton}>
                    <FlexContainer className={`jcc aic`}>
                        <CartIcon width={32}
                                  height={32}
                                  color="var(--color-icons)"/>
                    </FlexContainer>
                </button>
            </Container>
        </FlexContainer>
    )
}

export default CartButtonHeader