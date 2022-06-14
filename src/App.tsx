import React from 'react'
import { Center, ChakraProvider, Flex } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { store } from './store'
import { ButtonView } from './components/buttonView/buttonView'
import { ChangeColor } from './components/changeColor/changeColor'

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
                    </Flex>
                    <Flex
                        flexDirection={'column'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        bg={'black'}
                        minWidth={'60rem'}
                        maxWidth={'120rem'}
                        flex={3}
                    >
                        <ButtonView />
                    </Flex>
                </Flex>
            </ChakraProvider>
        </Provider>
    )
}

export default App
