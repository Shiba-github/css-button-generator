import React, { memo } from 'react'
import { Button, Flex, Image, Text } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { customButtonStyle } from './initStyle'
import { saveCustomAreaDisplay } from '../pseudoArea/pseudoAreaSlice'

type propsType = {
    text: string
    isDisplay: boolean
    iconPath: string
}

export const CustomAreaButton = memo(({ text, isDisplay, iconPath }: propsType) => {
    const selectedElementName = useAppSelector((state) => state.pseudoArea.elementNameSelectedCurrent)
    const selectedElementClass = useAppSelector((state) => state.pseudoArea.elementClassSelectedCurrent)
    const dispatch = useAppDispatch()
    const updateCustomAreaDisplay = (value: boolean) => {
        dispatch(
            saveCustomAreaDisplay({
                elementName: selectedElementName,
                classNames: selectedElementClass,
                cssPropKey: text,
                isDisplay: value,
            })
        )
    }
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
                onClick={() => updateCustomAreaDisplay(!isDisplay)}
            >
                <Image src={iconPath} boxSize="20px" />
                <Text fontSize={customButtonStyle.fontSize}>&emsp;{text}</Text>
            </Button>
        </Flex>
    )
})
