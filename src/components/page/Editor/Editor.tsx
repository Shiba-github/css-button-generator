import { Flex } from '@chakra-ui/react'
import React from 'react'
import { BackgroundColor } from '../../backgroundColor/BackgroundColor'
import { ButtonView } from '../../buttonView/ButtonView'
import { ChangeColor } from '../../changeColor/ChangeColor'
import { CodeArea } from '../../codeArea/CodeArea'
import { Padding } from '../../padding/Padding'

const Editor = () => {
    return (
        <div>
            <Flex flexDirection={'row'}>
                <Flex flexDirection={'column'} alignItems={'center'} bg={'gray.200'} flex={2}>
                    <ChangeColor />
                    <BackgroundColor />
                    <Padding />
                </Flex>
                <Flex flexDirection={'column'} bg={'gray'} flex={1}>
                    <Flex flex={3}>
                        <ButtonView />
                    </Flex>
                    <Flex flex={7}>
                        <CodeArea />
                    </Flex>
                </Flex>
            </Flex>
        </div>
    )
}

export default Editor
