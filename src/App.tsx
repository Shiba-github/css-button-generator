import { ChakraProvider, Flex } from '@chakra-ui/react'
import React from 'react'
import { Provider } from 'react-redux'

import Header from './components/header/Header'
import Editor from './components/page/editor/Editor'
import Template from './components/page/template/Template'

import { Route, Routes } from 'react-router-dom'
import { store } from './store'


const App = () => {
    return (
        <Provider store={store}>
            <ChakraProvider>
                <Flex flexDirection="column">
                    <Header />
                    <Routes>
                        <Route index element={<Template />} />
                        <Route path="editor" element={<Editor />} />
                    </Routes>
                </Flex>
            </ChakraProvider>
        </Provider>
    )
}

export default App
