import React from 'react'
import { css, CSSObject } from '@emotion/react'
import { Flex } from '@chakra-ui/react'
import { useAppDispatch } from '../../../hooks'
import { setPadding } from '../../buttonView/buttonViewSlice'

export const Templates003 = () => {
    const dispatch = useAppDispatch()
    const onClick = () => {
        dispatch(setPadding(buttonStyle.padding))
    }
    const buttonStyle = {
        width: '10px',
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
        padding: '12px',
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
            <button css={cssProps} onClick={() => onClick()}>
                Button
            </button>
        </Flex>
    )
}
