import { Flex, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Text, Tooltip } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { setHeight } from '../../buttonView/buttonViewSlice'

type selectedTopicType = {
    selectedTopic: 'BASIC' | 'ANIMATION'
}

export const EditHeight = (props: selectedTopicType) => {
    let displayHeight = useAppSelector((state) => state.cssCustomArea.displayHeight)
    if (props.selectedTopic === 'BASIC') {
        displayHeight = useAppSelector((state) => state.cssCustomArea.displayHeight)
    } else if (props.selectedTopic === 'ANIMATION') {
        displayHeight = useAppSelector((state) => state.cssCustomAnimeArea.displayAnimeHeight)
    }

    const [showTooltip, setShowTooltip] = useState(false)
    const dispatch = useAppDispatch()
    const height = useAppSelector((state) => state.buttonView.height)
    const onChangeValue = (v: number) => {
        dispatch(setHeight(v.toString() + 'px'))
    }

    return (
        <>
            {displayHeight ? (
                <Flex
                    flexDirection={'column'}
                    alignItems={'center'}
                    margin={'1rem'}
                    padding={'1rem'}
                    width={'50rem'}
                    border={'1px'}
                    borderRadius={'1rem'}
                    borderColor={'gray.200'}
                >
                    <Text color={'black'} marginBottom={'1rem'} fontSize={'2rem'}>
                        Height
                    </Text>
                    <Slider
                        id="slider"
                        defaultValue={25}
                        value={parseInt(height.replace('px', ''))}
                        min={0}
                        max={300}
                        colorScheme="teal"
                        onChange={(v) => onChangeValue(v)}
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                    >
                        <SliderMark color={'black'} value={50} mt="1" ml="-2.5" fontSize="sm">
                            50px
                        </SliderMark>
                        <SliderMark color={'black'} value={150} mt="1" ml="-2.5" fontSize="sm">
                            150px
                        </SliderMark>
                        <SliderMark color={'black'} value={250} mt="1" ml="-2.5" fontSize="sm">
                            250px
                        </SliderMark>
                        <SliderTrack bg={'teal.50'}>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <Tooltip
                            hasArrow
                            bg="teal.500"
                            color="white"
                            placement="top"
                            isOpen={showTooltip}
                            label={`${height}`}
                        >
                            <SliderThumb />
                        </Tooltip>
                    </Slider>
                </Flex>
            ) : (
                ''
            )}
        </>
    )
}
