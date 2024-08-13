import React from "react";

const MainMenuIcon = ({ width = 24, height = 24, color = '#000', className }) => {
    return (
        <svg
            viewBox="0 0 32 32"
            fill={color}
            width={width}
            height={height}
            className={`iconComponent ${className}`}
        >
            <path fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 9a1 1 0 0 1 1-1h24a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 7a1 1 0 0 1 1-1h24a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm1 6a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2H4Z"
                  fill={color}
            />
        </svg>
    )
}

export default MainMenuIcon