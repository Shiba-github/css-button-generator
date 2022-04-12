import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

const App = () => {
    return (
        <ChakraProvider>
            <Box> hello world</Box>
        </ChakraProvider>
    )
}

export default App