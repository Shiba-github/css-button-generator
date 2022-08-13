import React, { useState } from 'react'
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Tooltip,
    Flex,
    Text,
    Button,
    Box,
} from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { setPadding } from '../../buttonView/buttonViewSlice'
import { AddIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import { addCssButtonAnimeVariants } from '../animation/addCssButton'
import { rotateElementVariants } from '../animation/rotateElement'
import { EditPaddingTop } from './paddingTop/EditPaddingTop'
import { EditPaddingRight } from './paddingRight/EditPaddingRight'
import { EditPaddingBottom } from './paddingBottom/EditPaddingBottom'
import { EditPaddingLeft } from './paddingLeft/EditPaddingLeft'

export const Padding = () => {
    const dispatch = useAppDispatch()
    const padding = useAppSelector((state) => state.buttonView.padding)
    const [showTooltip, setShowTooltip] = useState(false)
    const [isDisplayDetail, setIsDisplayDetail] = useState(false)
    const [allPadding, setAllPadding] = useState('')

    const onChangeValue = (v: number) => {
        setAllPadding(v.toString() + 'px')
        dispatch(setPadding(v.toString() + 'px'))
    }
    return (
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
                Padding
            </Text>
            <Slider
                id="slider"
                defaultValue={0}
                value={parseInt(allPadding.replace('px', ''))}
                min={0}
                max={100}
                colorScheme="teal"
                onChange={(v) => onChangeValue(v)}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
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
                <Tooltip hasArrow bg="teal.500" color="white" placement="top" isOpen={showTooltip} label={`${padding}`}>
                    <SliderThumb />
                </Tooltip>
            </Slider>
            <Button
                as={motion.button}
                margin={['0rem', '2rem']}
                variants={addCssButtonAnimeVariants}
                initial={addCssButtonAnimeVariants.off}
                whileHover={addCssButtonAnimeVariants.on}
                animate={isDisplayDetail ? addCssButtonAnimeVariants.on : addCssButtonAnimeVariants.off}
                onClick={() => setIsDisplayDetail(!isDisplayDetail)}
            >
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    as={motion.div}
                    initial={rotateElementVariants.off}
                    animate={isDisplayDetail ? rotateElementVariants.on : rotateElementVariants.off}
                    whileHover={rotateElementVariants.on}
                >
                    <AddIcon />
                </Box>
            </Button>
            {isDisplayDetail && (
                <>
                    <EditPaddingTop />
                    <EditPaddingRight />
                    <EditPaddingBottom />
                    <EditPaddingLeft />
                </>
            )}
        </Flex>
    )
}
