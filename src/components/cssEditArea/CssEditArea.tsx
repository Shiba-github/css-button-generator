import React from 'react'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { BackgroundColor } from './backgroundColor/BackgroundColor'
import { ChangeColor } from './changeColor/ChangeColor'
import { Padding } from './padding/Padding'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { setIsOpen } from '../cssCustomArea/cssCustomAreaSlice'
import { motion } from 'framer-motion'
import { addCssButtonAnimeVariants } from './animation/addCssButton'
import { rotateElementVariants } from './animation/rotateElement'
import { EditBorderColor } from './borderColor/EditBorderColor'
import { EditBorderStyle } from './borderStyle/EditBorderStyle'

export const CssEditArea = () => {
    const dispatch = useAppDispatch()
    const isCustomAreaOpen = useAppSelector((state) => state.cssCustomArea.isOpen)

    return (
        <Flex flexDirection={'column'} alignItems={'center'} bg={'white'} flex={1} zIndex={'20'}>
            <Text margin={'2rem'} marginBottom={'4rem'}>
                This is CSS edit area
            </Text>
            <ChangeColor />
            <BackgroundColor />
            <Padding />
            <EditBorderColor />
            <EditBorderStyle />
            <Button
                as={motion.button}
                margin={'4rem'}
                variants={addCssButtonAnimeVariants}
                initial={addCssButtonAnimeVariants.off}
                whileHover={addCssButtonAnimeVariants.on}
                onClick={() => dispatch(setIsOpen(!isCustomAreaOpen))}
            >
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    as={motion.div}
                    initial={rotateElementVariants.off}
                    whileHover={rotateElementVariants.on}
                >
                    <AddIcon />
                </Box>
            </Button>
        </Flex>
    )
}
