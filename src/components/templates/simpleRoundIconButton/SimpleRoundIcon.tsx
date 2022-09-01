import React, { CSSProperties, useState } from 'react'
import { Box, Button, Flex } from '@chakra-ui/react'
import { useAppDispatch } from '../../../hooks'
import {
    setBackgroundColor,
    setBorderColor,
    setBorderRadius,
    setBorderStyle,
    setBorderWidth,
    setColor,
    setHeight,
    setPadding,
    setWidth,
} from '../../buttonView/buttonViewSlice'
import { motion } from 'framer-motion'
import { SimpleRoundIconButtonVariants } from './SimpleRoundIconButtonAnimation'

import home from './home.png'

export const SimpleRoundIconButton = () => {
    // TODO：コメントアウトのものはストアに未実装のプロパティ
    // animationは未実装なので、一旦framer motionにて仮実装しておきます
    const dispatch = useAppDispatch()
    const [isHover, setIsHover] = useState(false)
    const onClick = () => {
        dispatch(setWidth(buttonStyle.width))
        dispatch(setHeight(buttonStyle.height))
        dispatch(setBackgroundColor(buttonStyle.backgroundColor))
        dispatch(setBorderRadius(buttonStyle.borderRadius))
        dispatch(setBorderStyle(buttonStyle.borderStyle))
        dispatch(setBorderWidth(buttonStyle.borderWidth))
        dispatch(setBorderColor(buttonStyle.borderColor))
        // dispatch(setBoxShadow(buttonStyle.boxShadow))
        dispatch(setColor(buttonStyle.color))
        // dispatch(setCursor(buttonStyle.cursor))
        dispatch(setPadding(buttonStyle.padding))
        // dispatch(setBakcgroungImage(buttonStyle.backgroundImage))
        // dispatch(setBackgroundSize(buttonStyle.backgroundSize))
        // dispatch(setBackgroundRepeat(buttonStyle.backgroundRepeat))
        // dispatch(setBackgroundPosition(buttonStyle.backgroundPosition))
    }
    const buttonStyle = {
        width: '70px',
        height: '70px',
        backgroundColor: 'transparent',
        backgroundImage: `url(${home})`,
        borderRadius: '50%',
        borderStyle: 'solid',
        borderWidth: '3px',
        borderColor: '#1FE88A',
        boxShadow: 'rgba(0, 0, 0, .2) 15px 28px 25px -18px',
        color: '#41403e',
        cursor: 'pointer',
        padding: '.75rem',
        backgroundSize: '70%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }

    const pseudoStyle: CSSProperties = {
        position: 'absolute',
    }

    return (
        <Flex flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
            {/* cssにしたときはbeforeで代用予定 */}
            <Box
                as={motion.div}
                variants={SimpleRoundIconButtonVariants}
                initial={SimpleRoundIconButtonVariants.pseudoInit}
                animate={
                    isHover ? SimpleRoundIconButtonVariants.pseudoHover : SimpleRoundIconButtonVariants.pseudoHoverOut
                }
                whileHover={
                    isHover ? SimpleRoundIconButtonVariants.pseudoHover : SimpleRoundIconButtonVariants.pseudoHoverOut
                }
                style={pseudoStyle}
            />
            <Button
                as={motion.button}
                variants={SimpleRoundIconButtonVariants}
                initial={SimpleRoundIconButtonVariants.off}
                whileHover={SimpleRoundIconButtonVariants.hover}
                whileTap={SimpleRoundIconButtonVariants.tap}
                style={buttonStyle}
                onClick={() => onClick()}
                onHoverStart={() => setIsHover(true)}
                onHoverEnd={() => setIsHover(false)}
            ></Button>
        </Flex>
    )
}
