import { ChakraProvider, Flex } from '@chakra-ui/react'
import React from 'react'
import { Provider } from 'react-redux'
import { ButtonView } from './components/buttonView/ButtonView'
import { store } from './store'
import { Templates } from './components/templates/Templates'
import { CodeArea } from './components/codeArea/CodeArea'
import { CssEditArea } from './components/cssEditArea/CssEditArea'
import { CssCustomArea } from './components/cssCustomArea/CssCustomArea'

const App = () => {
    return (
        <Provider store={store}>
            <ChakraProvider>
                <Flex
                    flexDirection={'row'}
                    justifyContent={'center'}
                    width={'120rem'}
                    minHeight={'60rem'}
                    height={'100%'}
                >
                    <CssEditArea />
                    <Flex flex={1} width={'60rem'} height={'inherit'}>
                        <Flex
                            width={'100%'}
                            flexDirection={'column'}
                            alignItems={'center'}
                            justifyContent={'center'}
                            bg={'black'}
                        >
                            <ButtonView />
                            <Templates />
                            <CodeArea />
                        </Flex>
                        <CssCustomArea />
                    </Flex>
                </Flex>
            </ChakraProvider>
        </Provider>
    )
}

export default App
