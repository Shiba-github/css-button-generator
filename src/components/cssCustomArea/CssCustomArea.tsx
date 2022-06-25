import { Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useAppSelector } from '../../hooks'
import { openCssCustomAreaVariants } from './animation/openCssCustomAreaAnimation'
import { BorderCustom } from './border/BorderCustom'

export const CssCustomArea = () => {
    const openCssCustomAreaControls = useAnimation()
    const isCustomAreaOpen = useAppSelector((state) => state.cssCustomArea.isOpen)

    useEffect(() => {
        if (isCustomAreaOpen) {
            openCssCustomAreaControls.start('open')
        } else {
            openCssCustomAreaControls.start('close')
        }
    }, [isCustomAreaOpen])

    return (
        <Flex
            as={motion.div}
            position={'absolute'}
            backgroundColor={'gray'}
            height={'inherit'}
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
