import React from 'react'
import { ButtonTemplate } from '../ButtonTemplate'

// TODO：コメントアウトしてるプロパティはストア側で未対応なので要実装
const buttonStyle = {
    width: '230px',
    height: '70px',
    // boxShadow: '0 0 20px #eee',
    borderStyle: 'none',
    borderRadius: '10px',
    // backgroundSize: '200% auto',
    // backgroundImage: 'linear-gradient(to left, #f6d365 0%, #fda085 51%, #f6d365 100%)',
    color: '#fff',
    fontSize: '18px',
    // fontFamily: 'monospace',
    // letterSpacing: '3px',
    // transition: '0.5s',
    '&:hover': {
        // backgroundPosition: 'right center',
    },
}
export const OrangeGradationButton = () => {
    return <ButtonTemplate {...buttonStyle} />
}
