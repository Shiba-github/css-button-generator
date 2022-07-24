import { Button, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useAppSelector } from '../../hooks'
import { openCssCustomAreaVariants } from './animation/openCssCustomAreaAnimation'
import { BorderCustom } from './border/BorderCustom'
import { CssCustomAnimeArea } from '../cssCustomAnimeArea/CssCustomAnimeArea'

export const CssCustomArea = () => {
    const openCssCustomAreaControls = useAnimation()
    const isCustomAreaOpen = useAppSelector((state) => state.cssCustomArea.isOpen)

    const [styleZIndex, setStyleZIndex] = useState(10)
    const [animationZIndex, setAnimationZIndex] = useState(9)

    const onClickAnimeTub = () => {
        setStyleZIndex(9)
        setAnimationZIndex(10)
    }

    const onClickStyleTub = () => {
        setStyleZIndex(10)
        setAnimationZIndex(9)
    }

    if (isCustomAreaOpen) {
        openCssCustomAreaControls.start('open')
    } else {
        openCssCustomAreaControls.start('close')
    }

    return (
        <Flex
            as={motion.div}
            position={'absolute'}
            backgroundColor={'teal'}
            width={'inherit'}
            height={'100vh'}
            marginTop={'3rem'}
            zIndex={10}
            left={'0rem'}
            initial={'close'}
            animate={openCssCustomAreaControls}
            variants={openCssCustomAreaVariants}
        >
            <Button
                marginTop={'-3rem'}
                position={'absolute'}
                bg={'teal'}
                height={'3rem'}
                width={'9rem'}
                fontSize={'1.5rem'}
                alignItems={'center'}
                justifyContent={'center'}
                borderRadius={'0'}
                onClick={() => onClickStyleTub()}
            >
                Style
            </Button>
            <Flex width={'66vw'} height={'100vh'} bg={'teal'} position={'absolute'} zIndex={styleZIndex}>
                <BorderCustom />
            </Flex>
            <Button
                marginTop={'-3rem'}
                position={'absolute'}
                marginLeft={'9rem'}
                bg={'teal.500'}
                height={'3rem'}
                width={'9rem'}
                fontSize={'1.5rem'}
                alignItems={'center'}
                justifyContent={'center'}
                borderRadius={0}
                onClick={() => onClickAnimeTub()}
            >
                Animation
            </Button>
            <Flex bg={'teal.500'} position={'absolute'} width={'66vw'} height={'100vh'} zIndex={animationZIndex}>
                <CssCustomAnimeArea />
            </Flex>
        </Flex>
    )
}
