import { AddIcon } from '@chakra-ui/icons'
import {
    Box,
    Button,
    Flex,
    Slider,
    SliderFilledTrack,
    SliderMark,
    SliderThumb,
    SliderTrack,
    Text,
    Tooltip,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { setBorderRadius } from '../../buttonView/buttonViewSlice'
import { addCssButtonAnimeVariants } from '../animation/addCssButton'
import { rotateElementVariants } from '../animation/rotateElement'

export const EditBorderRadius = () => {
    // TODO:デカすぎコンポーネント
    // TODO:たぶんレンダリングし過ぎ
    // TODO:デザインは一旦ポイ
    const dispatch = useAppDispatch()
    const borderRadius = useAppSelector((state) => state.buttonView.borderRadius)
    const displayBorderRadius = useAppSelector((state) => state.cssCustomArea.displayBorderRadius)
    const [borderRadiusAll, setBorderRadiusAll] = useState(borderRadius)
    const [showTooltipAll, setShowTooltipAll] = useState(false)
    const [showTooltipTopLeftHorizontal, setShowTooltipTopLeftHorizontal] = useState(false)
    const [showTooltipTopLeftVertical, setShowTooltipTopLeftVertical] = useState(false)
    const [showTooltipTopRightHorizontal, setShowTooltipTopRightHorizontal] = useState(false)
    const [showTooltipTopRightVertical, setShowTooltipTopRightVertical] = useState(false)
    const [showTooltipBottomRightHorizontal, setShowTooltipBottomRightHorizontal] = useState(false)
    const [showTooltipBottomRightVertical, setShowTooltipBottomRightVertical] = useState(false)
    const [showTooltipBottomLeftHorizontal, setShowTooltipBottomLeftHorizontal] = useState(false)
    const [showTooltipBottomLeftVertical, setShowTooltipBottomLeftVertical] = useState(false)

    const [isDisplayDetail, setIsDisplayDetail] = useState(false)

    const getBorderRadius = (position: string) => {
        const borderRadiusList = borderRadius.split(' ').filter((value) => value !== '/')
        if (borderRadiusList.length === 8 && position === 'topLeftHorizontal') {
            return borderRadiusList[0]
        } else if (borderRadiusList.length === 8 && position === 'topLeftVertical') {
            return borderRadiusList[4]
        } else if (borderRadiusList.length === 8 && position === 'topRightHorizontal') {
            return borderRadiusList[1]
        } else if (borderRadiusList.length === 8 && position === 'topRightVertical') {
            return borderRadiusList[5]
        } else if (borderRadiusList.length === 8 && position === 'bottomRightHorizontal') {
            return borderRadiusList[2]
        } else if (borderRadiusList.length === 8 && position === 'bottomRightVertical') {
            return borderRadiusList[6]
        } else if (borderRadiusList.length === 8 && position === 'bottomLeftHorizontal') {
            return borderRadiusList[3]
        } else if (borderRadiusList.length === 8 && position === 'bottomLeftVertical') {
            return borderRadiusList[7]
        } else {
            return borderRadiusAll
        }
    }

    const onChangeValue = (v: number, position: string) => {
        const borderRadiusList = borderRadius.split(' ').filter((value) => value !== '/')
        if (borderRadiusList.length === 8) {
            if (position === 'all') {
                dispatch(
                    setBorderRadius(
                        `${borderRadius} ${borderRadius} ${borderRadius} ${borderRadius} / ${borderRadius} ${borderRadius} ${borderRadius} ${borderRadius}`
                    )
                )
            } else {
                if (position === 'topLeftHorizontal') {
                    borderRadiusList[0] = v.toString() + 'px'
                } else if (position === 'topLeftVertical') {
                    borderRadiusList[4] = v.toString() + 'px'
                } else if (position === 'topRightHorizontal') {
                    borderRadiusList[1] = v.toString() + 'px'
                } else if (position === 'topRightVertical') {
                    borderRadiusList[5] = v.toString() + 'px'
                } else if (position === 'bottomRightHorizontal') {
                    borderRadiusList[2] = v.toString() + 'px'
                } else if (position === 'bottomRightVertical') {
                    borderRadiusList[6] = v.toString() + 'px'
                } else if (position === 'bottomLeftHorizontal') {
                    borderRadiusList[3] = v.toString() + 'px'
                } else if (position === 'bottomLeftVertical') {
                    borderRadiusList[7] = v.toString() + 'px'
                }
                borderRadiusList.splice(4, 0, '/')
                dispatch(setBorderRadius(borderRadiusList.join(' ')))
            }
        } else {
            if (position === 'all') {
                setBorderRadiusAll(v.toString() + 'px')
                dispatch(setBorderRadius(v.toString() + 'px'))
            } else {
                dispatch(
                    setBorderRadius(
                        `${borderRadius} ${borderRadius} ${borderRadius} ${borderRadius} / ${borderRadius} ${borderRadius} ${borderRadius} ${borderRadius}`
                    )
                )
            }
        }
    }
    return (
        <Flex>
            {displayBorderRadius ? (
                <Flex
                    flexDirection={'column'}
                    alignItems={'center'}
                    margin={'1rem'}
                    padding={'1rem'}
                    width={'50rem'}
                    border={'1px'}
                    borderRadius={'1rem'}
                    borderColor={'gray.200'}
                >
                    <Text color={'black'} marginBottom={'1rem'} fontSize={'2rem'}>
                        Border Radius
                    </Text>
                    <Slider
                        id="BorderRadius"
                        defaultValue={55}
                        value={parseInt(borderRadiusAll.replace('px', ''))}
                        min={0}
                        max={200}
                        colorScheme="teal"
                        onChange={(v) => onChangeValue(v, 'all')}
                        onMouseEnter={() => setShowTooltipAll(true)}
                        onMouseLeave={() => setShowTooltipAll(false)}
                    >
                        <SliderMark color={'black'} value={50} mt="1" ml="-2.5" fontSize="sm">
                            50px
                        </SliderMark>
                        <SliderMark color={'black'} value={100} mt="1" ml="-2.5" fontSize="sm">
                            100px
                        </SliderMark>
                        <SliderMark color={'black'} value={150} mt="1" ml="-2.5" fontSize="sm">
                            150px
                        </SliderMark>
                        <SliderTrack bg={'teal.50'}>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <Tooltip
                            hasArrow
                            bg="teal.500"
                            color="white"
                            placement="top"
                            isOpen={showTooltipAll}
                            label={getBorderRadius('All')}
                        >
                            <SliderThumb />
                        </Tooltip>
                    </Slider>
                    <Button
                        as={motion.button}
                        margin={['0rem', '2rem']}
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
                    {isDisplayDetail ? (
                        <Flex
                            flexDirection={'column'}
                            alignItems={'center'}
                            margin={'1rem'}
                            padding={'1rem'}
                            width={'50rem'}
                        >
                            <Flex flexDirection={'row'} alignItems={'center'} width={'inherit'} margin={'0.3rem'}>
                                <Text
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    color={'black'}
                                    width={'20rem'}
                                >
                                    Top Left
                                </Text>
                                <Text
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    color={'black'}
                                    width={'25rem'}
                                >
                                    Horizontal
                                </Text>
                                <Slider
                                    id="topLeft-horizontal"
                                    defaultValue={25}
                                    value={parseInt(getBorderRadius('topLeftHorizontal').replace('px', ''))}
                                    min={0}
                                    max={200}
                                    colorScheme="teal"
                                    onChange={(v) => onChangeValue(v, 'topLeftHorizontal')}
                                    onMouseEnter={() => setShowTooltipTopLeftHorizontal(true)}
                                    onMouseLeave={() => setShowTooltipTopLeftHorizontal(false)}
                                >
                                    <SliderMark color={'black'} value={50} mt="1" ml="-2.5" fontSize="sm">
                                        50px
                                    </SliderMark>
                                    <SliderMark color={'black'} value={100} mt="1" ml="-2.5" fontSize="sm">
                                        100px
                                    </SliderMark>
                                    <SliderMark color={'black'} value={150} mt="1" ml="-2.5" fontSize="sm">
                                        150px
                                    </SliderMark>
                                    <SliderTrack bg={'teal.50'}>
                                        <SliderFilledTrack />
                                    </SliderTrack>
                                    <Tooltip
                                        hasArrow
                                        bg="teal.500"
                                        color="white"
                                        placement="top"
                                        isOpen={showTooltipTopLeftHorizontal}
                                        label={getBorderRadius('topLeftHorizontal')}
                                    >
                                        <SliderThumb />
                                    </Tooltip>
                                </Slider>
                                <Text
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    color={'black'}
                                    width={'18rem'}
                                >
                                    Vertical
                                </Text>
                                <Slider
                                    id="topLeft-vertical"
                                    defaultValue={25}
                                    value={parseInt(getBorderRadius('topLeftVertical').replace('px', ''))}
                                    min={0}
                                    max={200}
                                    colorScheme="teal"
                                    onChange={(v) => onChangeValue(v, 'topLeftVertical')}
                                    onMouseEnter={() => setShowTooltipTopLeftVertical(true)}
                                    onMouseLeave={() => setShowTooltipTopLeftVertical(false)}
                                >
                                    <SliderMark color={'black'} value={50} mt="1" ml="-2.5" fontSize="sm">
                                        50px
                                    </SliderMark>
                                    <SliderMark color={'black'} value={100} mt="1" ml="-2.5" fontSize="sm">
                                        100px
                                    </SliderMark>
                                    <SliderMark color={'black'} value={150} mt="1" ml="-2.5" fontSize="sm">
                                        150px
                                    </SliderMark>
                                    <SliderTrack bg={'teal.50'}>
                                        <SliderFilledTrack />
                                    </SliderTrack>
                                    <Tooltip
                                        hasArrow
                                        bg="teal.500"
                                        color="white"
                                        placement="top"
                                        isOpen={showTooltipTopLeftVertical}
                                        label={getBorderRadius('topLeftVertical')}
                                    >
                                        <SliderThumb />
                                    </Tooltip>
                                </Slider>
                            </Flex>
                            <Flex flexDirection={'row'} alignItems={'center'} width={'inherit'} margin={'0.3rem'}>
                                <Text
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    color={'black'}
                                    width={'20rem'}
                                >
                                    Top Right
                                </Text>
                                <Text
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    color={'black'}
                                    width={'25rem'}
                                >
                                    Horizontal
                                </Text>
                                <Slider
                                    id="topRight-horizontal"
                                    defaultValue={25}
                                    value={parseInt(getBorderRadius('topRightHorizontal').replace('px', ''))}
                                    min={0}
                                    max={200}
                                    colorScheme="teal"
                                    onChange={(v) => onChangeValue(v, 'topRightHorizontal')}
                                    onMouseEnter={() => setShowTooltipTopRightHorizontal(true)}
                                    onMouseLeave={() => setShowTooltipTopRightHorizontal(false)}
                                >
                                    <SliderMark color={'black'} value={50} mt="1" ml="-2.5" fontSize="sm">
                                        50px
                                    </SliderMark>
                                    <SliderMark color={'black'} value={100} mt="1" ml="-2.5" fontSize="sm">
                                        100px
                                    </SliderMark>
                                    <SliderMark color={'black'} value={150} mt="1" ml="-2.5" fontSize="sm">
                                        150px
                                    </SliderMark>
                                    <SliderTrack bg={'teal.50'}>
                                        <SliderFilledTrack />
                                    </SliderTrack>
                                    <Tooltip
                                        hasArrow
                                        bg="teal.500"
                                        color="white"
                                        placement="top"
                                        isOpen={showTooltipTopRightHorizontal}
                                        label={getBorderRadius('topRightHorizontal')}
                                    >
                                        <SliderThumb />
                                    </Tooltip>
                                </Slider>
                                <Text
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    color={'black'}
                                    width={'18rem'}
                                >
                                    Vertical
                                </Text>
                                <Slider
                                    id="topRight-vertical"
                                    defaultValue={25}
                                    value={parseInt(getBorderRadius('topRightVertical').replace('px', ''))}
                                    min={0}
                                    max={200}
                                    colorScheme="teal"
                                    onChange={(v) => onChangeValue(v, 'topRightVertical')}
                                    onMouseEnter={() => setShowTooltipTopRightVertical(true)}
                                    onMouseLeave={() => setShowTooltipTopRightVertical(false)}
                                >
                                    <SliderMark color={'black'} value={50} mt="1" ml="-2.5" fontSize="sm">
                                        50px
                                    </SliderMark>
                                    <SliderMark color={'black'} value={100} mt="1" ml="-2.5" fontSize="sm">
                                        100px
                                    </SliderMark>
                                    <SliderMark color={'black'} value={150} mt="1" ml="-2.5" fontSize="sm">
                                        150px
                                    </SliderMark>
                                    <SliderTrack bg={'teal.50'}>
                                        <SliderFilledTrack />
                                    </SliderTrack>
                                    <Tooltip
                                        hasArrow
                                        bg="teal.500"
                                        color="white"
                                        placement="top"
                                        isOpen={showTooltipTopRightVertical}
                                        label={getBorderRadius('topRightVertical')}
                                    >
                                        <SliderThumb />
                                    </Tooltip>
                                </Slider>
                            </Flex>
                            <Flex flexDirection={'row'} alignItems={'center'} width={'inherit'} margin={'0.3rem'}>
                                <Text
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    color={'black'}
                                    width={'20rem'}
                                >
                                    Bottom Right
                                </Text>
                                <Text
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    color={'black'}
                                    width={'25rem'}
                                >
                                    Horizontal
                                </Text>
                                <Slider
                                    id="bottomRight-horizontal"
                                    defaultValue={25}
                                    value={parseInt(getBorderRadius('bottomRightHorizontal').replace('px', ''))}
                                    min={0}
                                    max={200}
                                    colorScheme="teal"
                                    onChange={(v) => onChangeValue(v, 'bottomRightHorizontal')}
                                    onMouseEnter={() => setShowTooltipBottomRightHorizontal(true)}
                                    onMouseLeave={() => setShowTooltipBottomRightHorizontal(false)}
                                >
                                    <SliderMark color={'black'} value={50} mt="1" ml="-2.5" fontSize="sm">
                                        50px
                                    </SliderMark>
                                    <SliderMark color={'black'} value={100} mt="1" ml="-2.5" fontSize="sm">
                                        100px
                                    </SliderMark>
                                    <SliderMark color={'black'} value={150} mt="1" ml="-2.5" fontSize="sm">
                                        150px
                                    </SliderMark>
                                    <SliderTrack bg={'teal.50'}>
                                        <SliderFilledTrack />
                                    </SliderTrack>
                                    <Tooltip
                                        hasArrow
                                        bg="teal.500"
                                        color="white"
                                        placement="top"
                                        isOpen={showTooltipBottomRightHorizontal}
                                        label={getBorderRadius('bottomRightHorizontal')}
                                    >
                                        <SliderThumb />
                                    </Tooltip>
                                </Slider>
                                <Text
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    color={'black'}
                                    width={'18rem'}
                                >
                                    Vertical
                                </Text>
                                <Slider
                                    id="bottomRight-vertical"
                                    defaultValue={25}
                                    value={parseInt(getBorderRadius('bottomRightVertical').replace('px', ''))}
                                    min={0}
                                    max={200}
                                    colorScheme="teal"
                                    onChange={(v) => onChangeValue(v, 'bottomRightVertical')}
                                    onMouseEnter={() => setShowTooltipBottomRightVertical(true)}
                                    onMouseLeave={() => setShowTooltipBottomRightVertical(false)}
                                >
                                    <SliderMark color={'black'} value={50} mt="1" ml="-2.5" fontSize="sm">
                                        50px
                                    </SliderMark>
                                    <SliderMark color={'black'} value={100} mt="1" ml="-2.5" fontSize="sm">
                                        100px
                                    </SliderMark>
                                    <SliderMark color={'black'} value={150} mt="1" ml="-2.5" fontSize="sm">
                                        150px
                                    </SliderMark>
                                    <SliderTrack bg={'teal.50'}>
                                        <SliderFilledTrack />
                                    </SliderTrack>
                                    <Tooltip
                                        hasArrow
                                        bg="teal.500"
                                        color="white"
                                        placement="top"
                                        isOpen={showTooltipBottomRightVertical}
                                        label={getBorderRadius('bottomRightVertical')}
                                    >
                                        <SliderThumb />
                                    </Tooltip>
                                </Slider>
                            </Flex>
                            <Flex flexDirection={'row'} alignItems={'center'} width={'inherit'} margin={'0.3rem'}>
                                <Text
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    color={'black'}
                                    width={'20rem'}
                                >
                                    Bottom Left
                                </Text>
                                <Text
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    color={'black'}
                                    width={'25rem'}
                                >
                                    Horizontal
                                </Text>
                                <Slider
                                    id="bottomLeft-horizontal"
                                    defaultValue={25}
                                    value={parseInt(getBorderRadius('bottomLeftHorizontal').replace('px', ''))}
                                    min={0}
                                    max={200}
                                    colorScheme="teal"
                                    onChange={(v) => onChangeValue(v, 'bottomLeftHorizontal')}
                                    onMouseEnter={() => setShowTooltipBottomLeftHorizontal(true)}
                                    onMouseLeave={() => setShowTooltipBottomLeftHorizontal(false)}
                                >
                                    <SliderMark color={'black'} value={50} mt="1" ml="-2.5" fontSize="sm">
                                        50px
                                    </SliderMark>
                                    <SliderMark color={'black'} value={100} mt="1" ml="-2.5" fontSize="sm">
                                        100px
                                    </SliderMark>
                                    <SliderMark color={'black'} value={150} mt="1" ml="-2.5" fontSize="sm">
                                        150px
                                    </SliderMark>
                                    <SliderTrack bg={'teal.50'}>
                                        <SliderFilledTrack />
                                    </SliderTrack>
                                    <Tooltip
                                        hasArrow
                                        bg="teal.500"
                                        color="white"
                                        placement="top"
                                        isOpen={showTooltipBottomLeftHorizontal}
                                        label={getBorderRadius('bottomLeftHorizontal')}
                                    >
                                        <SliderThumb />
                                    </Tooltip>
                                </Slider>
                                <Text
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    color={'black'}
                                    width={'18rem'}
                                >
                                    Vertical
                                </Text>
                                <Slider
                                    id="bottomLeft-vertical"
                                    defaultValue={25}
                                    value={parseInt(getBorderRadius('bottomLeftVertical').replace('px', ''))}
                                    min={0}
                                    max={200}
                                    colorScheme="teal"
                                    onChange={(v) => onChangeValue(v, 'bottomLeftVertical')}
                                    onMouseEnter={() => setShowTooltipBottomLeftVertical(true)}
                                    onMouseLeave={() => setShowTooltipBottomLeftVertical(false)}
                                >
                                    <SliderMark color={'black'} value={50} mt="1" ml="-2.5" fontSize="sm">
                                        50px
                                    </SliderMark>
                                    <SliderMark color={'black'} value={100} mt="1" ml="-2.5" fontSize="sm">
                                        100px
                                    </SliderMark>
                                    <SliderMark color={'black'} value={150} mt="1" ml="-2.5" fontSize="sm">
                                        150px
                                    </SliderMark>
                                    <SliderTrack bg={'teal.50'}>
                                        <SliderFilledTrack />
                                    </SliderTrack>
                                    <Tooltip
                                        hasArrow
                                        bg="teal.500"
                                        color="white"
                                        placement="top"
                                        isOpen={showTooltipBottomLeftVertical}
                                        label={getBorderRadius('bottomLeftVertical')}
                                    >
                                        <SliderThumb />
                                    </Tooltip>
                                </Slider>
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
