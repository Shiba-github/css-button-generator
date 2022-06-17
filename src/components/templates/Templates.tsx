import React from "react"
import { Flex } from "@chakra-ui/react"
import { TemplatesNeumophism001 } from "./templatesNeumorphism001/TemplatesNeumophism001"


export const Templates = () => {
    return (
        <Flex flexDirection={'row'} alignItems={'center'} justifyContent={'center'} marginTop={'10rem'}>
            <TemplatesNeumophism001/>
        </Flex>
    )
}