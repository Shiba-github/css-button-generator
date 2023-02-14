import React from 'react'
import { ButtonTemplate } from '../ButtonTemplate'

// TODO：コメントアウトしてるプロパティはストア側で未対応なので要実装
const buttonStyle = {
    width: '160px',
    height: '60px',
    color: '#fff',
    cursor: 'pointer',
    borderStyle: 'none',
    borderRadius: '10px',
    backgroundColor: 'rgb(108, 235, 142)',
    // backfaceVisibility: 'hidden',
    // boxShadow: '0px 10px 20px rgba(108, 235, 142, 0.8)',
    fontSize: '16px',
    // fontWeight: 'bold',
    transition:
        '1s 0.4s, width linear 1s 0.2s, height 0.5s, ease-out 2s 0.8s border-radius, background-color 0.8s 2s, 8s font-size',
    // transition: 'all 0.3s cubic-bezier(0.85, 1.95, 0.45, 0.4) 0s',
    '&:hover': {
        // transform: 'scale(1.08)',
        // boxShadow: '8px 14px 20px rgba(108, 235, 142, 0.8)',
        width: '1000px',
        height: '200px',
        borderRadius: '36px',
        backgroundColor: 'red',
        color: 'green',
    },
    '&:active': {
        backgroundColor: 'rgba(105, 227, 142, 0.8)',
    },
}
export const RealShadowButton = () => {
    return <ButtonTemplate {...buttonStyle} />
}
