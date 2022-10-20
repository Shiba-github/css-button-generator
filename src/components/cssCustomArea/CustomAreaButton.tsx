import React, { memo, useEffect, useRef } from 'react'
import { Button, Flex, Text } from '@chakra-ui/react'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { ChatIcon } from '@chakra-ui/icons'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { customButtonStyle } from './initStyle'
import { removeCurrentCssCodes, saveCurrentCssCodes, saveCurrentCustomAreaDisplay } from '../pseudoArea/pseudoAreaSlice'
import { getAllCssProps } from '../buttonView/buttonViewSlice'
import { getAllDisplayStatus } from './cssCustomAreaSlice'

type propsType = {
    text: string
    isDisplay: boolean
    setter: ActionCreatorWithPayload<boolean>
}

export const CustomAreaButton = memo(({ text, isDisplay, setter }: propsType) => {
    const isFirstRender = useRef(true)
    const selectedElementName = useAppSelector((state) => state.pseudoArea.elementNameSelectedCurrent)
    const selectedElementClass = useAppSelector((state) => state.pseudoArea.elementClassSelectedCurrent)
    const dispatch = useAppDispatch()
    const allCustomDisplayStatus = useAppSelector((state) => getAllDisplayStatus(state))
    const currentAllCssProps = useAppSelector((state) => getAllCssProps(state))
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }
        let cssVal = ''
        for (const [key, value] of Object.entries(currentAllCssProps)) {
            if (key === text) {
                cssVal = value
            }
        }
        if (isDisplay) {
            dispatch(
                saveCurrentCssCodes({
                    elementName: selectedElementName,
                    classNames: selectedElementClass,
                    cssProp: text,
                    cssValue: cssVal,
                })
            )
        } else {
            dispatch(
                removeCurrentCssCodes({
                    elementName: selectedElementName,
                    classNames: selectedElementClass,
                    cssProp: text,
                })
            )
        }
        dispatch(
            saveCurrentCustomAreaDisplay({
                elementName: selectedElementName,
                classNames: selectedElementClass,
                allCustomAreaDisplayStatus: allCustomDisplayStatus,
            })
        )
    }, [isDisplay])
    return (
        <Flex flexDirection={'column'} justifyContent={'space-around'} width={customButtonStyle.width}>
            <Button
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={customButtonStyle.justifyContent}
                color={customButtonStyle.color}
                backgroundColor={
                    isDisplay ? customButtonStyle.onclickBackgroundColor : customButtonStyle.backgroundColor
                }
                width={customButtonStyle.width}
                height={customButtonStyle.height}
                padding={customButtonStyle.padding}
                boxShadow={customButtonStyle.boxShadow}
                borderRadius={customButtonStyle.borderRadius}
                cursor={'pointer'}
                _hover={{
                    backgroundColor: isDisplay
                        ? customButtonStyle.whileHoverOnClickBackgroundColor
                        : customButtonStyle.whileHoverBackgroundColor,
                }}
                onClick={() => dispatch(setter(!isDisplay))}
            >
                <ChatIcon boxSize={'5'} marginRight={'0.5rem'} />
                <Text fontSize={customButtonStyle.fontSize}>{text}</Text>
            </Button>
        </Flex>
    )
})
