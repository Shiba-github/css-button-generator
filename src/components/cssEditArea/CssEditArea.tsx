import React, { useEffect } from 'react'
import { Flex } from '@chakra-ui/react'
import { EditColor } from './color/EditColor'
import { FontSize } from './fontSize/FontSize'
import { Padding } from './padding/Padding'
import { EditBorderColor } from './borderColor/EditBorderColor'
import { EditBorderStyle } from './borderStyle/EditBorderStyle'
import { EditBorderRadius } from './borderRadius/EditBorderRadius'
import { EditWidth } from './width/EditWidth'
import { EditHeight } from './height/EditHeight'
import { EditBackgroundColor } from './backgroundColor/EditBackgroundColor'
import { EditBorderWidth } from './borderWidth/EditBorderWidth'
import { useAppDispatch, useAppSelector } from '../../hooks'
import {
    getAllCssProps,
    setBackgroundColor,
    setBorder,
    setBorderColor,
    setBorderRadius,
    setBorderStyle,
    setBorderWidth,
    setColor,
    setDisplay,
    setFontSize,
    setHeight,
    setPadding,
    setTextDecoration,
    setWidth,
} from '../buttonView/buttonViewSlice'
import { saveCurrentCssProps, setPseudoButtonLIfeCycle } from '../pseudoArea/pseudoAreaSlice'

export const CssEditArea = () => {
    const dispatch = useAppDispatch()
    const selectedElementClass = useAppSelector((state) => state.pseudoArea.elementClassSelectedCurrent) //現在の選択中のelementClass
    const selectedElementName = useAppSelector((state) => state.pseudoArea.elementNameSelectedCurrent) //現在の選択中のelementName
    const allCssProps = useAppSelector((state) => getAllCssProps(state))
    const pseudoButtonLifeCycle = useAppSelector((state) => state.pseudoArea.pseudoButtonLifeCycle) 
    const cssState = useAppSelector((state) => state.pseudoArea.cssStates)
    useEffect(() => {
        // puseudoButtonが押されたときに、初めに現在のデータを保存する必要がある
        if (pseudoButtonLifeCycle.isSavedDisplayStatus === false) {
            return
        }
        console.log('save current css props')
        dispatch(saveCurrentCssProps({elementName:selectedElementName, classNames:selectedElementClass, allCssProps}))
        dispatch(setPseudoButtonLIfeCycle({timing:'savedDisplayStatus', lifeCycle: false }))
        dispatch(setPseudoButtonLIfeCycle({timing:'savedCssProps', lifeCycle: true }))
    }, [pseudoButtonLifeCycle])
    useEffect(() => {
        // pseudoAreaが変更されたときだけ初期化処理を行うようにisChangedPseudoButtonをトリガーにしている
        if (pseudoButtonLifeCycle.isLoadedDisplayStatus === false) {
            return
        }
        console.log('load css props')
        console.log(selectedElementName)
        console.log(selectedElementClass)
        const uid =
            selectedElementName +
            '_' +
            selectedElementClass.map((className) => {
                return className
            })
        dispatch(setColor(cssState[uid].cssProps.color))
        dispatch(setBackgroundColor(cssState[uid].cssProps.backgroundColor))
        dispatch(setBorder(cssState[uid].cssProps.border))
        dispatch(setPadding(cssState[uid].cssProps.padding))
        dispatch(setTextDecoration(cssState[uid].cssProps.textDecoration))
        dispatch(setDisplay(cssState[uid].cssProps.display))
        dispatch(setFontSize(cssState[uid].cssProps.fontSize))
        dispatch(setBorderColor(cssState[uid].cssProps.borderColor))
        dispatch(setBorderRadius(cssState[uid].cssProps.borderRadius))
        dispatch(setBorderStyle(cssState[uid].cssProps.borderStyle))
        dispatch(setBorderWidth(cssState[uid].cssProps.borderWidth))
        dispatch(setWidth(cssState[uid].cssProps.width))
        dispatch(setHeight(cssState[uid].cssProps.height))
        dispatch(setPseudoButtonLIfeCycle({timing:'loadedDisplayStatus', lifeCycle: false }))
    }, [pseudoButtonLifeCycle])
    return (
        <Flex flexDirection={'column'} alignItems={'center'}>
            <EditWidth />
            <EditHeight />
            <EditColor />
            <EditBackgroundColor />
            <FontSize />
            <Padding />
            <EditBorderColor />
            <EditBorderStyle />
            <EditBorderWidth />
            <EditBorderRadius />
        </Flex>
    )
}
