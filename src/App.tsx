import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { store } from './store'
import { ButtonView } from './components/buttonView/buttonView'
import { ChangeColor } from './components/changeColor/changeColor'

const App = () => {
    return (
        <Provider store={store}>
            <ChakraProvider>
                <ChangeColor />
                <ButtonView />
            </ChakraProvider>
        </Provider>
    )
}

export default App
