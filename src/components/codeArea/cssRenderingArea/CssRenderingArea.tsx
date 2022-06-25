import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useAppSelector } from '../../../hooks'

export const CssRenderingArea = () => {
    const color = useAppSelector((state) => state.buttonView.color)
    const backgroundColor = useAppSelector((state) => state.buttonView.backgroundColor)
    const border = useAppSelector((state) => state.buttonView.border)
    const padding = useAppSelector((state) => state.buttonView.padding)
    const textDecoration = useAppSelector((state) => state.buttonView.textDecoration)
    const display = useAppSelector((state) => state.buttonView.display)
    const fontSize = useAppSelector((state) => state.buttonView.fontSize)
    const borderColor = useAppSelector((state) => state.buttonView.borderColor)
    const isDisplayBorderColor = useAppSelector((state) => state.cssCustomArea.displayBorderColor)
    return (
        <Flex flexDirection={'column'} color={'black'} fontSize={'1.5rem'}>
            <Text>.custom_button {'{'}</Text>
            <Text>color: {color}</Text>
            <Text>background-color: {backgroundColor}</Text>
            <Text>border: {border}</Text>
            <Text>padding: {padding}</Text>
            <Text>text-decoration: {textDecoration}</Text>
            <Text>display: {display}</Text>
            <Text>font-size: {fontSize}</Text>
            {isDisplayBorderColor ? <Text>border-color: {borderColor}</Text> : ''}
            <Text>{'}'}</Text>
        </Flex>
    )
}
