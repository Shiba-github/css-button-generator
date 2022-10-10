import { Flex, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Text, Tooltip } from '@chakra-ui/react'
import React, { memo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { getAllCssProps, setPadding } from '../../../buttonView/buttonViewSlice'
import { saveCurrentCssCodes, saveCurrentCssProps } from '../../../pseudoArea/pseudoAreaSlice'

export const EditPaddingRight = memo(() => {
    const selectedElementClass = useAppSelector((state) => state.pseudoArea.elementClassSelectedCurrent) //現在の選択中のelementClass
    const selectedElementName = useAppSelector((state) => state.pseudoArea.elementNameSelectedCurrent) //現在の選択中のelementName
    const allCssProps = useAppSelector((state) => getAllCssProps(state))
    const dispatch = useAppDispatch()
    const padding = useAppSelector((state) => state.buttonView.padding)
    const [showTooltipPaddingRight, setShowTooltipPaddingRight] = useState(false)
    const getPadding = () => {
        const paddingList = padding.split(' ')
        if (paddingList.length === 4) {
            return paddingList[1]
        } else {
            return padding
        }
    }
    const onChangeValue = (v: number) => {
        const paddingList = padding.split(' ')
        if (paddingList.length === 4) {
            paddingList[1] = v.toString() + 'px'
            dispatch(setPadding(paddingList.join(' ')))
            const newAllCssProps = { ...allCssProps, padding: paddingList.join(' ') }
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
                    cssProp: 'padding',
                    cssValue: paddingList.join(' '),
                })
            )
        } else {
            dispatch(setPadding(`${padding} ${padding} ${padding} ${padding}`))
        }
    }
    return (
        <Flex flexDirection={'row'} alignItems={'center'} width={'50rem'} marginTop={'1rem'}>
            <Text
                display={'flex'}
                justifyContent={'start'}
                alignItems={'center'}
                color={'black'}
                width={'10rem'}
                marginRight={'1rem'}
                marginLeft={'1rem'}
            >
                Padding Right
            </Text>
            <Slider
                id="padding-right"
                defaultValue={0}
                value={parseInt(getPadding().replace('px', ''))}
                min={0}
                max={100}
                colorScheme="teal"
                onChange={(v) => onChangeValue(v)}
                onMouseEnter={() => setShowTooltipPaddingRight(true)}
                onMouseLeave={() => setShowTooltipPaddingRight(false)}
            >
                <SliderMark color={'black'} value={25} mt="1" ml="-2.5" fontSize="sm">
                    25px
                </SliderMark>
                <SliderMark color={'black'} value={50} mt="1" ml="-2.5" fontSize="sm">
                    50px
                </SliderMark>
                <SliderMark color={'black'} value={75} mt="1" ml="-2.5" fontSize="sm">
                    75px
                </SliderMark>
                <SliderTrack bg={'teal.50'}>
                    <SliderFilledTrack />
                </SliderTrack>
                <Tooltip
                    hasArrow
                    bg="teal.500"
                    color="white"
                    placement="right"
                    isOpen={showTooltipPaddingRight}
                    label={getPadding()}
                >
                    <SliderThumb />
                </Tooltip>
            </Slider>
        </Flex>
    )
})
