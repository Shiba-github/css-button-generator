import React from 'react'
import { css, CSSObject } from '@emotion/react'
import { Flex } from '@chakra-ui/react'
import { useAppDispatch } from '../../../hooks'
import {
    setWidth,
    setHeight,
    setBackgroundColor,
    setBorder,
    setColor,
    setFontSize,
} from '../../buttonView/buttonViewSlice'

// TODO：コメントアウトしてるプロパティはストア側で未対応なので要実装
export const BorderGradientButton = () => {
    const dispatch = useAppDispatch()
    const copyCssProps = () => {
        dispatch(setWidth(buttonStyle.width))
        dispatch(setHeight(buttonStyle.height))
        dispatch(setBackgroundColor(buttonStyle.backgroundColor))
        dispatch(setBorder(buttonStyle.border))
        // dispatch(setBorderImage(buttonStyle.borderImage))
        // dispatch(setBorderImageSlice(buttonStyle.borderImageSlice))
        dispatch(setColor(buttonStyle.color))
        dispatch(setFontSize(buttonStyle.fontSize))
        // dispatch(setLetterSpacing(buttonStyle.letterSpacing))
    }
    const buttonStyle = {
        width: '140px',
        height: '60px',
        backgroundColor: '#000',
        border: '4px solid;',
        borderImage: 'linear-gradient(140deg, rgba(2,0,36,1) 0%, rgba(9,9,120,1) 35%, rgba(0,211,255,1) 100%)',
        borderImageSlice: '1',
        color: '#fff',
        fontSize: '14px',
        letterSpacing: '2px',
        '&:hover': {
            backgroundImage: 'linear-gradient(140deg, rgba(2,0,36,1) 0%, rgba(9,9,120,1) 35%, rgba(0,211,255,1) 100%)',
        },
        '&:active': {
            transform: 'scale(0.95)',
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
