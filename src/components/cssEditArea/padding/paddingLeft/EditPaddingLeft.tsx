import { Flex, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Text, Tooltip } from '@chakra-ui/react'
import React, { memo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { setPadding } from '../../../buttonView/buttonViewSlice'

export const EditPaddingLeft = memo(() => {
    const dispatch = useAppDispatch()
    const padding = useAppSelector((state) => state.buttonView.padding)
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
            dispatch(setPadding(paddingList.join(' ')))
        } else {
            dispatch(setPadding(`${padding} ${padding} ${padding} ${padding}`))
        }
    }
    return (
        <Flex flexDirection={'row'} alignItems={'center'} width={'50rem'} marginTop={'1rem'}>
            <Text
                display={'flex'}
                justifyContent={'flex-end'}
                alignItems={'center'}
                color={'black'}
                width={'10rem'}
                marginRight={'2rem'}
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
