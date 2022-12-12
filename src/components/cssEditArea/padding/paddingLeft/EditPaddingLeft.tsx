import { Flex, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Text, Tooltip } from '@chakra-ui/react'
import React, { memo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { getElementUid, saveCurrentCssProps } from '../../../pseudoArea/pseudoAreaSlice'

export const EditPaddingLeft = memo(() => {
    const selectedElementClass = useAppSelector((state) => state.pseudoArea.elementClassSelectedCurrent)
    const selectedElementName = useAppSelector((state) => state.pseudoArea.elementNameSelectedCurrent)
    const dispatch = useAppDispatch()
    const uid = getElementUid(selectedElementName, selectedElementClass)
    const cssStates = useAppSelector((state) => state.pseudoArea.cssStates)
    let padding = cssStates[uid].cssProps.padding
    if (!padding) {
        padding = ''
    }
    const [showTooltipPaddingLeft, setShowTooltipPaddingLeft] = useState(false)
    const getPadding = () => {
        const paddingList = padding.split(' ')
        if (paddingList.length === 4) {
            return paddingList[3]
        } else {
            return padding
        }
    }
    const onChangeValue = (v: number) => {
        const paddingList = padding.split(' ')
        if (paddingList.length === 4) {
            paddingList[3] = v.toString() + 'px'
            dispatch(
                saveCurrentCssProps({
                    elementName: selectedElementName,
                    classNames: selectedElementClass,
                    cssPropKey: 'padding',
                    cssPropValue: paddingList.join(' '),
                })
            )
        } else {
            dispatch(
                saveCurrentCssProps({
                    elementName: selectedElementName,
                    classNames: selectedElementClass,
                    cssPropKey: 'padding',
                    cssPropValue: `${padding} ${padding} ${padding} ${padding}`,
                })
            )
        }
    }
    return (
        <Flex flexDirection={'row'} alignItems={'center'} width={'50rem'} marginTop={'1rem'} marginBottom={'1rem'}>
            <Text
                display={'flex'}
                justifyContent={'start'}
                alignItems={'center'}
                color={'black'}
                width={'10rem'}
                marginRight={'1rem'}
                marginLeft={'1rem'}
            >
                Padding Left
            </Text>
            <Slider
                id="padding-left"
                defaultValue={0}
                value={parseInt(getPadding().replace('px', ''))}
                min={0}
                max={100}
                colorScheme="teal"
                onChange={(v) => onChangeValue(v)}
                onMouseEnter={() => setShowTooltipPaddingLeft(true)}
                onMouseLeave={() => setShowTooltipPaddingLeft(false)}
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
                    placement="left"
                    isOpen={showTooltipPaddingLeft}
                    label={getPadding()}
                >
                    <SliderThumb />
                </Tooltip>
            </Slider>
        </Flex>
    )
})
