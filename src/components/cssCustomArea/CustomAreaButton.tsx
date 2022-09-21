import React from 'react'
import { Button, Flex, Text } from '@chakra-ui/react'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { ChatIcon } from '@chakra-ui/icons'
import { useAppDispatch } from '../../hooks'
import { customButtonStyle } from './initStyle'

type propsType = {
    text: string
    isDisplay: boolean
    setter: ActionCreatorWithPayload<boolean>
}

export const  CustomAreaButton = ({
    text,
    isDisplay,
    setter,
}:propsType) => {
    const dispatch = useAppDispatch()
    return (
        <Flex flexDirection={'column'} justifyContent={'space-around'} width={customButtonStyle.width}>
            <Button
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={customButtonStyle.justifyContent}
                color={customButtonStyle.color}
                backgroundColor={isDisplay ? customButtonStyle.onclickBackgroundColor : customButtonStyle.backgroundColor}
                width={customButtonStyle.width}
                height={customButtonStyle.height}
                padding={customButtonStyle.padding}
                boxShadow={customButtonStyle.boxShadow}
                borderRadius={customButtonStyle.borderRadius}
                cursor={'pointer'}
                _hover={{backgroundColor: isDisplay ? customButtonStyle.whileHoverOnClickBackgroundColor : customButtonStyle.whileHoverBackgroundColor}}
                onClick={() => dispatch(setter(!isDisplay))}
            >
                <ChatIcon boxSize={'5'} marginRight={'0.5rem'} />
                <Text fontSize={customButtonStyle.fontSize}>{text}</Text>
            </Button>
        </Flex>
    )
}
