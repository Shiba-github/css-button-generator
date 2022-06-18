import { Flex } from '@chakra-ui/react'
import React from 'react'
import { CssRenderingArea } from './cssRenderingArea/CssRenderingArea'

export const CodeArea = () => {
    return (
        <Flex width={'25rem'} height={'40rem'} bg={'white'}>
            <CssRenderingArea />
        </Flex>
    )
}
