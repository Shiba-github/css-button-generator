import React from 'react'
import { css } from '@emotion/react'
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
        border: 'none',
        borderRadius: '6px',
        backgroundColor: '#6cebbf',
        backfaceVisibility: 'hidden',
        // box-shadow: '0px 10px 20px rgba(108, 204, 235, 0.8)',
        fontSize: '18px',
        fontWeight: 'bold',
        padding: '12px',
        '&:hover': {
            backgroundColor: 'green',
        },
    }

    const hogehogeStyle = css(buttonStyle)

    return (
        <Flex flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
            <button css={hogehogeStyle} onClick={() => onClick()}>
                button3
            </button>
        </Flex>
    )
}
