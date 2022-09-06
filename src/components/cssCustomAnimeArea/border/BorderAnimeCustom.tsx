import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { BellIcon, ChatIcon, CopyIcon } from '@chakra-ui/icons'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import {
    setDisplayAnimeBorderColor,
    setDisplayAnimeBorderRadius,
    setDisplayAnimeBorderStyle,
    setDisplayAnimeBorderWidth,
} from '../cssCustomAnimeAreaSlice'

export const BorderAnimeCustom = () => {
    // TODO:一旦適当なアイコンをおいておく
    const dispatch = useAppDispatch()
    const displayAnimeBorderColor = useAppSelector((state) => state.cssCustomAnimeArea.displayAnimeBorderColor)
    const displayAnimeBorderStyle = useAppSelector((state) => state.cssCustomAnimeArea.displayAnimeBorderStyle)
    const displayAnimeBorderWidth = useAppSelector((state) => state.cssCustomAnimeArea.displayAnimeBorderWidth)
    const displayAnimeBorderRadius = useAppSelector((state) => state.cssCustomAnimeArea.displayAnimeBorderRadius)

    return (
        <Flex flexDirection={'column'}>
            <Text fontSize={'2rem'} margin={'0.5rem'} marginLeft={'2rem'}>
                Border
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
                    backgroundColor={displayAnimeBorderColor ? 'teal.500' : 'gray.100'}
                    margin={'1rem'}
                    padding={'1rem'}
                    borderRadius={'1rem'}
                    onClick={() => dispatch(setDisplayAnimeBorderColor(!displayAnimeBorderColor))}
                >
                    Border Color
                    <ChatIcon marginTop={'1.5rem'} boxSize={'12'} />
                </Flex>
                <Flex
                    flexDirection={'column'}
                    alignItems={'center'}
                    backgroundColor={displayAnimeBorderStyle ? 'teal.500' : 'gray.100'}
                    margin={'1rem'}
                    padding={'1rem'}
                    borderRadius={'1rem'}
                    onClick={() => dispatch(setDisplayAnimeBorderStyle(!displayAnimeBorderStyle))}
                >
                    Border Style
                    <BellIcon marginTop={'1.5rem'} boxSize={'12'} />
                </Flex>
                <Flex
                    flexDirection={'column'}
                    alignItems={'center'}
                    backgroundColor={displayAnimeBorderWidth ? 'teal.500' : 'gray.100'}
                    margin={'1rem'}
                    padding={'1rem'}
                    borderRadius={'1rem'}
                    onClick={() => dispatch(setDisplayAnimeBorderWidth(!displayAnimeBorderWidth))}
                >
                    Border Width
                    <CopyIcon marginTop={'1.5rem'} boxSize={'12'} />
                </Flex>
            </Flex>
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
                    backgroundColor={displayAnimeBorderRadius ? 'teal.500' : 'gray.100'}
                    margin={'1rem'}
                    padding={'1rem'}
                    borderRadius={'1rem'}
                    onClick={() => dispatch(setDisplayAnimeBorderRadius(!displayAnimeBorderRadius))}
                >
                    Border Radius
                    <ChatIcon marginTop={'1.5rem'} boxSize={'12'} />
                </Flex>
            </Flex>
        </Flex>
    )
}
