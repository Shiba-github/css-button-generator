import React from 'react'
import { ButtonTemplate } from '../ButtonTemplate'

const buttonStyle = {
    color: 'rgba(0,0,0,1)',
    backgroundColor: '#ffffff',
    border: 'none',
    padding: '60px',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '20px',
    borderRadius: '50px',
    // boxShadow: '26px 26px 51px #d9d9d9, -26px -26px 51px #ffffff',
}

export const TemplatesNeumorphism001 = () => {
    return <ButtonTemplate {...buttonStyle} />
}
