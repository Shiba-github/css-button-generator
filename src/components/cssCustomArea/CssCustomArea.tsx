import { Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { openCssCustomAreaVariants } from './animation/openCssCustomAreaAnimation'
import { BorderCustom } from './border/BorderCustom'
import { BasicCustom } from './basic/basicCustom'
import { setIsSelectedAnimeTopic } from '../cssCustomAnimeArea/cssCustomAnimeAreaSlice'
import { setIsSelectedBasicTopic } from './cssCustomAreaSlice'
import { BasicAnimeCustom } from '../cssCustomAnimeArea/basic/basicAnimeCustom'
import { BorderAnimeCustom } from '../cssCustomAnimeArea/border/BorderAnimeCustom'

export const CssCustomArea = () => {
    const dispatch = useAppDispatch()
    const openCssCustomAreaControls = useAnimation()
    const isCustomAreaOpen = useAppSelector((state) => state.cssCustomArea.isOpen)
    const isSelectedBasicTopic = useAppSelector((state) => state.cssCustomArea.isSelectedBasicTopic)
    const isSelectedAnimeTopic = useAppSelector((state) => state.cssCustomAnimeArea.isSelectedAnimeTopic)

    const onClickTopicHandler = (topic: string) => {
        if (topic === 'BASIC') {
            dispatch(setIsSelectedBasicTopic(true))
            dispatch(setIsSelectedAnimeTopic(false))
        } else if (topic === 'ANIMATION') {
            dispatch(setIsSelectedBasicTopic(false))
            dispatch(setIsSelectedAnimeTopic(true))
        }
    }

    if (isCustomAreaOpen) {
        openCssCustomAreaControls.start('open')
    } else {
        openCssCustomAreaControls.start('close')
    }

    return (
        <Flex position={'absolute'} width={'inherit'} height={'100vh'} marginTop={'3rem'} left={'0rem'}>
            <Flex
                as={motion.div}
                flexDirection={'column'}
                position={'absolute'}
                backgroundColor={'teal'}
                width={'inherit'}
                height={'100vh'}
                marginTop={'3rem'}
                zIndex={isSelectedBasicTopic ? 10 : 0}
                left={'0rem'}
                initial={'close'}
                animate={openCssCustomAreaControls}
                variants={openCssCustomAreaVariants}
            >
                <Flex
                    color={'white'}
                    position={'absolute'}
                    backgroundColor={'teal'}
                    width={'7rem'}
                    height={'3rem'}
                    top={'-3rem'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    fontSize={'1.5rem'}
                    cursor={'pointer'}
                    onClick={() => onClickTopicHandler('BASIC')}
                >
                    BASIC
                </Flex>
                <BasicCustom />
                <BorderCustom />
            </Flex>
            <Flex
                as={motion.div}
                flexDirection={'column'}
                position={'absolute'}
                backgroundColor={'teal.500'}
                width={'inherit'}
                height={'100vh'}
                marginTop={'3rem'}
                zIndex={isSelectedAnimeTopic ? 10 : 0}
                left={'0rem'}
                initial={'close'}
                animate={openCssCustomAreaControls}
                variants={openCssCustomAreaVariants}
            >
                <Flex
                    color={'white'}
                    position={'absolute'}
                    backgroundColor={'teal.500'}
                    width={'9rem'}
                    height={'3rem'}
                    top={'-3rem'}
                    left={'7rem'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    fontSize={'1.5rem'}
                    cursor={'pointer'}
                    onClick={() => onClickTopicHandler('ANIMATION')}
                >
                    ANIMATION
                </Flex>
                <BasicAnimeCustom />
                <BorderAnimeCustom />
            </Flex>
        </Flex>
    )
}
