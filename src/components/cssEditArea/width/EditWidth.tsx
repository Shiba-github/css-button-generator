import { Flex, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Text, Tooltip } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { setWidth } from '../../buttonView/buttonViewSlice'

type selectedTopicType = {
    selectedTopic: 'BASIC' | 'ANIMATION'
}

export const EditWidth = (props: selectedTopicType) => {
    let displayWidth = useAppSelector((state) => state.cssCustomArea.displayWidth)
    let width = useAppSelector((state) => state.buttonView.width)
    if (props.selectedTopic === 'BASIC') {
        displayWidth = useAppSelector((state) => state.cssCustomArea.displayWidth)
        width = useAppSelector((state) => state.buttonView.width)
    } else if (props.selectedTopic === 'ANIMATION') {
        displayWidth = useAppSelector((state) => state.cssCustomAnimeArea.displayAnimeWidth)
        // 選択されているパネルを取得する（仕様上、一つだけしか選択できないようになっている）
        // 取得したパネルに呼応する連想配列内のwidthを書き込めるようにする
        // 必要ならsetAnimeWidth的なfunctionを作成するべし
        width = useAppSelector((state) => state.buttonView.width)
    }
    const [showTooltip, setShowTooltip] = useState(false)
    const dispatch = useAppDispatch()
    const onChangeValue = (v: number) => {
        dispatch(setWidth(v.toString() + 'px'))
    }

    return (
        <>
            {displayWidth ? (
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
                        Width
                    </Text>
                    <Slider
                        id="slider"
                        defaultValue={25}
                        value={parseInt(width.replace('px', ''))}
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
                            label={`${width}`}
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
