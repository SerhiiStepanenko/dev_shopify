import FlexContainer from "../../../templates/flexContainer/FlexContainer";
import ComparisonIcon from "../../../atoms/comparisonIcon/ComparisonIcon";
import Link from "next/link";
import React from "react";
import styles from './ComparisonButtonHeader.module.css'

const ComparisonButtonHeader = () => {
    return(
        <Link href={'/comparison'}>
            <button className={styles.comparisonButton}>
                <FlexContainer className={`jcc aic`}>
                    <ComparisonIcon width={32}
                                    height={32}
                                    color="var(--color-icons)"/>
                </FlexContainer>
            </button>
        </Link>
    )
}

export default ComparisonButtonHeader