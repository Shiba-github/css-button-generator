import { Flex, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Text, Tooltip } from '@chakra-ui/react'
import React, { memo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { setPadding } from '../../../buttonView/buttonViewSlice'

export const EditPaddingTop = memo(() => {
    const dispatch = useAppDispatch()
    const padding = useAppSelector((state) => state.buttonView.padding)
    const [showTooltipPaddingTop, setShowTooltipPaddingTop] = useState(false)
    const getPadding = () => {
        const paddingList = padding.split(' ')
        if (paddingList.length === 4) {
            return paddingList[0]
        } else {
            return padding
        }
    }
    const onChangeValue = (v: number) => {
        const paddingList = padding.split(' ')
        console.log(paddingList)
        if (paddingList.length === 4) {
            paddingList[0] = v.toString() + 'px'
            dispatch(setPadding(paddingList.join(' ')))
        } else {
            dispatch(setPadding(`${padding} ${padding} ${padding} ${padding}`))
        }
    }
    return (
        <Flex flexDirection={'row'} alignItems={'center'} width={'50rem'}>
            <Text
                display={'flex'}
                justifyContent={'flex-end'}
                alignItems={'center'}
                color={'black'}
                width={'10rem'}
                marginRight={'2rem'}
            >
                Padding Top
            </Text>
            <Slider
                id="padding-top"
                defaultValue={0}
                value={parseInt(getPadding().replace('px', ''))}
                min={0}
                max={100}
                colorScheme="teal"
                onChange={(v) => onChangeValue(v)}
                onMouseEnter={() => setShowTooltipPaddingTop(true)}
                onMouseLeave={() => setShowTooltipPaddingTop(false)}
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
                    isOpen={showTooltipPaddingTop}
                    label={getPadding()}
                >
                    <SliderThumb />
                </Tooltip>
            </Slider>
        </Flex>
    )
})
