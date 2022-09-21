import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useAnimation } from 'framer-motion'
import { useAppSelector } from '../../hooks'
import { BorderColor } from './border/BorderColor'
import { BorderStyle } from './border/BorderStyle'
import { BorderWidth } from './border/BorderWidth'
import { BorderRadius } from './border/BorderRadius'
import { Width } from './basic/Width'
import { Height } from './basic/Height'
import { Color } from './basic/Color'
import { BackgroundColor } from './basic/BackgroundColor'
import { Padding } from './basic/Padding'
import { FontSize } from './basic/FontSize'

export const CssCustomArea = () => {
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
            <Width />
            <Height />
            <Color />
            <BackgroundColor />
            <FontSize />
            <Padding />
            <Text
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                backgroundColor={'#c3d825'}
                fontSize={'2rem'}
            >
                Border
            </Text>
            <BorderColor />
            <BorderStyle />
            <BorderWidth />
            <BorderRadius />
        </Flex>
    )
}
