import { Flex } from '@chakra-ui/react'
import React from 'react'
import { ButtonView } from '../../buttonView/ButtonView'
import { CodeArea } from '../../codeArea/CodeArea'
import { CssCustomArea } from '../../cssCustomArea/CssCustomArea'
import { CssEditArea } from '../../cssEditArea/CssEditArea'

const Editor = () => {
    return (
        <Flex flexDirection={'row'} height={'100vh'}>
            <CssEditArea />
            <Flex flexDirection={'column'} bg={'#e2e8f0'} flex={1} alignItems={'center'}>
                <ButtonView />
                <CodeArea />
                <CssCustomArea />
            </Flex>
        </Flex>
    )
}

export default Editor
