import { Flex } from '@chakra-ui/react'
import React from 'react'
import { CopyButton } from '../copyButton/CopyButton'
import { CssRenderingArea } from './cssRenderingArea/CssRenderingArea'

export const CodeArea = () => {
    return (
        <Flex
            width={'30rem'}
            height={'15rem'}
            bg={'white'}
            borderRadius={'2rem'}
            flexDirection={'row'}
            overflowY={'scroll'}
            overflowX={'hidden'}
            justifyContent={'space-between'}
        >
            <CssRenderingArea />
            <CopyButton />
        </Flex>
    )
}
