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
import { EditBorderRadiusBottomLeftHorizontal } from './bottomLeft/EditBorderRadiusBottomLeftHorizontal'
import { EditBorderRadiusBottomLeftVertical } from './bottomLeft/EditBorderRadiusBottomLeftVertical'
import { EditBorderRadiusBottomRightHorizontal } from './bottomRight/EditBorderRadiusBottomRightHorizontal'
import { EditBorderRadiusBottomRightVertical } from './bottomRight/EditBorderRadiusBottomRightVertical'
import { EditBorderRadiusTopLeftHorizontal } from './topLeft/EditBorderRadiusTopLeftHorizontal'
import { EditBorderRadiusTopLeftVertical } from './topLeft/EditBorderRadiusTopLeftVertical'
import { EditBorderRadiusTopRightHorizontal } from './topRight/EditBorderRadiusTopRightHorizontal'
import { EditBorderRadiusTopRightVertical } from './topRight/EditBorderRadiusTopRightVertical'

export const EditBorderRadius = () => {
    // TODO:デザインは一旦ポイ
    const dispatch = useAppDispatch()
    const borderRadius = useAppSelector((state) => state.buttonView.borderRadius)
    const displayBorderRadius = useAppSelector((state) => state.cssCustomArea.displayBorderRadius)
    const [borderRadiusAll, setBorderRadiusAll] = useState(borderRadius)
    const [showTooltipAll, setShowTooltipAll] = useState(false)

    const [isDisplayDetail, setIsDisplayDetail] = useState(false)

    const onChangeValue = (v: number) => {
        setBorderRadiusAll(v.toString() + 'px')
        dispatch(setBorderRadius(v.toString() + 'px'))
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
                        onChange={(v) => onChangeValue(v)}
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
                            label={borderRadiusAll}
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
                                <EditBorderRadiusTopLeftHorizontal />
                                <EditBorderRadiusTopLeftVertical />
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
                                <EditBorderRadiusTopRightHorizontal />
                                <EditBorderRadiusTopRightVertical />
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
                                <EditBorderRadiusBottomRightHorizontal />
                                <EditBorderRadiusBottomRightVertical />
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
                                <EditBorderRadiusBottomLeftHorizontal />
                                <EditBorderRadiusBottomLeftVertical />
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
