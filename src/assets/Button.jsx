import React from 'react'

function Button({ children, onClick, bgColor, w, s, p }) {
    return (
        <>
            <button
                className={`${bgColor}1 hover:${bgColor}2 text-white p-${p} rounded-full w-${w} size-${s}`}
                onClick={onClick}
            >
                {children}
            </button>
        </>
    )
}

export default Button