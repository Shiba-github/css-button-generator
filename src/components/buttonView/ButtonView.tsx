import { Flex } from '@chakra-ui/react'
import React from 'react'
import { useAppSelector } from '../../hooks'

export const ButtonView = () => {
    const color = useAppSelector((state) => state.buttonView.color)
    const backgroundColor = useAppSelector((state) => state.buttonView.backgroundColor)
    const border = useAppSelector((state) => state.buttonView.border)
    const padding = useAppSelector((state) => state.buttonView.padding)
    const textDecoration = useAppSelector((state) => state.buttonView.textDecoration)
    const display = useAppSelector((state) => state.buttonView.display)
    const fontSize = useAppSelector((state) => state.buttonView.fontSize)
    const borderColor = useAppSelector((state) => state.buttonView.borderColor)
    const borderStyle = useAppSelector((state) => state.buttonView.borderStyle)
    const borderRadius = useAppSelector((state) => state.buttonView.borderRadius)
    const width = useAppSelector((state) => state.buttonView.width)
    const height = useAppSelector((state) => state.buttonView.height)

    const buttonStyle = {
        color: color,
        backgroundColor: backgroundColor,
        border: border,
        padding: padding,
        textDecoration: textDecoration,
        display: display,
        fontSize: fontSize,
        borderColor: borderColor,
        borderStyle: borderStyle,
        borderRadius: borderRadius,
        width: width,
        height: height,
    }

    return (
        <Flex height={'29rem'} margin={'2rem 0'} alignItems={'center'} justifyContent={'center'}>
            <button style={buttonStyle}>Text</button>
        </Flex>
    )
}
