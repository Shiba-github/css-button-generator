import React from 'react'
import { css, CSSObject } from '@emotion/react'
import { Flex } from '@chakra-ui/react'
import { useAppDispatch } from '../../../hooks'
import {
    setColor,
    setHeight,
    setWidth,
    setBorder,
    setBorderRadius,
    setBackgroundColor,
    setFontSize,
} from '../../buttonView/buttonViewSlice'

// TODO：コメントアウトしてるプロパティはストア側で未対応なので要実装
export const PushNeumorphismButton = () => {
    const dispatch = useAppDispatch()
    const copyCssProps = () => {
        dispatch(setWidth(buttonStyle.width))
        dispatch(setHeight(buttonStyle.height))
        dispatch(setColor(buttonStyle.color))
        dispatch(setFontSize(buttonStyle.fontSize))
        // dispatch(setFontFamily(buttonStyle.fontFamily))
        // dispatch(setLetterSpacing(buttonStyle.letterSpacing))
        dispatch(setBorder(buttonStyle.border))
        dispatch(setBorderRadius(buttonStyle.borderRadius))
        dispatch(setBackgroundColor(buttonStyle.backgroundColor))
        // dispatch(setBoxShadow(buttonStyle.boxShadow))
    }
    const buttonStyle = {
        width: '180px',
        height: '60px',
        color: '#808080',
        fontSize: '14px',
        fontFamily: 'monospace',
        letterSpacing: '4px',
        border: 'none',
        borderRadius: '10px',
        backgroundColor: '#F0F0F3',
        boxShadow: '-12px 12px 22px #AEAEC0, 12px -12px 22px #ffffff',
        '&:active': {
            color: '#000',
            boxShadow: 'inset -12px 12px 22px #AEAEC0, inset 12px -12px 22px #ffffff',
        },
    }

    const buttonStyles = {
        ...buttonStyle,
    } as CSSObject
    const cssProps = css(buttonStyles)

    return (
        <Flex flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
            <button css={cssProps} onClick={() => copyCssProps()}>
                Button
            </button>
        </Flex>
    )
}
