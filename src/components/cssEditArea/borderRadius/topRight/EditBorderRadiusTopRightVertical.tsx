import { Flex, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Text, Tooltip } from '@chakra-ui/react'
import React, { memo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { setBorderRadius } from '../../../buttonView/buttonViewSlice'

export const EditBorderRadiusTopRightVertical = memo(() => {
    const dispatch = useAppDispatch()
    const borderRadius = useAppSelector((state) => state.buttonView.borderRadius)
    const [showTooltipTopRightVertical, setShowTooltipTopRightVertical] = useState(false)
    const getBorderRadius = () => {
        const borderRadiusList = borderRadius.split(' ').filter((value) => value !== '/')
        if (borderRadiusList.length === 8) {
            return borderRadiusList[5]
        } else {
            return borderRadius
        }
    }
    const onChangeValue = (v: number) => {
        const borderRadiusList = borderRadius.split(' ').filter((value) => value !== '/')
        if (borderRadiusList.length === 8) {
            borderRadiusList[5] = v.toString() + 'px'
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
                id="topRight-vertical"
                defaultValue={25}
                value={parseInt(getBorderRadius().replace('px', ''))}
                min={0}
                max={200}
                colorScheme="teal"
                onChange={(v) => onChangeValue(v)}
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
                    label={getBorderRadius()}
                >
                    <SliderThumb />
                </Tooltip>
            </Slider>
        </Flex>
    )
})
