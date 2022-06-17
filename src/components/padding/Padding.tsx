import React, { useState } from 'react'
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark, Tooltip, Flex, Text } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { setPadding } from '../buttonView/buttonViewSlice'

export const Padding = () => {
    const dispatch = useAppDispatch()
    const padding = useAppSelector((state) => state.buttonView.padding)
    const [showTooltip, setShowTooltip] = useState(false)
    const onChangeValue = (v: number) => {
        dispatch(setPadding(v.toString() + 'px'))
    }
    return (
        <Flex
            flexDirection={'column'}
            alignItems={'center'}
            margin={'1rem'}
            padding={'1rem'}
            width={'100%'}
            border={'1px'}
            borderRadius={'1rem'}
            borderColor={'gray.200'}
        >
            <Text color={'black'} marginBottom={'1rem'}>
                Padding
            </Text>
            <Slider
                id="slider"
                defaultValue={25}
                min={0}
                max={200}
                colorScheme="teal"
                onChange={(v) => onChangeValue(v)}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
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
                <Tooltip hasArrow bg="teal.500" color="white" placement="top" isOpen={showTooltip} label={`${padding}`}>
                    <SliderThumb />
                </Tooltip>
            </Slider>
        </Flex>
    )
}
