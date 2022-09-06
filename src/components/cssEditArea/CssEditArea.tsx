import React from 'react'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { EditColor } from './color/EditColor'
import { FontSize } from './fontSize/FontSize'
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
import { EditBorderWidth } from './borderWidth/EditBorderWidth'
import { Animation } from './animations/Animation'

export const CssEditArea = () => {
    const dispatch = useAppDispatch()
    const isCustomAreaOpen = useAppSelector((state) => state.cssCustomArea.isOpen)
    const isSelectedBasicTopic = useAppSelector((state) => state.cssCustomArea.isSelectedBasicTopic)
    const isSelectedAnimeTopic = useAppSelector((state) => state.cssCustomAnimeArea.isSelectedAnimeTopic)

    return (
        <Flex flexDirection={'column'} alignItems={'center'} bg={'gray.200'} flex={2} zIndex={20}>
            {isSelectedBasicTopic && (
                <>
                    <Text margin={'2rem'} marginBottom={'4rem'}>
                        This is CSS edit area
                    </Text>
                    <EditWidth selectedTopic="BASIC" />
                    <EditHeight selectedTopic="BASIC" />
                    <EditColor selectedTopic="BASIC" />
                    <EditBackgroundColor selectedTopic="BASIC" />
                    <FontSize selectedTopic="BASIC" />
                    <Padding selectedTopic="BASIC" />
                    <EditBorderColor selectedTopic="BASIC" />
                    <EditBorderStyle selectedTopic="BASIC" />
                    <EditBorderWidth selectedTopic="BASIC" />
                    <EditBorderRadius selectedTopic="BASIC" />
                </>
            )}
            {isSelectedAnimeTopic && (
                <>
                    <Text margin={'2rem'} marginBottom={'4rem'} fontSize={'3rem'} color={'black'}>
                        Animation
                    </Text>
                    <Animation />
                    <EditWidth selectedTopic="ANIMATION" />
                    <EditHeight selectedTopic="ANIMATION" />
                    <EditColor selectedTopic="ANIMATION" />
                    <EditBackgroundColor selectedTopic="ANIMATION" />
                    <FontSize selectedTopic="ANIMATION" />
                    <Padding selectedTopic="ANIMATION" />
                    <EditBorderColor selectedTopic="ANIMATION" />
                    <EditBorderStyle selectedTopic="ANIMATION" />
                    <EditBorderWidth selectedTopic="ANIMATION" />
                    <EditBorderRadius selectedTopic="ANIMATION" />
                </>
            )}
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
