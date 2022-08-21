import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { ChatIcon } from '@chakra-ui/icons'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { setDisplayHeight, setDisplayPadding, setDisplayWidth } from '../cssCustomAreaSlice'

export const BacisCustom = () => {
    // TODO:今後設定するCSSプロパティどんなもんになるかワカメだったのでとりあえずBacisにしました
    const dispatch = useAppDispatch()
    const displayWidth = useAppSelector((state) => state.cssCustomArea.displayWidth)
    const displayHeight = useAppSelector((state) => state.cssCustomArea.displayHeight)
    const displayPadding = useAppSelector((state) => state.cssCustomArea.displayPadding)
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
                    backgroundColor={displayWidth ? 'teal.500' : 'gray.100'}
                    margin={'1rem'}
                    padding={'1rem'}
                    borderRadius={'1rem'}
                    width={'7rem'}
                    onClick={() => dispatch(setDisplayWidth(!displayWidth))}
                >
                    Width
                    <ChatIcon marginTop={'1.5rem'} boxSize={'12'} />
                </Flex>
                <Flex
                    flexDirection={'column'}
                    alignItems={'center'}
                    backgroundColor={displayHeight ? 'teal.500' : 'gray.100'}
                    margin={'1rem'}
                    padding={'1rem'}
                    borderRadius={'1rem'}
                    width={'7rem'}
                    onClick={() => dispatch(setDisplayHeight(!displayHeight))}
                >
                    Height
                    <ChatIcon marginTop={'1.5rem'} boxSize={'12'} />
                </Flex>
                <Flex
                    flexDirection={'column'}
                    alignItems={'center'}
                    backgroundColor={displayPadding ? 'teal.500' : 'gray.100'}
                    margin={'1rem'}
                    padding={'1rem'}
                    borderRadius={'1rem'}
                    width={'7rem'}
                    onClick={() => dispatch(setDisplayPadding(!displayPadding))}
                >
                    Padding
                    <ChatIcon marginTop={'1.5rem'} boxSize={'12'} />
                </Flex>
            </Flex>
        </Flex>
    )
}
