import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useAppSelector } from '../../../hooks'
import { getElementUid } from '../../pseudoArea/pseudoAreaSlice'

const transformCssLowerCase = (cssProp: string) => {
    return cssProp
        .split(/(?=[A-Z])/)
        .map((item) => item.toLowerCase())
        .join('-')
}
export const CssRenderingArea = () => {
    const cssStates = useAppSelector((state) => state.pseudoArea.cssStates)
    class HTMLBuilder {
        buildHeader = (elementName: string, elementClass: string[]) => {
            const _elementName = elementName === 'Main' ? '' : '::' + elementName
            const _elementClass = elementClass.length === 0 ? '' : ':' + elementClass.join(':')
            const resultStr = '.custom_button' + _elementName + _elementClass + ' {'
            return <Text>{resultStr}</Text>
        }

        buildContent = (elementName: string, elementClass: string[]) => {
            const uid = getElementUid(elementName, elementClass)
            const codes = cssStates[uid].cssCodes
            const resultStr = []
            for (const [key, value] of Object.entries(codes)) {
                resultStr.push(transformCssLowerCase(key) + ': ' + value)
            }
            return resultStr.map((str) => {
                return <Text key={str}>&emsp;{str}</Text>
            })
        }
    }
    const constructHtml = (builder: typeof HTMLBuilder, elementName: string, elementClass: string[]) => {
        return (
            <>
                {new builder().buildHeader(elementName, elementClass)}
                {new builder().buildContent(elementName, elementClass)}
                <Text>{'}'}</Text>
            </>
        )
    }
    return (
        <Flex flexDirection={'column'} color={'black'} fontSize={'1rem'} margin={'1rem'}>
            {Object.values(cssStates).map((cssState) => {
                return constructHtml(HTMLBuilder, cssState.elementName, cssState.classNames)
            })}
        </Flex>
    )
}
