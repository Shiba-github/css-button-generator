import React from 'react'
import { ButtonTemplate } from '../ButtonTemplate'

// TODO：コメントアウトしてるプロパティはストア側で未対応なので要実装
const buttonStyle = {
    width: '180px',
    height: '60px',
    color: '#808080',
    fontSize: '14px',
    // fontFamily: 'monospace',
    // letterSpacing: '4px',
    borderStyle: 'none',
    borderRadius: '10px',
    backgroundColor: '#F0F0F3',
    // boxShadow: '-12px 12px 22px #AEAEC0, 12px -12px 22px #ffffff',
    '&:active': {
        color: '#000',
        // boxShadow: 'inset -12px 12px 22px #AEAEC0, inset 12px -12px 22px #ffffff',
    },
}
export const PushNeumorphismButton = () => {
    return <ButtonTemplate {...buttonStyle} />
}
