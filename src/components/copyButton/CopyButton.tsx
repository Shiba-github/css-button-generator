import { CheckIcon, CopyIcon } from '@chakra-ui/icons'
import { Button, Flex, Tooltip } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useAppSelector } from '../../hooks'
import { defaultButtonCss } from '../codeArea/defaultButtonCss'
import { copyAnimeVariants } from './animation/copyAnimation'

export const CopyButton = () => {
    // TODO:codeArea, copybutton, buttonViewでデータはしているが、中身が同期しているかは不明。整合性の確認が必要
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
    const borderWidth = useAppSelector((state) => state.buttonView.borderWidth)
    const isDisplayBorderWidth =
        defaultButtonCss.borderWidth === 'ALWAYS' || defaultButtonCss.borderWidth !== borderWidth
    const borderRadius = useAppSelector((state) => state.buttonView.borderRadius)
    const isDisplayBorderRadius =
        defaultButtonCss.borderRadius === 'ALWAYS' || defaultButtonCss.borderRadius !== borderRadius

    const [isCopy, setIsCopy] = useState(false)
    const [showTooltip, setShowTooltip] = useState(false)

    const copyToClipboard = () => {
        const copyText =
            `.custom_button {\n` +
            `${isDisplayWidth ? `    width: ${width};\n` : ''}` +
            `${isDisplayHeight ? `    height: ${height};\n` : ''}` +
            `${isDisplayColor ? `    color: ${color};\n` : ''}` +
            `${isDisplayBackgroundColor ? `    background-color: ${backgroundColor};\n` : ''}` +
            `${isDisplayBorder ? `    border: ${border};\n` : ''}` +
            `${isDisplayPadding ? `    padding: ${padding};\n` : ''}` +
            `${isDisplayTextDecoration ? `    text-decoration: ${textDecoration};\n` : ''}` +
            `${isDisplayDisplay ? `    display: ${display};\n` : ''}` +
            `${isDisplayFontSize ? `    font-size: ${fontSize};\n` : ''}` +
            `${isDisplayBorderColor ? `    border-color: ${borderColor};\n` : ''}` +
            `${isDisplayBorderStyle ? `    border-style: ${borderStyle};\n` : ''}` +
            `${isDisplayBorderRadius ? `    border-radius: ${borderRadius}px;\n` : ''}` +
            `}`
        navigator.clipboard.writeText(copyText)
        setIsCopy(true)
        setTimeout(() => {
            setIsCopy(false)
        }, 2000)
    }

    return (
        <Flex
            as={motion.div}
            width={'2rem'}
            height={'2rem'}
            justifyContent={'center'}
            alignItems={'center'}
            borderRadius={'20%'}
            bg={'black'}
            initial={copyAnimeVariants.init}
            whileHover={isCopy ? copyAnimeVariants.whileHoverOut : copyAnimeVariants.whileHover}
            whileTap={copyAnimeVariants.whileTap}
            variants={copyAnimeVariants}
            animate={isCopy ? 'onClick' : ''}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            <Tooltip
                hasArrow
                bg="teal.500"
                color="white"
                placement="top"
                fontSize={'1rem'}
                isOpen={showTooltip}
                label={`${isCopy ? 'Copying Success!' : 'Copy'}`}
            >
                <Button
                    as={motion.button}
                    variants={copyAnimeVariants}
                    animate={isCopy ? 'onClick' : ''}
                    boxShadow={'none !important'}
                    padding={'none'}
                    _hover={{ backgroundColor: 'transparent' }}
                    onClick={copyToClipboard}
                >
                    {isCopy ? <CheckIcon color={'green.100'} bg={'none'} /> : <CopyIcon />}
                </Button>
            </Tooltip>
        </Flex>
    )
}
