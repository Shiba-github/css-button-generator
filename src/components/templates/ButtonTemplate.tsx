import React from 'react'
import { css, CSSObject } from '@emotion/react'
import { Flex } from '@chakra-ui/react'
import { useAppDispatch } from '../../hooks'
import { createNewCssStates, saveCurrentCssProps, saveCustomAreaDisplay } from '../pseudoArea/pseudoAreaSlice'

type cssStyles = {
    width?: string
    height?: string
    backgroundColor?: string
    borderWidth?: string
    borderStyle?: string
    borderColor?: string
    color?: string
    fontSize?: string
}
type buttonStyles =
    | cssStyles
    | {
          '&:hover'?: cssStyles
          '&:active'?: cssStyles
      }

type newArray = {
    [key: string]: {
        [key: string]: string
    }
}

export const ButtonTemplate = (buttonStyle: buttonStyles) => {
    const dispatch = useAppDispatch()
    const adaptCssProps = () => {
        const _buttonStyle: newArray = {}
        _buttonStyle['Main'] = {}
        for (const [key, value] of Object.entries(buttonStyle)) {
            // 利用しやすいように成形する
            if (!key.toString().includes('&')) {
                _buttonStyle['Main'] = {
                    ..._buttonStyle['Main'],
                    [key]: value,
                }
            } else {
                _buttonStyle[key] = value
            }
        }
        for (const [key, value] of Object.entries(_buttonStyle)) {
            const _key = key.replace('&::', '')
            let elementName
            let classNames
            if (!(_key[0] === '&') && _key !== 'Main') {
                elementName = _key.substring(0, _key.indexOf(':'))
                classNames = _key.replace('&:', '').split(':')
                classNames.shift()
            } else {
                elementName = 'Main'
                classNames = _key.replace('&:', '').split(':')
                if (classNames[0] === 'Main') {
                    classNames.length = 0
                }
            }
            dispatch(
                createNewCssStates({
                    elementName: elementName,
                    classNames: classNames,
                })
            )
            for (const [cssPropKey, cssPropValue] of Object.entries(value)) {
                if (typeof cssPropValue === 'string') {
                    dispatch(
                        saveCurrentCssProps({
                            elementName: elementName,
                            classNames: classNames,
                            cssPropKey: cssPropKey,
                            cssPropValue: cssPropValue,
                        })
                    )
                    dispatch(
                        saveCustomAreaDisplay({
                            elementName: elementName,
                            classNames: classNames,
                            cssPropKey: cssPropKey,
                            isDisplay: true,
                        })
                    )
                }
            }
        }
    }
    const buttonStyles = {
        ...buttonStyle,
    } as CSSObject
    const cssProps = css(buttonStyles)

    return (
        <Flex flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
            <button css={cssProps} onClick={() => adaptCssProps()}>
                Button
            </button>
        </Flex>
    )
}
