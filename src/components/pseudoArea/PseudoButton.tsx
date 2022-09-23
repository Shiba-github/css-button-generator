import { Button } from '@chakra-ui/react'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import React, { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import {
    removeElementClassSelectedCurrent,
    createNewCssStates,
    setElementClassSelectedCurrent,
    setElementNameSelectedCurrent,
    setIsChangedPseudoButton,
} from './pseudoAreaSlice'

type propsType = {
    type: 'pseudoElements' | 'pseudoClass'
    TitleText: string
    setter: ActionCreatorWithPayload<boolean>
    isActive: boolean
}

export const PseudoButton = (props: propsType) => {
    const isFirstRender = useRef(true)
    const dispatch = useAppDispatch()
    const selectedElementClass = useAppSelector((state) => state.pseudoArea.elementClassSelectedCurrent) //現在の選択中のelementClass
    const selectedElementName = useAppSelector((state) => state.pseudoArea.elementNameSelectedCurrent) //現在の選択中のelementName
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }
        dispatch(
            createNewCssStates({
                elementName: selectedElementName,
                classNames: selectedElementClass,
            })
        )
        dispatch(setIsChangedPseudoButton(true))
    }, [props.isActive])
    const onClickButtonHandler = () => {
        if (props.type === 'pseudoElements') {
            dispatch(setElementNameSelectedCurrent(props.TitleText))
        } else if (props.type === 'pseudoClass') {
            if (!props.isActive) {
                dispatch(setElementClassSelectedCurrent(props.TitleText))
            } else {
                dispatch(removeElementClassSelectedCurrent(props.TitleText))
            }
        }
        dispatch(props.setter(!props.isActive))
    }
    return (
        <>
            <Button
                onClick={onClickButtonHandler}
                boxShadow={'none !important'}
                backgroundColor={props.isActive ? 'blue.500' : 'rgb(44 49 61)'}
                _hover={{ backgroundColor: props.isActive ? 'blue.400' : 'rgb(63 68 78)' }}
            >
                {props.TitleText}
            </Button>
        </>
    )
}
