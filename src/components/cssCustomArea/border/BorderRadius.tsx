import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { ChatIcon } from '@chakra-ui/icons'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { setDisplayBorderRadius } from '../cssCustomAreaSlice'

type propsType = {
    width?: string
    height?: string
    padding?: string
    color?: string
    backgroundColor?: string
    whileHoverBackgroundColor?: string
    onclickBackgroundColor?: string
    opacity?: string
    fontSize?: string
    justifyContent?: string
}

export const BorderRadius = ({
    width = '15rem',
    height = '2rem',
    padding = '0.2rem',
    color = '#fff',
    backgroundColor = '#1a202c',
    whileHoverBackgroundColor = 'gray',
    onclickBackgroundColor = 'teal.500',
    opacity = '0.5',
    fontSize = '1rem',
    justifyContent = 'start',
}: propsType) => {
    // TODO:一旦適当なアイコンをおいておく
    const dispatch = useAppDispatch()
    const displayBorderRadius = useAppSelector((state) => state.cssCustomArea.displayBorderRadius)

    return (
        <Flex flexDirection={'column'} justifyContent={'space-around'} width={width}>
            <Flex
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={justifyContent}
                color={color}
                backgroundColor={displayBorderRadius ? onclickBackgroundColor : backgroundColor}
                width={width}
                height={height}
                padding={padding}
                cursor={'pointer'}
                _hover={{ opacity: opacity, backgroundColor: whileHoverBackgroundColor }}
                onClick={() => dispatch(setDisplayBorderRadius(!displayBorderRadius))}
            >
                <ChatIcon boxSize={'5'} marginRight={'0.5rem'} />
                <Text fontSize={fontSize}>BorderRadius</Text>
            </Flex>
        </Flex>
    )
}
