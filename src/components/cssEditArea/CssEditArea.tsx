import React from 'react'
import { Flex } from '@chakra-ui/react'
import { EditColor } from './color/EditColor'
import { FontSize } from './fontSize/FontSize'
import { Padding } from './padding/Padding'
import { EditBorderColor } from './borderColor/EditBorderColor'
import { EditBorderStyle } from './borderStyle/EditBorderStyle'
import { EditBorderRadius } from './borderRadius/EditBorderRadius'
import { EditWidth } from './width/EditWidth'
import { EditHeight } from './height/EditHeight'
import { EditBackgroundColor } from './backgroundColor/EditBackgroundColor'
import { EditBorderWidth } from './borderWidth/EditBorderWidth'
import { EditCursor } from './cursor/EditCursor'
import { EditBoxShadow } from './boxShadow/EditBoxShadow'

export const CssEditArea = () => {
    return (
        <Flex flexDirection={'column'} alignItems={'center'}>
            <EditWidth />
            <EditHeight />
            <EditColor />
            <EditBackgroundColor />
            <FontSize />
            <Padding />
            <EditCursor />
            <EditBoxShadow />
            <EditBorderColor />
            <EditBorderStyle />
            <EditBorderWidth />
            <EditBorderRadius />
        </Flex>
    )
}
