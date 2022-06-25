import { AddIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { AlphaPicker, ChromePicker, ColorResult, HuePicker } from 'react-color'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { setColor } from '../../buttonView/buttonViewSlice'
import { addCssButtonAnimeVariants } from '../animation/addCssButton'
import { rotateElementVariants } from '../animation/rotateElement'

export const ChangeColor = () => {
    const dispatch = useAppDispatch()
    const colorRgb = useAppSelector((state) => state.buttonView.color)
    const [isDisplayDetail, setIsDisplayDetail] = useState(false)
    const handleChange = (color: ColorResult) => {
        const rgba = `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`
        dispatch(setColor(rgba))
    }
    return (
        <Flex flexDirection={'row'} alignItems={'center'}>
            <Text color={'blackAlpha.800'} marginRight={'2rem'} fontSize={'2rem'}>
                Color
            </Text>
            <Box>
                <HuePicker color={colorRgb} onChange={handleChange} />
                <AlphaPicker color={colorRgb} onChange={handleChange} />
            </Box>
            <Button
                as={motion.button}
                marginLeft={'2rem'}
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
            {isDisplayDetail ? (
                <Box marginLeft={'1rem'}>
                    <ChromePicker color={colorRgb} onChange={handleChange} />
                </Box>
            ) : (
                ''
            )}
        </Flex>
    )
}
