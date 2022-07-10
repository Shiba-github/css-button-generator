import { Flex } from '@chakra-ui/react'
import React from 'react'
import { CssRenderingArea } from './cssRenderingArea/CssRenderingArea'

export const CodeArea = () => {
    return (
        <Flex width={'35rem'} height={'40rem'} bg={'white'} borderRadius={'2rem'}>
            <CssRenderingArea />
        </Flex>
    )
}
