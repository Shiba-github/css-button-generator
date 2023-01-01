import React from 'react'
import { ButtonTemplate } from '../ButtonTemplate'

// TODO：コメントアウトしてるプロパティはストア側で未対応なので要実装
const buttonStyle = {
    width: '140px',
    height: '60px',
    backgroundColor: '#000',
    borderWidth: '4px',
    borderStyle: 'solid',
    // borderImage: 'linear-gradient(140deg, rgba(2,0,36,1) 0%, rgba(9,9,120,1) 35%, rgba(0,211,255,1) 100%)',
    // borderImageSlice: '1',
    color: '#fff',
    fontSize: '14px',
    // letterSpacing: '2px',
    '&:hover': {
        // backgroundImage: 'linear-gradient(140deg, rgba(2,0,36,1) 0%, rgba(9,9,120,1) 35%, rgba(0,211,255,1) 100%)',
    },
    '&:active': {
        transform: 'scale(0.95)',
    },
}

export const BorderGradientButton = () => {
    return <ButtonTemplate {...buttonStyle} />
}
