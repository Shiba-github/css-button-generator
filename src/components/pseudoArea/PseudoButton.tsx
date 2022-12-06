import { Button } from '@chakra-ui/react'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import React, { memo, useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import {
    removeElementClassSelectedCurrent,
    createNewCssStates,
    setElementClassSelectedCurrent,
    setElementNameSelectedCurrent,
} from './pseudoAreaSlice'

type propsType = {
    type: 'pseudoElements' | 'pseudoClass'
    TitleText: string
    setter: ActionCreatorWithPayload<boolean>
    isActive: boolean
}

export const PseudoButton = memo((props: propsType) => {
    const isFirstRender = useRef(true)
    const dispatch = useAppDispatch()
    const selectedElementClass = useAppSelector((state) => state.pseudoArea.elementClassSelectedCurrent) //現在の選択中のelementClass
    const selectedElementName = useAppSelector((state) => state.pseudoArea.elementNameSelectedCurrent) //現在の選択中のelementName
    const cssStates = useAppSelector((state) => state.pseudoArea.cssStates) //現在のcssState

    const onClickButton = () => {
        // buttonを切り替える
        dispatch(props.setter(!props.isActive))

        // 新しい選択先の selectedElementName, selectedElementClassを保存する
        if (props.type === 'pseudoElements') {
            dispatch(setElementNameSelectedCurrent(props.TitleText))
        } else if (props.type === 'pseudoClass') {
            if (!props.isActive) {
                dispatch(setElementClassSelectedCurrent(props.TitleText))
            } else {
                dispatch(removeElementClassSelectedCurrent(props.TitleText))
            }
        }
    }
    useEffect(() => {
        if (isFirstRender.current) {
            return
        }
        // 新たなcssStateを作成する
        dispatch(
            createNewCssStates({
                elementName: selectedElementName,
                classNames: selectedElementClass,
            })
        )
    }, [selectedElementName, selectedElementClass])
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }
        const uid =
            selectedElementName +
            '_' +
            selectedElementClass.map((className) => {
                return className
            })
        if (uid in cssStates === false) {
            return
        }
    }, [cssStates])
    return (
        <>
            <Button
                onClick={onClickButton}
                boxShadow={'none !important'}
                backgroundColor={props.isActive ? 'blue.500' : 'rgb(44 49 61)'}
                _hover={{ backgroundColor: props.isActive ? 'blue.400' : 'rgb(63 68 78)' }}
            >
                {props.TitleText}
            </Button>
        </>
    )
})
