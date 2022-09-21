import { Button } from '@chakra-ui/react'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import {
    removeElementClassSelectedCurrent,
    setElementClassSelectedCurrent,
    setElementNameSelectedCurrent,
} from './pseudoAreaSlice'

type propsType = {
    type: 'pseudoElements' | 'pseudoClass'
    TitleText: string
    setter: ActionCreatorWithPayload<boolean>
    isActive: boolean
}

export const PseudoButton = (props: propsType) => {
    const dispatch = useAppDispatch()
    const onClickButtonHandler = () => {
        dispatch(props.setter(!props.isActive))
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
