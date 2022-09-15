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
        width: '140px',
        height: '60px',
        color: '#fff',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '6px',
        backgroundColor: '#6cebbf',
        backfaceVisibility: 'hidden',
        boxShadow: '0px 10px 20px #6cebbf',
        fontSize: '18px',
        fontWeight: 'bold',
        padding: '12px',
        transition: 'box-shadow 0.3s cubic-bezier(0.85, 1.97, 0.46, 0.4) 0s, transform',
        '&:hover': {
            backgroundColor: 'green',
        },
    }

    const buttonStyles = {
        ...buttonStyle,
    } as CSSObject
    const cssProps = css(buttonStyles)

    return (
        <Flex flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
            <button css={cssProps} onClick={() => onClick()}>
                button3
            </button>
        </Flex>
    )
}
