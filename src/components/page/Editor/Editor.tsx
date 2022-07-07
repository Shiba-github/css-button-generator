import { Flex } from '@chakra-ui/react'
import React from 'react'
import { ButtonView } from '../../buttonView/ButtonView'
import { CodeArea } from '../../codeArea/CodeArea'
import { CssCustomArea } from '../../cssCustomArea/CssCustomArea'
import { CssEditArea } from '../../cssEditArea/CssEditArea'

const Editor = () => {
    return (
        <Flex flexDirection={'row'} height={'100vh'}>
            <Flex flexDirection={'column'} alignItems={'center'} bg={'gray.200'} flex={2} zIndex={20}>
                <CssEditArea />
            </Flex>
            <Flex flexDirection={'column'} bg={'#e2e8f0'} flex={1} alignItems={'center'}>
                <Flex height={'29rem'} margin={'2rem 0'} alignItems={'center'} justifyContent={'center'}>
                    <ButtonView />
                </Flex>
                <Flex>
                    <CodeArea />
                </Flex>
                <CssCustomArea />
            </Flex>
        </Flex>
    )
}

export default Editor
