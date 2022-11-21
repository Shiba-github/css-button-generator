import React from 'react'
import { ButtonTemplate } from '../ButtonTemplate'

// TODO：コメントアウトしてるプロパティはストア側で未対応なので要実装
const buttonStyle = {
    width: '200px',
    height: '40px',
    backgroundColor: '#ededed',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#333',
    // boxShadow: '5px 5px 0px 0px rgba(51, 51, 51, 1)',
    color: '#333',
    fontSize: '18px',
    // fontWeight: 'bold',
    // transition: '0.2s',
    '&:hover': {
        backgroundColor: '#c4c4c4',
        // boxShadow: '3px 3px #333',
        color: '#fff',
    },
    '&:active': {
        backgroundColor: '#333',
        // boxShadow: '0 0 #333',
    },
}

export const FloatMonochromeButton = () => {
    return <ButtonTemplate {...buttonStyle} />
}
