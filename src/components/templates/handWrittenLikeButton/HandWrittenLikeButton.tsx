import React from 'react'
import { Button, Flex } from '@chakra-ui/react'
import { useAppDispatch } from '../../../hooks'
import {
    setBackgroundColor,
    setBorderColor,
    setBorderRadius,
    setBorderStyle,
    setColor,
    setFontSize,
    setHeight,
    setPadding,
    setWidth,
} from '../../buttonView/buttonViewSlice'
import { motion } from 'framer-motion'
import { handWrittenLikeButtonVariants } from './handWrittenLikeButtonAnimation'

export const HandWrittenLikeButton = () => {
    // TODO：コメントアウトのものはストアに未実装のプロパティ
    // animationは未実装なので、一旦framer motionにて仮実装しておきます
    const dispatch = useAppDispatch()
    const onClick = () => {
        dispatch(setWidth(buttonStyle.width))
        dispatch(setHeight(buttonStyle.height))
        dispatch(setBackgroundColor(buttonStyle.backgroundColor))
        dispatch(setBorderRadius(buttonStyle.borderRadius))
        dispatch(setBorderStyle(buttonStyle.borderStyle))
        // dispatch(setBorderWidth(buttonStyle.borderWidth))
        dispatch(setBorderColor(buttonStyle.borderColor))
        // dispatch(setBoxShadow(buttonStyle.boxShadow))
        dispatch(setColor(buttonStyle.color))
        // dispatch(setCursor(buttonStyle.cursor))
        // dispatch(setFontFamily(buttonStyle.fontFamily))
        dispatch(setFontSize(buttonStyle.fontSize))
        dispatch(setPadding(buttonStyle.padding))
    }
    const buttonStyle = {
        width: '150px',
        height: '100px',
        backgroundColor: 'white',
        borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
        borderStyle: 'solid',
        borderWidth: '5px',
        borderColor: 'gray',
        boxShadow: 'rgba(0, 0, 0, .2) 15px 28px 25px -18px',
        color: '#41403e',
        cursor: 'pointer',
        fontFamily: 'Hannotate SC, Neucha, sans-serif',
        fontSize: '2rem',
        padding: '.75rem',
    }
    return (
        <Flex flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
            <Button
                as={motion.button}
                variants={handWrittenLikeButtonVariants}
                initial={handWrittenLikeButtonVariants.off}
                whileHover={handWrittenLikeButtonVariants.hover}
                whileTap={handWrittenLikeButtonVariants.tap}
                style={buttonStyle}
                onClick={() => onClick()}
            >
                Text
            </Button>
        </Flex>
    )
}
