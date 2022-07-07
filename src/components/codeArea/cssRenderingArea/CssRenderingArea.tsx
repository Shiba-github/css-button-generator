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
    const borderStyle = useAppSelector((state) => state.buttonView.borderStyle)
    const isDisplayBorderStyle = useAppSelector((state) => state.cssCustomArea.displayBorderStyle)
    const borderRadius = useAppSelector((state) => state.buttonView.borderRadius)
    const isDisplayBorderRadius = useAppSelector((state) => state.cssCustomArea.displayBorderRadius)
    return (
        <Flex flexDirection={'column'} color={'black'} fontSize={'1.5rem'} margin={'1rem'}>
            <Text>.custom_button {'{'}</Text>
            <Text>&emsp;color: {color}</Text>
            <Text>&emsp;background-color: {backgroundColor}</Text>
            <Text>&emsp;border: {border}</Text>
            <Text>&emsp;padding: {padding}</Text>
            <Text>&emsp;text-decoration: {textDecoration}</Text>
            <Text>&emsp;display: {display}</Text>
            <Text>&emsp;font-size: {fontSize}</Text>
            {isDisplayBorderColor ? <Text>&emsp;border-color: {borderColor}</Text> : ''}
            {isDisplayBorderStyle ? <Text>&emsp;border-style: {borderStyle}</Text> : ''}
            {isDisplayBorderRadius ? <Text>&emsp;border-radius: {borderRadius}</Text> : ''}
            <Text>{'}'}</Text>
        </Flex>
    )
}
