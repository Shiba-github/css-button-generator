import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useAppSelector } from '../../../hooks'
import { getElementUid } from '../../pseudoArea/pseudoAreaSlice'
import { CursorButton } from './CursorButton'

export const EditCursor = () => {
    const selectedElementClass = useAppSelector((state) => state.pseudoArea.elementClassSelectedCurrent)
    const selectedElementName = useAppSelector((state) => state.pseudoArea.elementNameSelectedCurrent)
    const uid = getElementUid(selectedElementName, selectedElementClass)
    const cssStates = useAppSelector((state) => state.pseudoArea.cssStates)
    const displayCursor = cssStates[uid].customAreaDisplay.cursor

    return (
        <Flex>
            {displayCursor ? (
                <Flex flexDirection={'column'} backgroundColor={'gray.50'} borderRadius={'1rem'} marginTop={'1rem'}>
                    <Flex
                        flexDirection={'row'}
                        alignItems={'center'}
                        marginTop={'0.5rem'}
                        marginBottom={'0.8rem'}
                        width={'50rem'}
                        borderColor={'gray.200'}
                    >
                        <Text
                            width={'8rem'}
                            color={'black'}
                            justifyContent={'start'}
                            fontSize={'1.2rem'}
                            marginLeft={'1rem'}
                            marginRight={'1rem'}
                        >
                            Cursor
                        </Text>
                        <Flex flexDirection={'column'} width={'40rem'} alignItems={'flex-end'} paddingRight={'2rem'}>
                            <Flex flexDirection={'row'} justifyContent={'space-between'} width={'37rem'}>
                                <CursorButton text="auto" />
                                <CursorButton text="default" />
                                <CursorButton text="none" />
                                <CursorButton text="context-menu" />
                                <CursorButton text="help" />
                            </Flex>
                            <Flex flexDirection={'row'} justifyContent={'space-between'} width={'37rem'}>
                                <CursorButton text="pointer" />
                                <CursorButton text="progress" />
                                <CursorButton text="wait" />
                                <CursorButton text="cell" />
                                <CursorButton text="crosshair" />
                                <CursorButton text="zoom-in" />
                            </Flex>
                            <Flex flexDirection={'row'} justifyContent={'space-between'} width={'37rem'}>
                                <CursorButton text="text" />
                                <CursorButton text="vertical-text" />
                                <CursorButton text="alias" />
                                <CursorButton text="copy" />
                                <CursorButton text="move" />
                                <CursorButton text="zoom-out" />
                            </Flex>
                            <Flex flexDirection={'row'} justifyContent={'space-between'} width={'37rem'}>
                                <CursorButton text="no-drop" />
                                <CursorButton text="not-allowed" />
                                <CursorButton text="grab" />
                                <CursorButton text="grabbing" />
                                <CursorButton text="all-scroll" />
                            </Flex>
                            <Flex flexDirection={'row'} justifyContent={'space-between'} width={'37rem'}>
                                <CursorButton text="col-resize" />
                                <CursorButton text="row-resize" />
                                <CursorButton text="n-resize" />
                                <CursorButton text="e-resize" />
                                <CursorButton text="s-resize" />
                            </Flex>
                            <Flex flexDirection={'row'} justifyContent={'space-between'} width={'37rem'}>
                                <CursorButton text="w-resize" />
                                <CursorButton text="ne-resize" />
                                <CursorButton text="nw-resize" />
                                <CursorButton text="se-resize" />
                                <CursorButton text="sw-resize" />
                            </Flex>
                            <Flex flexDirection={'row'} justifyContent={'space-between'} width={'37rem'}>
                                <CursorButton text="ew-resize" />
                                <CursorButton text="ns-resize" />
                                <CursorButton text="nesw-resize" />
                                <CursorButton text="nwse-resize" />
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            ) : (
                ''
            )}
        </Flex>
    )
}
