import { AddIcon } from '@chakra-ui/icons'
import { Flex, Button, Box, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { setBorderStyle } from '../../buttonView/buttonViewSlice'
import { addCssButtonAnimeVariants } from '../animation/addCssButton'
import { rotateElementVariants } from '../animation/rotateElement'

export const EditBorderStyle = () => {
    // TODO:Animationはスーパーてきとー
    const dispatch = useAppDispatch()
    const borderStyle = useAppSelector((state) => state.buttonView.borderStyle)
    const displayBorderStyle = useAppSelector((state) => state.cssCustomArea.displayBorderStyle)
    const [isDisplayDetail, setIsDisplayDetail] = useState(false)
    const confirmClickedBorderStyleButton = (_borderStyle: string, position: string) => {
        const borderStyleList = borderStyle.split(' ')
        if (borderStyleList.length === 1) {
            return false
        } else {
            if (position === 'top' && borderStyleList[0] === _borderStyle) {
                return true
            } else if (position === 'right' && borderStyleList[1] === _borderStyle) {
                return true
            } else if (position === 'bottom' && borderStyleList[2] === _borderStyle) {
                return true
            } else if (position === 'left' && borderStyleList[3] === _borderStyle) {
                return true
            } else {
                return false
            }
        }
    }

    const updateBorderStyle = (_borderStyle: string, position: string) => {
        const borderStyleList = borderStyle.split(' ')
        if (borderStyleList.length === 1) {
            if (position === 'top') {
                dispatch(setBorderStyle(`${_borderStyle} ${borderStyle} ${borderStyle} ${borderStyle}`))
            } else if (position === 'right') {
                dispatch(setBorderStyle(`${borderStyle} ${_borderStyle} ${borderStyle} ${borderStyle}`))
            } else if (position === 'bottom') {
                dispatch(setBorderStyle(`${borderStyle} ${borderStyle} ${_borderStyle} ${borderStyle}`))
            } else if (position === 'left') {
                dispatch(setBorderStyle(`${borderStyle} ${borderStyle} ${borderStyle} ${_borderStyle}`))
            }
        } else {
            if (position === 'top') {
                borderStyleList[0] = _borderStyle
                const borderStyleStrings = borderStyleList.join(' ')
                dispatch(setBorderStyle(borderStyleStrings))
            } else if (position === 'right') {
                borderStyleList[1] = _borderStyle
                const borderStyleStrings = borderStyleList.join(' ')
                dispatch(setBorderStyle(borderStyleStrings))
            } else if (position === 'bottom') {
                borderStyleList[2] = _borderStyle
                const borderStyleStrings = borderStyleList.join(' ')
                dispatch(setBorderStyle(borderStyleStrings))
            } else if (position === 'left') {
                borderStyleList[3] = _borderStyle
                const borderStyleStrings = borderStyleList.join(' ')
                dispatch(setBorderStyle(borderStyleStrings))
            }
        }
    }

    return (
        <Flex>
            {displayBorderStyle ? (
                <Flex flexDirection={'column'} backgroundColor={'gray.50'} borderRadius={'1rem'} marginTop={'1rem'}>
                    <Flex
                        flexDirection={'row'}
                        alignItems={'center'}
                        marginTop={'0.5rem'}
                        marginBottom={'0.8rem'}
                        width={'50rem'}
                        borderColor={'gray.200'}
                    >
                        <Text
                            width={'8rem'}
                            color={'black'}
                            justifyContent={'start'}
                            fontSize={'1.2rem'}
                            marginLeft={'1rem'}
                            marginRight={'1rem'}
                        >
                            Border Style
                        </Text>
                        <Flex flexDirection={'column'} width={'40rem'} alignItems={'flex-end'}>
                            <Flex flexDirection={'row'} justifyContent={'space-between'}>
                                <Button
                                    onClick={() => dispatch(setBorderStyle('none'))}
                                    fontSize={'1.2rem'}
                                    margin={'0.1rem'}
                                    height={'2rem'}
                                    bg={borderStyle === 'none' ? 'teal' : 'gray'}
                                >
                                    none
                                </Button>
                                <Button
                                    onClick={() => dispatch(setBorderStyle('hidden'))}
                                    fontSize={'1.2rem'}
                                    margin={'0.1rem'}
                                    height={'2rem'}
                                    bg={borderStyle === 'hidden' ? 'teal' : 'gray'}
                                >
                                    hidden
                                </Button>
                                <Button
                                    onClick={() => dispatch(setBorderStyle('dotted'))}
                                    fontSize={'1.2rem'}
                                    margin={'0.1rem'}
                                    height={'2rem'}
                                    bg={borderStyle === 'dotted' ? 'teal' : 'gray'}
                                >
                                    dotted
                                </Button>
                                <Button
                                    onClick={() => dispatch(setBorderStyle('dashed'))}
                                    fontSize={'1.2rem'}
                                    margin={'0.1rem'}
                                    height={'2rem'}
                                    bg={borderStyle === 'dashed' ? 'teal' : 'gray'}
                                >
                                    dashed
                                </Button>
                                <Button
                                    onClick={() => dispatch(setBorderStyle('solid'))}
                                    fontSize={'1.2rem'}
                                    margin={'0.1rem'}
                                    height={'2rem'}
                                    bg={borderStyle === 'solid' ? 'teal' : 'gray'}
                                >
                                    solid
                                </Button>
                            </Flex>
                            <Flex flexDirection={'row'} justifyContent={'space-between'}>
                                <Button
                                    onClick={() => dispatch(setBorderStyle('double'))}
                                    fontSize={'1.2rem'}
                                    margin={'0.1rem'}
                                    height={'2rem'}
                                    bg={borderStyle === 'double' ? 'teal' : 'gray'}
                                >
                                    double
                                </Button>
                                <Button
                                    onClick={() => dispatch(setBorderStyle('groove'))}
                                    fontSize={'1.2rem'}
                                    margin={'0.1rem'}
                                    height={'2rem'}
                                    bg={borderStyle === 'groove' ? 'teal' : 'gray'}
                                >
                                    groove
                                </Button>
                                <Button
                                    onClick={() => dispatch(setBorderStyle('ridge'))}
                                    fontSize={'1.2rem'}
                                    margin={'0.1rem'}
                                    height={'2rem'}
                                    bg={borderStyle === 'ridge' ? 'teal' : 'gray'}
                                >
                                    ridge
                                </Button>
                                <Button
                                    onClick={() => dispatch(setBorderStyle('inset'))}
                                    fontSize={'1.2rem'}
                                    margin={'0.1rem'}
                                    height={'2rem'}
                                    bg={borderStyle === 'inset' ? 'teal' : 'gray'}
                                >
                                    inset
                                </Button>
                                <Button
                                    onClick={() => dispatch(setBorderStyle('outset'))}
                                    fontSize={'1.2rem'}
                                    margin={'0.1rem'}
                                    height={'2rem'}
                                    bg={borderStyle === 'outset' ? 'teal' : 'gray'}
                                >
                                    outset
                                </Button>
                            </Flex>
                        </Flex>
                        <Button
                            as={motion.button}
                            marginLeft={'2rem'}
                            marginRight={'1rem'}
                            width={'2rem'}
                            height={'2rem'}
                            variants={addCssButtonAnimeVariants}
                            initial={addCssButtonAnimeVariants.off}
                            whileHover={addCssButtonAnimeVariants.on}
                            animate={isDisplayDetail ? addCssButtonAnimeVariants.on : addCssButtonAnimeVariants.off}
                            onClick={() => setIsDisplayDetail(!isDisplayDetail)}
                        >
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'center'}
                                as={motion.div}
                                initial={rotateElementVariants.off}
                                animate={isDisplayDetail ? rotateElementVariants.on : rotateElementVariants.off}
                                whileHover={rotateElementVariants.on}
                            >
                                <AddIcon />
                            </Box>
                        </Button>
                    </Flex>
                    {isDisplayDetail ? (
                        <Flex flexDirection={'column'} margin={'0.5rem 1rem'}>
                            <Flex flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                <Text color={'black'} marginRight={'1rem'}>
                                    Border Style Top
                                </Text>
                                <Flex flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('none', 'top')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('none', 'top') ? 'teal' : 'gray'}
                                    >
                                        none
                                    </Button>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('hidden', 'top')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('hidden', 'top') ? 'teal' : 'gray'}
                                    >
                                        hidden
                                    </Button>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('dotted', 'top')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('dotted', 'top') ? 'teal' : 'gray'}
                                    >
                                        dotted
                                    </Button>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('dashed', 'top')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('dashed', 'top') ? 'teal' : 'gray'}
                                    >
                                        dashed
                                    </Button>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('solid', 'top')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('solid', 'top') ? 'teal' : 'gray'}
                                    >
                                        solid
                                    </Button>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('double', 'top')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('double', 'top') ? 'teal' : 'gray'}
                                    >
                                        double
                                    </Button>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('groove', 'top')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('groove', 'top') ? 'teal' : 'gray'}
                                    >
                                        groove
                                    </Button>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('ridge', 'top')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('ridge', 'top') ? 'teal' : 'gray'}
                                    >
                                        ridge
                                    </Button>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('inset', 'top')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('inset', 'top') ? 'teal' : 'gray'}
                                    >
                                        inset
                                    </Button>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('outset', 'top')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('outset', 'top') ? 'teal' : 'gray'}
                                    >
                                        outset
                                    </Button>
                                </Flex>
                            </Flex>
                            <Flex flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                <Text color={'black'} marginRight={'1rem'}>
                                    Border Style Bottom
                                </Text>
                                <Flex flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('none', 'bottom')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('none', 'bottom') ? 'teal' : 'gray'}
                                    >
                                        none
                                    </Button>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('hidden', 'bottom')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('hidden', 'bottom') ? 'teal' : 'gray'}
                                    >
                                        hidden
                                    </Button>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('dotted', 'bottom')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('dotted', 'bottom') ? 'teal' : 'gray'}
                                    >
                                        dotted
                                    </Button>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('dashed', 'bottom')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('dashed', 'bottom') ? 'teal' : 'gray'}
                                    >
                                        dashed
                                    </Button>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('solid', 'bottom')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('solid', 'bottom') ? 'teal' : 'gray'}
                                    >
                                        solid
                                    </Button>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('double', 'bottom')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('double', 'bottom') ? 'teal' : 'gray'}
                                    >
                                        double
                                    </Button>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('groove', 'bottom')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('groove', 'bottom') ? 'teal' : 'gray'}
                                    >
                                        groove
                                    </Button>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('ridge', 'bottom')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('ridge', 'bottom') ? 'teal' : 'gray'}
                                    >
                                        ridge
                                    </Button>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('inset', 'bottom')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('inset', 'bottom') ? 'teal' : 'gray'}
                                    >
                                        inset
                                    </Button>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('outset', 'bottom')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('outset', 'bottom') ? 'teal' : 'gray'}
                                    >
                                        outset
                                    </Button>
                                </Flex>
                            </Flex>
                            <Flex flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                <Text color={'black'} marginRight={'1rem'}>
                                    Border Style Right
                                </Text>
                                <Flex flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('none', 'right')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('none', 'right') ? 'teal' : 'gray'}
                                    >
                                        none
                                    </Button>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('hidden', 'right')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('hidden', 'right') ? 'teal' : 'gray'}
                                    >
                                        hidden
                                    </Button>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('dotted', 'right')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('dotted', 'right') ? 'teal' : 'gray'}
                                    >
                                        dotted
                                    </Button>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('dashed', 'right')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('dashed', 'right') ? 'teal' : 'gray'}
                                    >
                                        dashed
                                    </Button>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('solid', 'right')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('solid', 'right') ? 'teal' : 'gray'}
                                    >
                                        solid
                                    </Button>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('double', 'right')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('double', 'right') ? 'teal' : 'gray'}
                                    >
                                        double
                                    </Button>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('groove', 'right')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('groove', 'right') ? 'teal' : 'gray'}
                                    >
                                        groove
                                    </Button>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('ridge', 'right')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('ridge', 'right') ? 'teal' : 'gray'}
                                    >
                                        ridge
                                    </Button>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('inset', 'right')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('inset', 'right') ? 'teal' : 'gray'}
                                    >
                                        inset
                                    </Button>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('outset', 'right')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('outset', 'right') ? 'teal' : 'gray'}
                                    >
                                        outset
                                    </Button>
                                </Flex>
                            </Flex>
                            <Flex flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                <Text color={'black'} marginRight={'1rem'}>
                                    Border Style Left
                                </Text>
                                <Flex flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('none', 'left')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('none', 'left') ? 'teal' : 'gray'}
                                    >
                                        none
                                    </Button>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('hidden', 'left')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('hidden', 'left') ? 'teal' : 'gray'}
                                    >
                                        hidden
                                    </Button>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('dotted', 'left')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('dotted', 'left') ? 'teal' : 'gray'}
                                    >
                                        dotted
                                    </Button>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('dashed', 'left')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('dashed', 'left') ? 'teal' : 'gray'}
                                    >
                                        dashed
                                    </Button>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('solid', 'left')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('solid', 'left') ? 'teal' : 'gray'}
                                    >
                                        solid
                                    </Button>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('double', 'left')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('double', 'left') ? 'teal' : 'gray'}
                                    >
                                        double
                                    </Button>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('groove', 'left')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('groove', 'left') ? 'teal' : 'gray'}
                                    >
                                        groove
                                    </Button>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('ridge', 'left')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('ridge', 'left') ? 'teal' : 'gray'}
                                    >
                                        ridge
                                    </Button>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('inset', 'left')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('inset', 'left') ? 'teal' : 'gray'}
                                    >
                                        inset
                                    </Button>
                                    <Button
                                        padding={'0.2rem'}
                                        onClick={() => updateBorderStyle('outset', 'left')}
                                        fontSize={'1rem'}
                                        margin={'0.1rem'}
                                        bg={confirmClickedBorderStyleButton('outset', 'left') ? 'teal' : 'gray'}
                                    >
                                        outset
                                    </Button>
                                </Flex>
                            </Flex>
                        </Flex>
                    ) : (
                        ''
                    )}
                </Flex>
            ) : (
                ''
            )}
        </Flex>
    )
}
