import { Center, ChakraProvider, Flex } from '@chakra-ui/react'
import React from 'react'
import { Provider } from 'react-redux'
import { BackgroundColor } from './components/backgroundColor/BackgroundColor'
import { ButtonView } from './components/buttonView/ButtonView'
import { ChangeColor } from './components/changeColor/ChangeColor'
import { CodeArea } from './components/codeArea/CodeArea'
import Header from './components/header/Header'
import { Padding } from './components/padding/Padding'
import { Templates } from './components/templates/Templates'
import { store } from './store'

const App = () => {
    return (
        <Provider store={store}>
            <ChakraProvider>
                <Flex flexDirection="column">
                    <Header />
                    <Flex flexDirection={'row'} justifyContent={'center'} width={'100%'} height={'60rem'}>
                        <Flex flexDirection={'column'} alignItems={'center'} bg={'white'} width="50%" flex={1}>
                            <ChangeColor />
                            <BackgroundColor />
                            <Padding />
                        </Flex>
                        <Flex
                            flexDirection={'column'}
                            alignItems={'center'}
                            justifyContent={'center'}
                            bg={'gray'}
                            width="50%"
                            flex={3}
                        >
                            <Center>
                                <ButtonView />
                            </Center>
                            <Center>
                                <CodeArea />
                            </Center>
                            <Center>
                                <Templates />
                            </Center>
                        </Flex>
                    </Flex>
                </Flex>
            </ChakraProvider>
        </Provider>
    )
}

export default App
