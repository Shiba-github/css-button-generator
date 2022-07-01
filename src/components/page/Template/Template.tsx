import { Flex } from '@chakra-ui/react'
import React from 'react'
import { TemplatesNeumophism001 } from '../../templates/templatesNeumorphism001/TemplatesNeumophism001'

const Template = () => {
    return (
        <Flex bg={'twitter.200'} flexDirection={'column'} alignItems={'center'}>
            <Flex flexDirection={'row'} alignItems={'center'} p={4}>
                <TemplatesNeumophism001 />
                <TemplatesNeumophism001 />
                <TemplatesNeumophism001 />
                <TemplatesNeumophism001 />
            </Flex>
            <Flex flexDirection={'row'} alignItems={'center'} p={4}>
                <TemplatesNeumophism001 />
                <TemplatesNeumophism001 />
                <TemplatesNeumophism001 />
                <TemplatesNeumophism001 />
            </Flex>
            <Flex flexDirection={'row'} alignItems={'center'} p={4}>
                <TemplatesNeumophism001 />
                <TemplatesNeumophism001 />
                <TemplatesNeumophism001 />
                <TemplatesNeumophism001 />
            </Flex>
        </Flex>
    )
}

export default Template
