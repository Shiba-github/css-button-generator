import { Flex } from '@chakra-ui/react'
import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useAppSelector } from '../../hooks'
import { openCssCustomAreaVariants } from './animation/openCssCustomAreaAnimation'
import { BorderCustom } from './border/BorderCustom'

export const CssCustomArea = () => {
    const openCssCustomAreaControls = useAnimation()
    const isCustomAreaOpen = useAppSelector((state) => state.cssCustomArea.isOpen)

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
            height={'100vh'}
            width={'inherit'}
            zIndex={10}
            left={'0rem'}
            initial={'close'}
            animate={openCssCustomAreaControls}
            variants={openCssCustomAreaVariants}
        >
            <BorderCustom />
        </Flex>
    )
}
