import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useAppSelector } from '../../../hooks'
import { defaultButtonCss } from '../defaultButtonCss'

export const CssRenderingArea = () => {
    const width = useAppSelector((state) => state.buttonView.width)
    const isDisplayWidth = defaultButtonCss.width === 'ALWAYS' || defaultButtonCss.width !== width
    const height = useAppSelector((state) => state.buttonView.height)
    const isDisplayHeight = defaultButtonCss.height === 'ALWAYS' || defaultButtonCss.height !== height
    const color = useAppSelector((state) => state.buttonView.color)
    const isDisplayColor = defaultButtonCss.color === 'ALWAYS' || defaultButtonCss.color !== color
    const backgroundColor = useAppSelector((state) => state.buttonView.backgroundColor)
    const isDisplayBackgroundColor =
        defaultButtonCss.backgroundColor === 'ALWAYS' || defaultButtonCss.backgroundColor !== backgroundColor
    const border = useAppSelector((state) => state.buttonView.border)
    const isDisplayBorder = defaultButtonCss.border === 'ALWAYS' || defaultButtonCss.border !== border
    const padding = useAppSelector((state) => state.buttonView.padding)
    const isDisplayPadding = defaultButtonCss.padding === 'ALWAYS' || defaultButtonCss.padding !== padding
    const textDecoration = useAppSelector((state) => state.buttonView.textDecoration)
    const isDisplayTextDecoration =
        defaultButtonCss.textDecoration === 'ALWAYS' || defaultButtonCss.textDecoration !== textDecoration
    const display = useAppSelector((state) => state.buttonView.display)
    const isDisplayDisplay = defaultButtonCss.display === 'ALWAYS' || defaultButtonCss.display !== display
    const fontSize = useAppSelector((state) => state.buttonView.fontSize)
    const isDisplayFontSize = defaultButtonCss.fontSize === 'ALWAYS' || defaultButtonCss.fontSize !== fontSize
    const borderColor = useAppSelector((state) => state.buttonView.borderColor)
    const isDisplayBorderColor =
        defaultButtonCss.borderColor === 'ALWAYS' || defaultButtonCss.borderColor !== borderColor
    const borderStyle = useAppSelector((state) => state.buttonView.borderStyle)
    const isDisplayBorderStyle =
        defaultButtonCss.borderStyle === 'ALWAYS' || defaultButtonCss.borderStyle !== borderStyle
    const borderRadius = useAppSelector((state) => state.buttonView.borderRadius)
    const isDisplayBorderRadius =
        defaultButtonCss.borderRadius === 'ALWAYS' || defaultButtonCss.borderRadius !== borderRadius
    return (
        <Flex flexDirection={'column'} color={'black'} fontSize={'1.5rem'} margin={'1rem'}>
            <Text>.custom_button {'{'}</Text>
            {isDisplayWidth && <Text>&emsp;width: {width}</Text>}
            {isDisplayHeight && <Text>&emsp;height: {height}</Text>}
            {isDisplayColor && <Text>&emsp;color: {color}</Text>}
            {isDisplayBackgroundColor && <Text>&emsp;backgroundColor: {backgroundColor}</Text>}
            {isDisplayBorder && <Text>&emsp;border: {border}</Text>}
            {isDisplayPadding && <Text>&emsp;padding: {padding}</Text>}
            {isDisplayTextDecoration && <Text>&emsp;textDecoration: {textDecoration}</Text>}
            {isDisplayDisplay && <Text>&emsp;display: {display}</Text>}
            {isDisplayFontSize && <Text>&emsp;fontSize: {fontSize}</Text>}
            {isDisplayBorderColor && <Text>&emsp;borderColor: {borderColor}</Text>}
            {isDisplayBorderStyle && <Text>&emsp;borderStyle: {borderStyle}</Text>}
            {isDisplayBorderRadius && <Text>&emsp;borderRadius: {borderRadius}</Text>}
            <Text>{'}'}</Text>
        </Flex>
    )
}
