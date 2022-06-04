import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { store } from './store'
import { Counter } from './redux_test/counter'

const App = () => {
    return (
        <Provider store={store}>
            <ChakraProvider>
                <Box>
                    <Counter />
                </Box>
            </ChakraProvider>
        </Provider>
    )
}

export default App
