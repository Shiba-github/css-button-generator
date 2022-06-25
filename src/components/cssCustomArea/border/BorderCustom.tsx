import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { BellIcon, ChatIcon, CopyIcon } from '@chakra-ui/icons'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { setDisplayBorderColor, setDisplayBorderStyle, setDisplayBorderWidth } from '../cssCustomAreaSlice'

export const BorderCustom = () => {
    // TODO:一旦適当なアイコンをおいておく
    const dispatch = useAppDispatch()
    const displayBorderColor = useAppSelector((state) => state.cssCustomArea.displayBorderColor)
    const displayBorderStyle = useAppSelector((state) => state.cssCustomArea.displayBorderStyle)
    const displayBorderWidth = useAppSelector((state) => state.cssCustomArea.displayBorderWidth)

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
                    backgroundColor={displayBorderColor ? 'teal.500' : 'gray.100'}
                    margin={'1rem'}
                    padding={'1rem'}
                    borderRadius={'1rem'}
                    onClick={() => dispatch(setDisplayBorderColor(!displayBorderColor))}
                >
                    Border Color
                    <ChatIcon marginTop={'1.5rem'} boxSize={'12'} />
                </Flex>
                <Flex
                    flexDirection={'column'}
                    alignItems={'center'}
                    backgroundColor={displayBorderStyle ? 'teal.500' : 'gray.100'}
                    margin={'1rem'}
                    padding={'1rem'}
                    borderRadius={'1rem'}
                    onClick={() => dispatch(setDisplayBorderStyle(!displayBorderStyle))}
                >
                    Border Style
                    <BellIcon marginTop={'1.5rem'} boxSize={'12'} />
                </Flex>
                <Flex
                    flexDirection={'column'}
                    alignItems={'center'}
                    backgroundColor={displayBorderWidth ? 'teal.500' : 'gray.100'}
                    margin={'1rem'}
                    padding={'1rem'}
                    borderRadius={'1rem'}
                    onClick={() => dispatch(setDisplayBorderWidth(!displayBorderWidth))}
                >
                    Border Width
                    <CopyIcon marginTop={'1.5rem'} boxSize={'12'} />
                </Flex>
            </Flex>
        </Flex>
    )
}
