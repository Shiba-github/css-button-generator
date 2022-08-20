import { Flex } from '@chakra-ui/react'
import React from 'react'
import { CopyButton } from '../copyButton/CopyButton'
import { CssRenderingArea } from './cssRenderingArea/CssRenderingArea'

export const CodeArea = () => {
    return (
        <Flex
            width={'35rem'}
            height={'fit-content'}
            bg={'white'}
            borderRadius={'2rem'}
            flexDirection={'row'}
            justifyContent={'space-between'}
        >
            <CssRenderingArea />
            <CopyButton />
        </Flex>
    )
}
