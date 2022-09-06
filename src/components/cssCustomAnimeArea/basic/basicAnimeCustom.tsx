import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { ChatIcon } from '@chakra-ui/icons'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import {
    setDisplayAnimeBackgroundColor,
    setDisplayAnimeColor,
    setDisplayAnimeFontSize,
    setDisplayAnimeHeight,
    setDisplayAnimePadding,
    setDisplayAnimeWidth,
} from '../cssCustomAnimeAreaSlice'

export const BasicAnimeCustom = () => {
    const dispatch = useAppDispatch()
    const displayAnimeWidth = useAppSelector((state) => state.cssCustomAnimeArea.displayAnimeWidth)
    const displayAnimeHeight = useAppSelector((state) => state.cssCustomAnimeArea.displayAnimeHeight)
    const displayAnimeColor = useAppSelector((state) => state.cssCustomAnimeArea.displayAnimeColor)
    const displayAnimeBackgroundColor = useAppSelector((state) => state.cssCustomAnimeArea.displayAnimeBackgroundColor)
    const displayAnimePadding = useAppSelector((state) => state.cssCustomAnimeArea.displayAnimePadding)
    const displayAnimeFontSize = useAppSelector((state) => state.cssCustomAnimeArea.displayAnimeFontSize)
    return (
        <Flex flexDirection={'column'}>
            <Text fontSize={'2rem'} margin={'0.5rem'} marginLeft={'2rem'}>
                Basics
            </Text>
            <Flex
                flexDirection={'row'}
                justifyContent={'space-around'}
                backgroundColor={'teal.100'}
                width={'50rem'}
                height={'10rem'}
            >
                <Flex
                    flexDirection={'column'}
                    alignItems={'center'}
                    backgroundColor={displayAnimeWidth ? 'teal.500' : 'gray.100'}
                    margin={'1rem'}
                    padding={'1rem'}
                    borderRadius={'1rem'}
                    width={'7rem'}
                    onClick={() => dispatch(setDisplayAnimeWidth(!displayAnimeWidth))}
                >
                    Width
                    <ChatIcon marginTop={'1.5rem'} boxSize={'12'} />
                </Flex>
                <Flex
                    flexDirection={'column'}
                    alignItems={'center'}
                    backgroundColor={displayAnimeHeight ? 'teal.500' : 'gray.100'}
                    margin={'1rem'}
                    padding={'1rem'}
                    borderRadius={'1rem'}
                    width={'7rem'}
                    onClick={() => dispatch(setDisplayAnimeHeight(!displayAnimeHeight))}
                >
                    Height
                    <ChatIcon marginTop={'1.5rem'} boxSize={'12'} />
                </Flex>
                <Flex
                    flexDirection={'column'}
                    alignItems={'center'}
                    backgroundColor={displayAnimeColor ? 'teal.500' : 'gray.100'}
                    margin={'1rem'}
                    padding={'1rem'}
                    borderRadius={'1rem'}
                    width={'7rem'}
                    onClick={() => dispatch(setDisplayAnimeColor(!displayAnimeColor))}
                >
                    Color
                    <ChatIcon marginTop={'1.5rem'} boxSize={'12'} />
                </Flex>
                <Flex
                    flexDirection={'column'}
                    alignItems={'center'}
                    backgroundColor={displayAnimeBackgroundColor ? 'teal.500' : 'gray.100'}
                    margin={'1rem'}
                    padding={'1rem'}
                    borderRadius={'1rem'}
                    width={'7rem'}
                    onClick={() => dispatch(setDisplayAnimeBackgroundColor(!displayAnimeBackgroundColor))}
                >
                    BackgroundColor
                    <ChatIcon marginTop={'1.5rem'} boxSize={'12'} />
                </Flex>
                <Flex
                    flexDirection={'column'}
                    alignItems={'center'}
                    backgroundColor={displayAnimePadding ? 'teal.500' : 'gray.100'}
                    margin={'1rem'}
                    padding={'1rem'}
                    borderRadius={'1rem'}
                    width={'7rem'}
                    onClick={() => dispatch(setDisplayAnimePadding(!displayAnimePadding))}
                >
                    Padding
                    <ChatIcon marginTop={'1.5rem'} boxSize={'12'} />
                </Flex>
                <Flex
                    flexDirection={'column'}
                    alignItems={'center'}
                    backgroundColor={displayAnimeFontSize ? 'teal.500' : 'gray.100'}
                    margin={'1rem'}
                    padding={'1rem'}
                    borderRadius={'1rem'}
                    width={'7rem'}
                    onClick={() => dispatch(setDisplayAnimeFontSize(!displayAnimeFontSize))}
                >
                    FontSize
                    <ChatIcon marginTop={'1.5rem'} boxSize={'12'} />
                </Flex>
            </Flex>
        </Flex>
    )
}
