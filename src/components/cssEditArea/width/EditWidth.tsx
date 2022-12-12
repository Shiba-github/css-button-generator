import { Flex, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Text, Tooltip } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { getElementUid, saveCurrentCssProps } from '../../pseudoArea/pseudoAreaSlice'

export const EditWidth = () => {
    const selectedElementClass = useAppSelector((state) => state.pseudoArea.elementClassSelectedCurrent) //現在の選択中のelementClass
    const selectedElementName = useAppSelector((state) => state.pseudoArea.elementNameSelectedCurrent) //現在の選択中のelementName
    const uid = getElementUid(selectedElementName, selectedElementClass)
    const cssStates = useAppSelector((state) => state.pseudoArea.cssStates) //現在のcssState
    const [showTooltip, setShowTooltip] = useState(false)
    const dispatch = useAppDispatch()
    let width = cssStates[uid].cssProps.width
    if (!width) {
        width = ''
    }
    const displayWidth = cssStates[uid].customAreaDisplay.width
    const onChangeValue = (v: number) => {
        dispatch(
            saveCurrentCssProps({
                elementName: selectedElementName,
                classNames: selectedElementClass,
                cssPropKey: 'width',
                cssPropValue: v.toString() + 'px',
            })
        )
    }
    return (
        <>
            {displayWidth ? (
                <Flex
                    flexDirection={'row'}
                    alignItems={'center'}
                    marginTop={'1rem'}
                    paddingTop={'0.5rem'}
                    paddingBottom={'0.8rem'}
                    width={'50rem'}
                    border={'1px'}
                    borderRadius={'1rem'}
                    borderColor={'gray.200'}
                    backgroundColor={'gray.50'}
                >
                    <Text color={'black'} fontSize={'1.2rem'} marginLeft={'1rem'} marginRight={'1rem'}>
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
