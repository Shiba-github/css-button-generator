import { Button, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useAppSelector } from '../../hooks'
import { openCssCustomAreaVariants } from './animation/openCssCustomAreaAnimation'
import { BorderCustom } from './border/BorderCustom'
import { BacisCustom } from './basic/basicCustom'

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
            flexDirection={'column'}
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
            <BacisCustom />
            <BorderCustom />
        </Flex>
    )
}
