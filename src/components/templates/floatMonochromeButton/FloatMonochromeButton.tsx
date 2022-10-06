import React from 'react'
import { css, CSSObject } from '@emotion/react'
import { Flex } from '@chakra-ui/react'
import { useAppDispatch } from '../../../hooks'
import {
    setWidth,
    setHeight,
    setBorder,
    setColor,
    setFontSize,
    setBackgroundColor,
} from '../../buttonView/buttonViewSlice'

// TODO：コメントアウトしてるプロパティはストア側で未対応なので要実装
export const FloatMonochromeButton = () => {
    const dispatch = useAppDispatch()
    const copyCssProps = () => {
        dispatch(setWidth(buttonStyle.width))
        dispatch(setHeight(buttonStyle.height))
        dispatch(setBackgroundColor(buttonStyle.backgroundColor))
        dispatch(setBorder(buttonStyle.border))
        // dispatch(setBoxShadow(buttonStyle.boxShadow))
        dispatch(setColor(buttonStyle.color))
        dispatch(setFontSize(buttonStyle.fontSize))
        // dispatch(setFontWeight(buttonStyle.fontWeight))
        // dispatch(setTransition(buttonStyle.transition))
    }
    const buttonStyle = {
        width: '200px',
        height: '40px',
        backgroundColor: '#ededed',
        border: '2px solid #333',
        boxShadow: '5px 5px 0px 0px rgba(51, 51, 51, 1)',
        color: '#333',
        fontSize: '18px',
        fontWeight: 'bold',
        transition: '0.2s',
        '&:hover': {
            backgroundColor: '#c4c4c4',
            boxShadow: '3px 3px #333',
            color: '#fff',
        },
        '&:active': {
            backgroundColor: '#333',
            boxShadow: '0 0 #333',
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
