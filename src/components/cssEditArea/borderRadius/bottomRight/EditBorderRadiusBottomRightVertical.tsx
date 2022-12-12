import { Flex, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Text, Tooltip } from '@chakra-ui/react'
import React, { memo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { getElementUid, saveCurrentCssProps } from '../../../pseudoArea/pseudoAreaSlice'

export const EditBorderRadiusBottomRightVertical = memo(() => {
    const selectedElementClass = useAppSelector((state) => state.pseudoArea.elementClassSelectedCurrent) //現在の選択中のelementClass
    const selectedElementName = useAppSelector((state) => state.pseudoArea.elementNameSelectedCurrent) //現在の選択中のelementName
    const dispatch = useAppDispatch()
    const uid = getElementUid(selectedElementName, selectedElementClass)
    const cssStates = useAppSelector((state) => state.pseudoArea.cssStates)
    let borderRadius = cssStates[uid].cssProps.borderRadius
    if (!borderRadius) {
        borderRadius = ''
    }
    const [showTooltipBottomRightVertical, setShowTooltipBottomRightVertical] = useState(false)
    const getBorderRadius = () => {
        const borderRadiusList = borderRadius.split(' ').filter((value) => value !== '/')
        if (borderRadiusList.length === 8) {
            return borderRadiusList[6]
        } else {
            return borderRadius
        }
    }
    const onChangeValue = (v: number) => {
        const borderRadiusList = borderRadius.split(' ').filter((value) => value !== '/')
        if (borderRadiusList.length === 8) {
            borderRadiusList[6] = v.toString() + 'px'
            borderRadiusList.splice(4, 0, '/')
            dispatch(
                saveCurrentCssProps({
                    elementName: selectedElementName,
                    classNames: selectedElementClass,
                    cssPropKey: 'borderRadius',
                    cssPropValue: borderRadiusList.join(' '),
                })
            )
        } else {
            dispatch(
                saveCurrentCssProps({
                    elementName: selectedElementName,
                    classNames: selectedElementClass,
                    cssPropKey: 'borderRadius',
                    cssPropValue: `${borderRadius} ${borderRadius} ${borderRadius} ${borderRadius} / ${borderRadius} ${borderRadius} ${borderRadius} ${borderRadius}`,
                })
            )
        }
    }
    return (
        <Flex flexDirection={'row'} alignItems={'center'} width={'50rem'}>
            <Text display={'flex'} justifyContent={'center'} alignItems={'center'} color={'black'} width={'8rem'}>
                Vertical
            </Text>
            <Slider
                id="bottomRight-vertical"
                defaultValue={25}
                value={parseInt(getBorderRadius().replace('px', ''))}
                min={0}
                max={200}
                colorScheme="teal"
                onChange={(v) => onChangeValue(v)}
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
                    label={getBorderRadius()}
                >
                    <SliderThumb />
                </Tooltip>
            </Slider>
        </Flex>
    )
})
