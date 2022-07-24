import { Flex, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Text, Tooltip } from '@chakra-ui/react'
import React, { memo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { setBorderRadius } from '../../../buttonView/buttonViewSlice'

export const EditBorderRadiusTopLeftVertical = memo(() => {
    const dispatch = useAppDispatch()
    const borderRadius = useAppSelector((state) => state.buttonView.borderRadius)
    const [showTooltipTopLeftVertical, setShowTooltipTopLeftVertical] = useState(false)
    const getBorderRadius = () => {
        const borderRadiusList = borderRadius.split(' ').filter((value) => value !== '/')
        if (borderRadiusList.length === 8) {
            return borderRadiusList[4]
        } else {
            return borderRadius
        }
    }
    const onChangeValue = (v: number) => {
        const borderRadiusList = borderRadius.split(' ').filter((value) => value !== '/')
        if (borderRadiusList.length === 8) {
            borderRadiusList[4] = v.toString() + 'px'
            borderRadiusList.splice(4, 0, '/')
            dispatch(setBorderRadius(borderRadiusList.join(' ')))
        } else {
            dispatch(
                setBorderRadius(
                    `${borderRadius} ${borderRadius} ${borderRadius} ${borderRadius} / ${borderRadius} ${borderRadius} ${borderRadius} ${borderRadius}`
                )
            )
        }
    }
    return (
        <Flex flexDirection={'row'} alignItems={'center'} width={'50rem'}>
            <Text display={'flex'} justifyContent={'center'} alignItems={'center'} color={'black'} width={'8rem'}>
                Vertical
            </Text>
            <Slider
                id="topLeft-vertical"
                defaultValue={25}
                value={parseInt(getBorderRadius().replace('px', ''))}
                min={0}
                max={200}
                colorScheme="teal"
                onChange={(v) => onChangeValue(v)}
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
                    label={getBorderRadius()}
                >
                    <SliderThumb />
                </Tooltip>
            </Slider>
        </Flex>
    )
})
