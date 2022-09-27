import React, { useEffect, useRef, memo } from 'react'
import { Button, Flex, Text } from '@chakra-ui/react'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { ChatIcon } from '@chakra-ui/icons'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { customButtonStyle } from './initStyle'
import { saveCurrentCustomAreaDisplay } from '../pseudoArea/pseudoAreaSlice'
import { getAllDisplayStatus } from './cssCustomAreaSlice'

type propsType = {
    text: string
    isDisplay: boolean
    setter: ActionCreatorWithPayload<boolean>
}

export const CustomAreaButton = memo(({ text, isDisplay, setter }: propsType) => {
    const dispatch = useAppDispatch()
    // const selectedElementClass = useAppSelector((state) => state.pseudoArea.elementClassSelectedCurrent) //現在の選択中のelementClass
    // const selectedElementName = useAppSelector((state) => state.pseudoArea.elementNameSelectedCurrent) //現在の選択中のelementName
    // const allDisplayStatus = useAppSelector((state) => getAllDisplayStatus(state)) //現在のclass areaすべての表示状態
    // const isFirstRender = useRef(true)
    // useEffect(() => {
    //     // TODO:もっと負荷の軽いStateの更新方法はありそう
    //     if (isFirstRender.current) {
    //         isFirstRender.current = false
    //         return
    //     }
    //     dispatch(
    //         saveCurrentCustomAreaDisplay({
    //             elementName: selectedElementName,
    //             classNames: selectedElementClass,
    //             allCustomAreaDisplayStatus: { ...allDisplayStatus },
    //         })
    //     )
    // }, [isDisplay])
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
