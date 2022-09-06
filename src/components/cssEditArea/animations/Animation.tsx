import { Flex } from '@chakra-ui/react'
import React from 'react'
import { PercentPanel } from './PercentPanel'

export const Animation = () => {

    return (
        <Flex flexDirection={'row'}>
            <PercentPanel percent='0%' />
            <PercentPanel percent='10%' />
            <PercentPanel percent='20%' />
            <PercentPanel percent='30%' />
            <PercentPanel percent='40%' />
            <PercentPanel percent='50%' />
            <PercentPanel percent='60%' />
            <PercentPanel percent='70%' />
            <PercentPanel percent='80%' />
            <PercentPanel percent='90%' />
            <PercentPanel percent='100%' />
        </Flex>
    )
}
