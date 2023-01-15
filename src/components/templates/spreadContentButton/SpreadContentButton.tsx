import React from 'react'
import { ButtonTemplate } from '../ButtonTemplate'

// TODO：コメントアウトしてるプロパティはストア側で未対応なので要実装
const buttonStyle = {
    width: '160px',
    height: '60px',
    color: '#fff',
    backgroundColor: '#3399ff',
    borderStyle: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    fontSize: '16px',
    // fontWeight: '600',
    // textTransform: 'uppercase',
    cursor: 'pointer',
    // transform: 'skew(0)',
    '&::before': {
        // content: '""',
        // position: 'absolute',
        // top: '0',
        // bottom: '0',
        // right: '100%',
        // left: '100%',
        borderRadius: '4px',
        backgroundColor: '#1f5c99',
        // opacity: '0',
        // zIndex: '-1',
        // transition: 'all 0.3s',
    },
    '&:hover': {
        color: '#fff',
    },
    '&:hover::before': {
        // left: '0',
        // right: '0',
        // opacity: '1',
    },
}

export const SpreadContentButton = () => {
    return <ButtonTemplate {...buttonStyle} />
}
