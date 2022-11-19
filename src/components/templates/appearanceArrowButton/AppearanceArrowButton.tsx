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
export const AppearanceArrowButton = () => {
    const dispatch = useAppDispatch()
    const copyCssProps = () => {
        dispatch(setWidth(buttonStyle.width))
        dispatch(setHeight(buttonStyle.height))
        dispatch(setColor(buttonStyle.color))
        // dispatch(setCursor(buttonStyle.cursor))
        dispatch(setBorder(buttonStyle.border))
        dispatch(setBorderRadius(buttonStyle.borderRadius))
        dispatch(setBackgroundColor(buttonStyle.backgroundColor))
        // dispatch(setBackfaceVisibility(buttonStyle.backfaceVisibility))
        // dispatch(setBoxShadow(buttonStyle.boxShadow))
        dispatch(setFontSize(buttonStyle.fontSize))
        // dispatch(setFontWeight(buttonStyle.fontWeight))
        // dispatch(setTransition(buttonStyle.transition))
    }
    const buttonStyle = {
        width: '250px',
        height: '60px',
        color: '#fff',
        cursor: 'pointer',
        border: 'solid 1px white',
        borderRadius: '8px',
        backgroundColor: '#0066ff',
        fontSize: '24px',
        letterSpacing: '2px',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
            backgroundColor: '#1a76ff',
        },
        '&:active': {
            scale: '1.02',
        },
        '&::before': {
            content: '""',
            position: 'absolute',
            padding: '30px 80px',
            bottom: '-62px',
            right: '-100px',
            backgroundColor: '#333',
            transition: 'all .2s ease-in',
        },
        '&:hover::before': {
            bottom: '-40px',
            right: '-60px',
            transform: 'rotate(-45deg)',
        },
        '&::after': {
            content: '"→"',
            position: 'absolute',
            bottom: '-62px',
            right: '-100px',
            transition: 'all .2s ease-in',
        },
        '&:hover::after': {
            bottom: '0px',
            right: '3px',
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
