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

    const buttonStyle = {
        color: color,
        backgroundColor: backgroundColor,
        border: border,
        padding: padding,
        textDecoration: textDecoration,
        display: display,
        fontSize: fontSize,
        borderColor: borderColor,
    }

    return (
        <Flex bg={'gray'}>
            <button style={buttonStyle}>Text</button>
        </Flex>
    )
}
