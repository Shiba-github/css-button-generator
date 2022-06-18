import { ChakraProvider, Flex } from '@chakra-ui/react'
import React from 'react'
import { Provider } from 'react-redux'
import { BackgroundColor } from './components/backgroundColor/BackgroundColor'
import { ButtonView } from './components/buttonView/ButtonView'
import { ChangeColor } from './components/changeColor/ChangeColor'
import { store } from './store'
import { Padding } from './components/padding/Padding'
import { Templates } from './components/templates/Templates'
import { CodeArea } from './components/codeArea/CodeArea'

const App = () => {
    return (
        <Provider store={store}>
            <ChakraProvider>
                <Flex flexDirection={'row'} justifyContent={'center'} width={'100%'} height={'60rem'}>
                    <Flex
                        flexDirection={'column'}
                        alignItems={'center'}
                        bg={'white'}
                        minWidth={'20rem'}
                        maxWidth={'40rem'}
                        flex={1}
                    >
                        <ChangeColor />
                        <BackgroundColor />
                        <Padding />
                    </Flex>
                    <Flex
                        flexDirection={'column'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        bg={'black'}
                        minWidth={'30rem'}
                        maxWidth={'120rem'}
                        flex={3}
                    >
                        <ButtonView />
                        <Templates />
                    </Flex>
                    <Flex
                        flexDirection={'column'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        bg={'gray'}
                        minWidth={'30rem'}
                        maxWidth={'120rem'}
                        flex={3}
                    >
                        <CodeArea />
                    </Flex>
                </Flex>
            </ChakraProvider>
        </Provider>
    )
}

export default App
