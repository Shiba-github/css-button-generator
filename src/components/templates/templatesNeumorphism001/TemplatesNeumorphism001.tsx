import React from 'react'
import { Flex } from '@chakra-ui/react'
import { useAppDispatch } from '../../../hooks'
import { setBackgroundColor, setColor, setPadding } from '../../buttonView/buttonViewSlice'

export const TemplatesNeumorphism001 = () => {
    // TODO：padding, colorなどいまある要素だけ適用してる。あくまでひな型
    const dispatch = useAppDispatch()
    const onClick = () => {
        dispatch(setPadding(buttonStyle.padding))
        dispatch(setColor(buttonStyle.color))
        dispatch(setBackgroundColor(buttonStyle.backgroundColor))
    }
    const buttonStyle = {
        color: 'rgba(0,0,0,1)',
        backgroundColor: '#ffffff',
        border: 'none',
        padding: '60px',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '20px',
        borderRadius: '50px',
        boxShadow: '26px 26px 51px #d9d9d9, -26px -26px 51px #ffffff',
    }
    return (
        <Flex flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
            <button style={buttonStyle} onClick={() => onClick()}>
                Neumorphism001
            </button>
        </Flex>
    )
}
