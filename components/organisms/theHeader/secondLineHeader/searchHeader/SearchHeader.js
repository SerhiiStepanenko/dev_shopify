import Container from "../../../../templates/container/Container";
import React from "react";
import styles from "./SearchHeader.module.css";

const SearchHeader = () => {
    return(
        <Container className={styles.mainSearchContainer}>
            <Container className={styles.formContainer}>
                <form className={styles.formSearchInput}>
                    <input className={styles.searchInput} placeholder={'Пошук'}/>
                </form>
            </Container>
        </Container>
    )
}

export default SearchHeader