import React from 'react';
import styles from './FlexContainer.module.css';

const FlexContainer = ({ children, className, ...props }) => {
    return (
        <div className={`${styles.flexContainer} ${className}`} {...props}>
            {children}
        </div>
    );
};

export default FlexContainer;