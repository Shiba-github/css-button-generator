import React from 'react'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { EditColor } from './color/EditColor'
import { Padding } from './padding/Padding'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { setIsOpen } from '../cssCustomArea/cssCustomAreaSlice'
import { motion } from 'framer-motion'
import { addCssButtonAnimeVariants } from './animation/addCssButton'
import { rotateElementVariants } from './animation/rotateElement'
import { EditBorderColor } from './borderColor/EditBorderColor'
import { EditBorderStyle } from './borderStyle/EditBorderStyle'
import { EditBorderRadius } from './borderRadius/EditBorderRadius'
import { EditWidth } from './width/EditWidth'
import { EditHeight } from './height/EditHeight'
import { EditBackgroundColor } from './backgroundColor/EditBackgroundColor'

export const CssEditArea = () => {
    const dispatch = useAppDispatch()
    const isCustomAreaOpen = useAppSelector((state) => state.cssCustomArea.isOpen)

    return (
        <Flex flexDirection={'column'} alignItems={'center'} bg={'gray.200'} flex={2} zIndex={20}>
            <Text margin={'2rem'} marginBottom={'4rem'}>
                This is CSS edit area
            </Text>
            <EditWidth />
            <EditHeight />
            <EditColor />
            <EditBackgroundColor />
            <Padding />
            <EditBorderColor />
            <EditBorderStyle />
            <EditBorderRadius />
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
