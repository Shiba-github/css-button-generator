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
            <Flex flexDirection={'column'} bg={'gray'} flex={1}>
                <Flex flex={3}>
                    <ButtonView />
                </Flex>
                <Flex flex={7}>
                    <CodeArea />
                </Flex>
                <CssCustomArea />
            </Flex>
        </Flex>
    )
}

export default Editor
