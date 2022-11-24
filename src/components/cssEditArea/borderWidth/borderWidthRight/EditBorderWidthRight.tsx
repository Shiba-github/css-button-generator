import { Flex, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Text, Tooltip } from '@chakra-ui/react'
import React, { memo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { setBorderWidth } from '../../../buttonView/buttonViewSlice'
import { saveCurrentCssCodes, saveCurrentCssProps } from '../../../pseudoArea/pseudoAreaSlice'

export const EditBorderWidthRight = memo(() => {
    const selectedElementClass = useAppSelector((state) => state.pseudoArea.elementClassSelectedCurrent) //現在の選択中のelementClass
    const selectedElementName = useAppSelector((state) => state.pseudoArea.elementNameSelectedCurrent) //現在の選択中のelementName
    const dispatch = useAppDispatch()
    const borderWidth = useAppSelector((state) => state.buttonView.borderWidth)
    const [showTooltipBorderWidthRight, setShowTooltipBorderWidthRight] = useState(false)
    const getBorderWidth = () => {
        const borderWidthList = borderWidth.split(' ')
        if (borderWidthList.length === 4) {
            return borderWidthList[1]
        } else {
            return borderWidth
        }
    }
    const onChangeValue = (v: number) => {
        const borderWidthList = borderWidth.split(' ')
        if (borderWidthList.length === 4) {
            borderWidthList[1] = v.toString() + 'px'
            dispatch(setBorderWidth(borderWidthList.join(' ')))
            dispatch(
                saveCurrentCssProps({
                    elementName: selectedElementName,
                    classNames: selectedElementClass,
                    cssPropKey: 'borderWidth',
                    cssPropValue: borderWidthList.join(' '),
                })
            )
            dispatch(
                saveCurrentCssCodes({
                    elementName: selectedElementName,
                    classNames: selectedElementClass,
                    cssProp: 'borderWidth',
                    cssValue: borderWidthList.join(' '),
                })
            )
        } else {
            dispatch(setBorderWidth(`${borderWidth} ${borderWidth} ${borderWidth} ${borderWidth}`))
        }
    }
    return (
        <Flex flexDirection={'row'} alignItems={'center'} width={'50rem'} marginTop={'1rem'} marginRight={'0.5rem'}>
            <Text
                display={'flex'}
                justifyContent={'flex-end'}
                alignItems={'center'}
                color={'black'}
                width={'12rem'}
                marginRight={'1rem'}
                marginLeft={'1rem'}
            >
                BorderWidth Right
            </Text>
            <Slider
                id="borderWidth-right"
                defaultValue={0}
                value={parseInt(getBorderWidth().replace('px', ''))}
                min={0}
                max={100}
                colorScheme="teal"
                onChange={(v) => onChangeValue(v)}
                onMouseEnter={() => setShowTooltipBorderWidthRight(true)}
                onMouseLeave={() => setShowTooltipBorderWidthRight(false)}
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
                    isOpen={showTooltipBorderWidthRight}
                    label={getBorderWidth()}
                >
                    <SliderThumb />
                </Tooltip>
            </Slider>
        </Flex>
    )
})
