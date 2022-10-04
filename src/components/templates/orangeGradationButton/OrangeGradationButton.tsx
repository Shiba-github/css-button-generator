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
    setFontSize,
} from '../../buttonView/buttonViewSlice'

// TODO：コメントアウトしてるプロパティはストア側で未対応なので要実装
export const OrangeGradationButton = () => {
    const dispatch = useAppDispatch()
    const copyCssProps = () => {
        dispatch(setWidth(buttonStyle.width))
        dispatch(setHeight(buttonStyle.height))
        // dispatch(setBoxShadow(buttonStyle.boxShadow))
        dispatch(setBorder(buttonStyle.border))
        dispatch(setBorderRadius(buttonStyle.borderRadius))
        // dispatch(setBackgroundSize(buttonStyle.backgroundSize))
        // dispatch(setBackgroundImage(buttonStyle.backgroundImage))
        dispatch(setColor(buttonStyle.color))
        dispatch(setFontSize(buttonStyle.fontSize))
        // dispatch(setFontFamily(buttonStyle.fontFamily))
        // dispatch(setLetterSpacing(buttonStyle.letterSpacing))
        // dispatch(setTransition(buttonStyle.transition))
    }
    const buttonStyle = {
        width: '230px',
        height: '70px',
        boxShadow: '0 0 20px #eee',
        border: 'none',
        borderRadius: '10px',
        backgroundSize: '200% auto',
        backgroundImage: 'linear-gradient(to left, #f6d365 0%, #fda085 51%, #f6d365 100%)',
        color: '#fff',
        fontSize: '18px',
        fontFamily: 'monospace',
        letterSpacing: '3px',
        transition: '0.5s',
        '&:hover': {
            backgroundPosition: 'right center',
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
