import { Flex } from '@chakra-ui/react'
import React from 'react'
import { ButtonView } from '../../components/buttonView/ButtonView'
import { CodeArea } from '../../components/codeArea/CodeArea'
import { CssCustomArea } from '../../components/cssCustomArea/CssCustomArea'
import { CssEditArea } from '../../components/cssEditArea/CssEditArea'

const Editor = () => {
    return (
        <Flex flexDirection={'row'} height={'100%'} width={'100%'}>
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
