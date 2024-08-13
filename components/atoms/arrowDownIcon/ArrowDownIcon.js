import React from 'react';

const ArrowDownIcon = ({ width = 24, height = 24, color = '#000', className }) => (
    <svg
        viewBox="0 0 24 24"
        fill={color}
        width={width}
        height={height}
        className={`iconComponent ${className}`}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.46967 9.46717C6.76256 9.17427 7.23744 9.17427 7.53033 9.46717L12 13.9368L16.4697 9.46717C16.7626 9.17427 17.2374 9.17427 17.5303 9.46717C17.8232 9.76006 17.8232 10.2349 17.5303 10.5278L12.5303 15.5278C12.3897 15.6685 12.1989 15.7475 12 15.7475C11.8011 15.7475 11.6103 15.6685 11.4697 15.5278L6.46967 10.5278C6.17678 10.2349 6.17678 9.76006 6.46967 9.46717Z"
            fill={color}
        />
    </svg>
);

export default ArrowDownIcon;