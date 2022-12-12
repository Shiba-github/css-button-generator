import React, { useState } from 'react'
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark, Tooltip, Flex, Text } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { setFontSize } from '../../buttonView/buttonViewSlice'
import { getElementUid, saveCurrentCssProps } from '../../pseudoArea/pseudoAreaSlice'

export const FontSize = () => {
    const selectedElementClass = useAppSelector((state) => state.pseudoArea.elementClassSelectedCurrent) //現在の選択中のelementClass
    const selectedElementName = useAppSelector((state) => state.pseudoArea.elementNameSelectedCurrent) //現在の選択中のelementName
    const dispatch = useAppDispatch()
    let fontSize = useAppSelector((state) => state.buttonView.fontSize)
    if (!fontSize) {
        fontSize = ''
    }
    const [showTooltip, setShowTooltip] = useState(false)
    const uid = getElementUid(selectedElementName, selectedElementClass)
    const cssStates = useAppSelector((state) => state.pseudoArea.cssStates) //現在のcssState
    const displayFontSize = cssStates[uid].customAreaDisplay.fontSize
    const onChangeValue = (v: number) => {
        dispatch(setFontSize(v.toString() + 'px'))
        dispatch(
            saveCurrentCssProps({
                elementName: selectedElementName,
                classNames: selectedElementClass,
                cssPropKey: 'fontSize',
                cssPropValue: v.toString() + 'px',
            })
        )
    }
    return (
        <>
            {displayFontSize ? (
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
                    <Text width={'6rem'} color={'black'} fontSize={'1.2rem'} marginLeft={'1rem'} marginRight={'1rem'}>
                        Font Size
                    </Text>
                    <Slider
                        id="slider"
                        defaultValue={25}
                        value={parseInt(fontSize.replace('px', ''))}
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
                        <Tooltip
                            hasArrow
                            bg="teal.500"
                            color="white"
                            placement="top"
                            isOpen={showTooltip}
                            label={`${fontSize}`}
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
