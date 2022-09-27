import React from 'react'
import { css, CSSObject } from '@emotion/react'
import { Flex } from '@chakra-ui/react'
import { useAppDispatch } from '../../../hooks'
import {
    setBorder,
    setBorderRadius,
    setColor,
    setFontSize,
    setHeight,
    setWidth,
} from '../../buttonView/buttonViewSlice'

// TODO：コメントアウトしてるプロパティはストア側で未対応なので要実装
export const SpreadContentButton = () => {
    const dispatch = useAppDispatch()
    const copyCssProps = () => {
        dispatch(setWidth(buttonStyle.width))
        dispatch(setHeight(buttonStyle.height))
        dispatch(setColor(buttonStyle.color))
        // dispatch(setBackground(buttonStyle.background))
        dispatch(setBorder(buttonStyle.border))
        dispatch(setBorderRadius(buttonStyle.borderRadius))
        // dispatch(setPadding(buttonStyle.padding))
        dispatch(setFontSize(buttonStyle.fontSize))
        // dispatch(setFontWeight(buttonStyle.fontWeight))
        // dispatch(setTextTransform(buttonStyle.textTransform))
        // dispatch(setCursor(buttonStyle.cursor))
        dispatch(setColor(buttonStyle.transform))
    }
    const buttonStyle = {
        width: '160px',
        height: '60px',
        color: '#fff',
        background: '#3399ff',
        border: 'none',
        borderRadius: '4px',
        padding: '10px 20px',
        fontSize: '16px',
        fontWeight: '600',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transform: 'skew(0)',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: '0',
            bottom: '0',
            right: '100%',
            left: '100%',
            borderRadius: '4px',
            background: '#1f5c99',
            opacity: '0',
            zIndex: '-1',
            transition: 'all 0.3s',
        },
        '&:hover': {
            color: '#fff',
        },
        '&:hover::before': {
            left: '0',
            right: '0',
            opacity: '1',
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
