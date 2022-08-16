import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { ChatIcon } from '@chakra-ui/icons'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { setDisplayWidth } from '../cssCustomAreaSlice'

export const BacisCustom = () => {
    // TODO:今後設定するCSSプロパティどんなもんになるかワカメだったのでとりあえずBacisにしました
    const dispatch = useAppDispatch()
    const displayWidth = useAppSelector((state) => state.cssCustomArea.displayWidth)
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
            </Flex>
        </Flex>
    )
}
