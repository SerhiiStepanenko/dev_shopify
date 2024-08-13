import FlexContainer from "../../../templates/flexContainer/FlexContainer";
import WishlistIcon from "../../../atoms/wishlistIcon/WishlistIcon";
import Link from "next/link";
import React from "react";
import styles from './WishlistButtonHeader.module.css'

const WishlistButtonHeader = () => {
    return(
        <Link href={'/wishlist'}>
            <button className={styles.wishlistButton}>
                <FlexContainer className={`jcc aic`}>
                    <WishlistIcon width={32}
                                  height={32}
                                  color="var(--color-icons)"/>
                </FlexContainer>
            </button>
        </Link>
    )
}

export default WishlistButtonHeader