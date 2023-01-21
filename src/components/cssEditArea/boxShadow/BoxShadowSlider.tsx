import { Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Tooltip } from '@chakra-ui/react'
import React, { useState } from 'react'

type boxShadowProps = {
    uid: number
    text: string
    inset: string
    offsetX: number
    offsetY: number
    blurRadius: number
    spreadRadius: number
    color: string
}
type boxShadowPropsName = 'offsetX' | 'offsetY' | 'blurRadius' | 'spreadRadius'

export const BoxShadowSlider = ({
    propsName,
    selectedBoxShadowProps,
    setSelectedBoxShadowProps,
}: {
    propsName: boxShadowPropsName
    selectedBoxShadowProps: boxShadowProps
    setSelectedBoxShadowProps: React.Dispatch<boxShadowProps>
}) => {
    const [showTooltip, setShowTooltip] = useState(false)
    const onChangeValue = (v: number) => {
        setSelectedBoxShadowProps({
            ...selectedBoxShadowProps,
            [`${propsName}`]: v,
        })
    }
    return (
        <>
            <Slider
                width={'25rem'}
                id="slider"
                defaultValue={propsName === 'offsetX' || propsName === 'offsetY' ? 0 : 0}
                value={selectedBoxShadowProps[propsName]}
                min={propsName === 'offsetX' || propsName === 'offsetY' ? -100 : 0}
                max={propsName === 'offsetX' || propsName === 'offsetY' ? 100 : 100}
                colorScheme="teal"
                onChange={(v) => onChangeValue(v)}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                <SliderMark
                    color={'black'}
                    value={propsName === 'offsetX' || propsName === 'offsetY' ? -50 : 25}
                    mt="1"
                    ml="-2.5"
                    fontSize="sm"
                >
                    {propsName === 'offsetX' || propsName === 'offsetY' ? '-50px' : '25px'}
                </SliderMark>
                <SliderMark
                    color={'black'}
                    value={propsName === 'offsetX' || propsName === 'offsetY' ? 0 : 50}
                    mt="1"
                    ml="-2.5"
                    fontSize="sm"
                >
                    {propsName === 'offsetX' || propsName === 'offsetY' ? '0px' : '50px'}
                </SliderMark>
                <SliderMark
                    color={'black'}
                    value={propsName === 'offsetX' || propsName === 'offsetY' ? 50 : 75}
                    mt="1"
                    ml="-2.5"
                    fontSize="sm"
                >
                    {propsName === 'offsetX' || propsName === 'offsetY' ? '50px' : '75px'}
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
                    label={selectedBoxShadowProps[propsName]}
                >
                    <SliderThumb />
                </Tooltip>
            </Slider>
        </>
    )
}
