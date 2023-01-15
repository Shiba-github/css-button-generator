import { Flex } from '@chakra-ui/react'
import { css, CSSObject } from '@emotion/react'
import React from 'react'
import { useAppSelector } from '../../hooks'

export const ButtonView = () => {
    const cssStates = useAppSelector((state) => state.pseudoArea.cssStates)
    let buttonStyle = {} as CSSObject
    for (const value of Object.values(cssStates)) {
        if (value.elementName === 'Main' && value.classNames.length === 0) {
            for (const [cssPropsKey, cssPropsValue] of Object.entries(value.cssProps)) {
                if (value.customAreaDisplay[cssPropsKey]) {
                    buttonStyle = { ...buttonStyle, [cssPropsKey]: cssPropsValue }
                }
            }
        } else {
            const _elementName = value.elementName === 'Main' ? '' : '::' + value.elementName
            const _elementClass = value.classNames.length === 0 ? '' : ':' + value.classNames.join(':')
            const resultStr = '&' + _elementName + _elementClass
            let _buttonStyle = {} as CSSObject
            for (const [cssPropsKey, cssPropsValue] of Object.entries(value.cssProps)) {
                if (value.customAreaDisplay[cssPropsKey]) {
                    _buttonStyle = {
                        [resultStr]: { ..._buttonStyle, [cssPropsKey]: cssPropsValue },
                    }
                }
            }
            buttonStyle = { ...buttonStyle, ..._buttonStyle }
        }
    }
    const buttonStyles = {
        ...buttonStyle,
    } as CSSObject
    const cssProps = css(buttonStyles)

    return (
        <Flex height={'100%'} alignItems={'center'} justifyContent={'center'}>
            <button css={cssProps}>Text</button>
        </Flex>
    )
}
