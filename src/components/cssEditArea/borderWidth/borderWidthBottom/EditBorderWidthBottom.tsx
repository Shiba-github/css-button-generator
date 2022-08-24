import { Flex, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Text, Tooltip } from '@chakra-ui/react'
import React, { memo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { setBorderWidth } from '../../../buttonView/buttonViewSlice'

export const EditBorderWidthBottom = memo(() => {
    const dispatch = useAppDispatch()
    const borderWidth = useAppSelector((state) => state.buttonView.borderWidth)
    const [showTooltipBorderWidthBottom, setShowTooltipBorderWidthBottom] = useState(false)
    const getBorderWidth = () => {
        const borderWidthList = borderWidth.split(' ')
        if (borderWidthList.length === 4) {
            return borderWidthList[2]
        } else {
            return borderWidth
        }
    }
    const onChangeValue = (v: number) => {
        const borderWidthList = borderWidth.split(' ')
        if (borderWidthList.length === 4) {
            borderWidthList[2] = v.toString() + 'px'
            dispatch(setBorderWidth(borderWidthList.join(' ')))
        } else {
            dispatch(setBorderWidth(`${borderWidth} ${borderWidth} ${borderWidth} ${borderWidth}`))
        }
    }
    return (
        <Flex flexDirection={'row'} alignItems={'center'} width={'50rem'} marginTop={'1rem'}>
            <Text
                display={'flex'}
                justifyContent={'flex-end'}
                alignItems={'center'}
                color={'black'}
                width={'12rem'}
                marginRight={'2rem'}
            >
                BorderWidth Bottom
            </Text>
            <Slider
                id="borderWidth-bottom"
                defaultValue={0}
                value={parseInt(getBorderWidth().replace('px', ''))}
                min={0}
                max={100}
                colorScheme="teal"
                onChange={(v) => onChangeValue(v)}
                onMouseEnter={() => setShowTooltipBorderWidthBottom(true)}
                onMouseLeave={() => setShowTooltipBorderWidthBottom(false)}
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
                    placement="bottom"
                    isOpen={showTooltipBorderWidthBottom}
                    label={getBorderWidth()}
                >
                    <SliderThumb />
                </Tooltip>
            </Slider>
        </Flex>
    )
})