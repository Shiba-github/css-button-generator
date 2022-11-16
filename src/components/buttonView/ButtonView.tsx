import { Flex } from '@chakra-ui/react'
import { css, CSSObject } from '@emotion/react'
import React from 'react'
import { useAppSelector } from '../../hooks'

export const ButtonView = () => {
    const cssStates = useAppSelector((state) => state.pseudoArea.cssStates)
    let buttonStyle = {} as CSSObject
    for (const value of Object.values(cssStates)) {
        if (value.elementName === 'Main' && value.classNames.length === 0) {
            buttonStyle = { ...buttonStyle, ...value.cssProps }
        } else {
            const _elementName = value.elementName === 'Main' ? '' : '::' + value.elementName
            const _elementClass = value.classNames.length === 0 ? '' : ':' + value.classNames.join(':')
            const resultStr = '&' + _elementName + _elementClass
            const _buttonStyle = {
                [resultStr]: { ...value.cssProps },
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
