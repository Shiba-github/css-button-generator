import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { CustomAreaButton } from './CustomAreaButton'
import { createNewCssStates, getElementUid } from '../pseudoArea/pseudoAreaSlice'
import WidthIcon from '../../img/width/width.png'
import HeightIcon from '../../img/height/height.png'
import backgroundColorIcon from '../../img/backgroundColor/backgroundColor.png'
import colorIcon from '../../img/color/color.png'
import fontSizeIcon from '../../img/fontSize/fontSize.png'
import paddingIcon from '../../img/padding/padding.png'
import cursorIcon from '../../img/cursor/cursor.png'
import borderColorIcon from '../../img/borderColor/borderColor.png'
import borderStyleIcon from '../../img/borderStyle/borderStyle.png'
import borderwidthIcon from '../../img/borderwidth/borderwidth.png'
import borderRadiusIcon from '../../img/borderRadius/borderRadius.png'

export const CssCustomArea = () => {
    const selectedElementClass = useAppSelector((state) => state.pseudoArea.elementClassSelectedCurrent) //現在の選択中のelementClass
    const selectedElementName = useAppSelector((state) => state.pseudoArea.elementNameSelectedCurrent) //現在の選択中のelementName
    const uid = getElementUid(selectedElementName, selectedElementClass)
    const cssStates = useAppSelector((state) => state.pseudoArea.cssStates) //現在のcssState
    const dispatch = useAppDispatch()
    dispatch(
        createNewCssStates({
            elementName: selectedElementName,
            classNames: selectedElementClass,
        })
    )
    const displayWidth = cssStates[uid].customAreaDisplay.width
    const displayHeight = cssStates[uid].customAreaDisplay.height
    const displayColor = cssStates[uid].customAreaDisplay.color
    const displayBackgroundColor = cssStates[uid].customAreaDisplay.backgroundColor
    const displayPadding = cssStates[uid].customAreaDisplay.padding
    const displayFontSize = cssStates[uid].customAreaDisplay.fontSize
    const displayCursor = cssStates[uid].customAreaDisplay.cursor
    const displayTransition = cssStates[uid].customAreaDisplay.transition
    const displayTransitionDelay = cssStates[uid].customAreaDisplay.transitionDelay
    const displayTransitionDuration = cssStates[uid].customAreaDisplay.transitionDuration
    const displayTransitionProperty = cssStates[uid].customAreaDisplay.transitionProperty
    const displayTransitionTimingFunction = cssStates[uid].customAreaDisplay.transitionTimingFunction
    const displayBorderColor = cssStates[uid].customAreaDisplay.borderColor
    const displayBorderStyle = cssStates[uid].customAreaDisplay.borderStyle
    const displayBorderWidth = cssStates[uid].customAreaDisplay.borderWidth
    const displayBorderRadius = cssStates[uid].customAreaDisplay.borderRadius
    return (
        <Flex flexDirection={'column'} width={'15rem'} height={'90%'} flexWrap={'wrap'} minHeight={'0'}>
            <Text
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                backgroundColor={'#f5b199'}
                fontSize={'2rem'}
            >
                Basics
            </Text>
            <CustomAreaButton text="width" isDisplay={displayWidth} iconPath={WidthIcon} />
            <CustomAreaButton text="height" isDisplay={displayHeight} iconPath={HeightIcon} />
            <CustomAreaButton text="color" isDisplay={displayColor} iconPath={colorIcon} />
            <CustomAreaButton
                text="backgroundColor"
                isDisplay={displayBackgroundColor}
                iconPath={backgroundColorIcon}
            />
            <CustomAreaButton text="fontSize" isDisplay={displayFontSize} iconPath={fontSizeIcon} />
            <CustomAreaButton text="padding" isDisplay={displayPadding} iconPath={paddingIcon} />
            <CustomAreaButton text="cursor" isDisplay={displayCursor} iconPath={cursorIcon} />
            <Text
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                backgroundColor={'#38a1db'}
                fontSize={'2rem'}
            >
                Transition
            </Text>
            <CustomAreaButton text="transition" isDisplay={displayTransition} iconPath={cursorIcon} />
            <CustomAreaButton text="transitionDelay" isDisplay={displayTransitionDelay} iconPath={cursorIcon} />
            <CustomAreaButton text="transitionDuration" isDisplay={displayTransitionDuration} iconPath={cursorIcon} />
            <CustomAreaButton text="transitionProperty" isDisplay={displayTransitionProperty} iconPath={cursorIcon} />
            <CustomAreaButton
                text="transitionTimingFunction"
                isDisplay={displayTransitionTimingFunction}
                iconPath={cursorIcon}
            />
            <Text
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                backgroundColor={'#c3d825'}
                fontSize={'2rem'}
            >
                Border
            </Text>
            <CustomAreaButton text="borderColor" isDisplay={displayBorderColor} iconPath={borderColorIcon} />
            <CustomAreaButton text="borderStyle" isDisplay={displayBorderStyle} iconPath={borderStyleIcon} />
            <CustomAreaButton text="borderWidth" isDisplay={displayBorderWidth} iconPath={borderwidthIcon} />
            <CustomAreaButton text="borderRadius" isDisplay={displayBorderRadius} iconPath={borderRadiusIcon} />
        </Flex>
    )
}
