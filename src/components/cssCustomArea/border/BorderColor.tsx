import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { ChatIcon } from '@chakra-ui/icons'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { setDisplayBorderColor } from '../cssCustomAreaSlice'

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

export const BorderColor = ({
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
    const displayBorderColor = useAppSelector((state) => state.cssCustomArea.displayBorderColor)

    return (
        <Flex flexDirection={'column'} justifyContent={'space-around'} width={width}>
            <Flex
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={justifyContent}
                color={color}
                backgroundColor={displayBorderColor ? onclickBackgroundColor : backgroundColor}
                width={width}
                height={height}
                padding={padding}
                cursor={'pointer'}
                _hover={{ opacity: opacity, backgroundColor: whileHoverBackgroundColor }}
                onClick={() => dispatch(setDisplayBorderColor(!displayBorderColor))}
            >
                <ChatIcon boxSize={'5'} marginRight={'0.5rem'} />
                <Text fontSize={fontSize}>BorderColor</Text>
            </Flex>
        </Flex>
    )
}
