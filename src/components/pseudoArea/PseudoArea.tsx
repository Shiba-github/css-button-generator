import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useAppSelector } from '../../hooks'
import {
    setIsActiveActive,
    setIsActiveAfter,
    setIsActiveBefore,
    setIsActiveFocus,
    setIsActiveHover,
    setIsActiveMain,
} from './pseudoAreaSlice'
import { PseudoButton } from './PseudoButton'

export const PseudoArea = () => {
    const isActiveMain = useAppSelector((state) => state.pseudoArea.isActiveMain)
    const isActiveBefore = useAppSelector((state) => state.pseudoArea.isActiveBefore)
    const isActiveAfter = useAppSelector((state) => state.pseudoArea.isActiveAfter)
    const isActiveHover = useAppSelector((state) => state.pseudoArea.isActiveHover)
    const isActiveFocus = useAppSelector((state) => state.pseudoArea.isActiveFocus)
    const isActiveActive = useAppSelector((state) => state.pseudoArea.isActiveActive)

    return (
        <Flex flexDirection={'column'} width={'100%'} height={'100%'} color={'white'}>
            <Text textAlign={'center'} fontSize={'1.5rem'}>
                Select Element
            </Text>
            <PseudoButton type="pseudoElements" TitleText={'Main'} isActive={isActiveMain} setter={setIsActiveMain} />
            <Text textAlign={'center'} fontSize={'1.5rem'}>
                Pseudo Element
            </Text>
            <PseudoButton
                type="pseudoElements"
                TitleText={'Before'}
                isActive={isActiveBefore}
                setter={setIsActiveBefore}
            />
            <PseudoButton
                type="pseudoElements"
                TitleText={'After'}
                isActive={isActiveAfter}
                setter={setIsActiveAfter}
            />
            <Text textAlign={'center'} fontSize={'1.5rem'}>
                Pseudo Class
            </Text>
            <PseudoButton type="pseudoClass" TitleText={'Hover'} isActive={isActiveHover} setter={setIsActiveHover} />
            <PseudoButton type="pseudoClass" TitleText={'Focus'} isActive={isActiveFocus} setter={setIsActiveFocus} />
            <PseudoButton
                type="pseudoClass"
                TitleText={'Active'}
                isActive={isActiveActive}
                setter={setIsActiveActive}
            />
        </Flex>
    )
}
