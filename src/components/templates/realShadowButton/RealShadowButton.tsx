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
export const RealShadowButton = () => {
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
        width: '160px',
        height: '60px',
        color: '#fff',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '10px',
        backgroundColor: 'rgb(108, 235, 142)',
        backfaceVisibility: 'hidden',
        boxShadow: '0px 10px 20px rgba(108, 235, 142, 0.8)',
        fontSize: '16px',
        fontWeight: 'bold',
        transition: 'all 0.3s cubic-bezier(0.85, 1.95, 0.45, 0.4) 0s',
        '&:hover': {
            transform: 'scale(1.08)',
            boxShadow: '8px 14px 20px rgba(108, 235, 142, 0.8)',
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
