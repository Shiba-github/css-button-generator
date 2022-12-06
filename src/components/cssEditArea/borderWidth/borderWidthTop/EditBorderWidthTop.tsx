import { Flex, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Text, Tooltip } from '@chakra-ui/react'
import React, { memo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { getElementUid, saveCurrentCssProps } from '../../../pseudoArea/pseudoAreaSlice'

export const EditBorderWidthTop = memo(() => {
    const selectedElementClass = useAppSelector((state) => state.pseudoArea.elementClassSelectedCurrent)
    const selectedElementName = useAppSelector((state) => state.pseudoArea.elementNameSelectedCurrent)
    const dispatch = useAppDispatch()
    const uid = getElementUid(selectedElementName, selectedElementClass)
    const cssStates = useAppSelector((state) => state.pseudoArea.cssStates)
    let borderWidth = cssStates[uid].cssProps.borderWidth
    if (!borderWidth) {
        borderWidth = ''
    }
    const [showTooltipBorderWidthTop, setShowTooltipBorderWidthTop] = useState(false)
    const getBorderWidth = () => {
        const borderWidthList = borderWidth.split(' ')
        if (borderWidthList.length === 4) {
            return borderWidthList[0]
        } else {
            return borderWidth
        }
    }
    const onChangeValue = (v: number) => {
        const borderWidthList = borderWidth.split(' ')
        if (borderWidthList.length === 4) {
            borderWidthList[0] = v.toString() + 'px'
            dispatch(
                saveCurrentCssProps({
                    elementName: selectedElementName,
                    classNames: selectedElementClass,
                    cssPropKey: 'borderWidth',
                    cssPropValue: borderWidthList.join(' '),
                })
            )
        } else {
            dispatch(
                saveCurrentCssProps({
                    elementName: selectedElementName,
                    classNames: selectedElementClass,
                    cssPropKey: 'borderWidth',
                    cssPropValue: `${borderWidth} ${borderWidth} ${borderWidth} ${borderWidth}`,
                })
            )
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
                BorderWidth Top
            </Text>
            <Slider
                id="borderWidth-top"
                defaultValue={0}
                value={parseInt(getBorderWidth().replace('px', ''))}
                min={0}
                max={100}
                colorScheme="teal"
                onChange={(v) => onChangeValue(v)}
                onMouseEnter={() => setShowTooltipBorderWidthTop(true)}
                onMouseLeave={() => setShowTooltipBorderWidthTop(false)}
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
                    placement="top"
                    isOpen={showTooltipBorderWidthTop}
                    label={getBorderWidth()}
                >
                    <SliderThumb />
                </Tooltip>
            </Slider>
        </Flex>
    )
})
