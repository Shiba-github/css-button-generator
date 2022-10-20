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
import { getAllCssProps, setBorderRadius } from '../../buttonView/buttonViewSlice'
import { saveCurrentCssCodes, saveCurrentCssProps } from '../../pseudoArea/pseudoAreaSlice'
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
    // TODO:親のborderRadiusだけ他疑似要素に変更時見た目を保持していない（データは保持できている）
    const selectedElementClass = useAppSelector((state) => state.pseudoArea.elementClassSelectedCurrent) //現在の選択中のelementClass
    const selectedElementName = useAppSelector((state) => state.pseudoArea.elementNameSelectedCurrent) //現在の選択中のelementName
    const allCssProps = useAppSelector((state) => getAllCssProps(state))
    const dispatch = useAppDispatch()
    const borderRadius = useAppSelector((state) => state.buttonView.borderRadius)
    const displayBorderRadius = useAppSelector((state) => state.cssCustomArea.displayBorderRadius)
    const [borderRadiusAll, setBorderRadiusAll] = useState(borderRadius)
    const [showTooltipAll, setShowTooltipAll] = useState(false)

    const [isDisplayDetail, setIsDisplayDetail] = useState(false)

    const onChangeValue = (v: number) => {
        setBorderRadiusAll(v.toString() + 'px')
        dispatch(setBorderRadius(v.toString() + 'px'))
        const newAllCssProps = { ...allCssProps, borderRadius: v.toString() + 'px' }
        dispatch(
            saveCurrentCssProps({
                elementName: selectedElementName,
                classNames: selectedElementClass,
                allCssProps: newAllCssProps,
            })
        )
        dispatch(
            saveCurrentCssCodes({
                elementName: selectedElementName,
                classNames: selectedElementClass,
                cssProp: 'borderRadius',
                cssValue: v.toString() + 'px',
            })
        )
    }
    return (
        <>
            {displayBorderRadius ? (
                <Flex
                    flexDirection={'column'}
                    backgroundColor={'gray.50'}
                    borderRadius={'1rem'}
                    marginTop={'1rem'}
                    width={'50rem'}
                >
                    <Flex
                        flexDirection={'row'}
                        alignItems={'center'}
                        marginTop={'0.5rem'}
                        marginBottom={'0.8rem'}
                        width={'50rem'}
                        borderColor={'gray.200'}
                    >
                        <Text
                            width={'9rem'}
                            color={'black'}
                            justifyContent={'start'}
                            fontSize={'1.2rem'}
                            marginLeft={'1rem'}
                            marginRight={'1rem'}
                        >
                            Border Radius
                        </Text>
                        <Slider
                            width={'40rem'}
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
                        <Flex
                            flexDirection={'column'}
                            alignItems={'center'}
                            margin={'1rem'}
                            padding={'1rem'}
                            width={'47rem'}
                        >
                            <Flex flexDirection={'row'} alignItems={'center'} width={'inherit'} margin={'0.3rem'}>
                                <Text
                                    display={'flex'}
                                    justifyContent={'start'}
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
                                    justifyContent={'start'}
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
                                    justifyContent={'start'}
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
                                    justifyContent={'start'}
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
        </>
    )
}
