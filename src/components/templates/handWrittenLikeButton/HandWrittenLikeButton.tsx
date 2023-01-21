import React from 'react'
import { ButtonTemplate } from '../ButtonTemplate'

const buttonStyle = {
    width: '150px',
    height: '100px',
    backgroundColor: 'white',
    borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
    borderStyle: 'solid',
    borderWidth: '5px',
    borderColor: 'gray',
    boxShadow: 'rgba(0, 0, 0, .2) 15px 28px 25px -18px',
    color: '#41403e',
    cursor: 'pointer',
    // fontFamily: 'Hannotate SC, Neucha, sans-serif',
    fontSize: '2rem',
    padding: '.75rem',
    '&:hover': {
        boxShadow: 'rgba(0, 0, 0, .3) 2px 8px 8px -5px',
        // transform: 'translate3d(0, 2px, 0)',
    },
    '&:active': {
        boxShadow: 'rgba(0, 0, 0, .3) 0px 0px 0px 0px',
        // transform: 'translate3d(0, 2px, 0)',
    },
}

export const HandWrittenLikeButton = () => {
    return <ButtonTemplate {...buttonStyle} />
}
