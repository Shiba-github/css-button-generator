import React from 'react'
import { ButtonTemplate } from '../ButtonTemplate'

const buttonStyle = {
    width: '250px',
    height: '60px',
    color: '#fff',
    cursor: 'pointer',
    borderColor: 'white',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '8px',
    backgroundColor: '#0066ff',
    fontSize: '24px',
    // letterSpacing: '2px',
    // position: 'relative',
    // overflow: 'hidden',
    '&:hover': {
        backgroundColor: '#1a76ff',
    },
    '&:active': {
        // scale: '1.02',
    },
    '&::before': {
        // content: '""',
        // position: 'absolute',
        padding: '30px 80px',
        // bottom: '-62px',
        // right: '-100px',
        backgroundColor: '#333',
        // transition: 'all .2s ease-in',
    },
    '&:hover::before': {
        // bottom: '-40px',
        // right: '-60px',
        // transform: 'rotate(-45deg)',
    },
    '&::after': {
        // content: '"→"',
        // position: 'absolute',
        // bottom: '-62px',
        // right: '-100px',
        // transition: 'all .2s ease-in',
    },
    '&:hover::after': {
        // bottom: '0px',
        // right: '3px',
    },
}

export const AppearanceArrowButton = () => {
    return <ButtonTemplate {...buttonStyle} />
}
