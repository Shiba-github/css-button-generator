import { Button } from '@chakra-ui/react'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { getElementUid, saveCurrentCssProps } from '../../pseudoArea/pseudoAreaSlice'

export const CursorButton = ({ text }: { text: string }) => {
    const dispatch = useAppDispatch()
    const selectedElementClass = useAppSelector((state) => state.pseudoArea.elementClassSelectedCurrent)
    const selectedElementName = useAppSelector((state) => state.pseudoArea.elementNameSelectedCurrent)
    const uid = getElementUid(selectedElementName, selectedElementClass)
    const cssStates = useAppSelector((state) => state.pseudoArea.cssStates)
    const cursor = cssStates[uid].cssProps.cursor
    const onClickBorderStyle = (style: string) => {
        dispatch(
            saveCurrentCssProps({
                elementName: selectedElementName,
                classNames: selectedElementClass,
                cssPropKey: 'cursor',
                cssPropValue: style,
            })
        )
    }
    return (
        <Button
            onClick={() => onClickBorderStyle(text)}
            fontSize={'1.2rem'}
            margin={'0.1rem'}
            height={'2rem'}
            bg={cursor === text ? 'teal' : 'gray'}
        >
            {text}
        </Button>
    )
}
