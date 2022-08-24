import { Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { HandWrittenLikeButton } from '../../components/templates/handWrittenLikeButton/HandWrittenLikeButton'
import { TemplatesNeumophism001 } from '../../components/templates/templatesNeumorphism001/TemplatesNeumophism001'

const Template = () => {
    const [mouseX, setMouseX] = useState(0)
    const [mouseY, setMouseY] = useState(0)
    const [background, setBackground] = useState('')
    useEffect(() => {
        const handleMouseMoveEvent = (event: MouseEvent) => {
            setMouseX(Math.floor((event.screenX / window.innerWidth) * 255))
            setMouseY(Math.floor((event.screenY / window.innerHeight) * 255))
        }
        window.addEventListener('mousemove', handleMouseMoveEvent)
    }, [])
    useEffect(() => {
        const deg = Math.floor(((mouseX + mouseY) / 510) * 360)
        const firstColor = `rgba(${mouseX},${mouseY},255,1)`
        const secondColor = `rgba(255,${mouseX},${mouseY},1)`
        setBackground(`linear-gradient(${deg}deg, ${firstColor} 0%, ${secondColor} 100%)`)
    }, [mouseX, mouseY])
    return (
        <Flex
            bgColor={'twitter.200'}
            flexDirection={'column'}
            alignItems={'center'}
            height={'100vh'}
            background={background}
        >
            <Flex flexDirection={'row'} alignItems={'center'} p={4}>
                <Flex m={4}>
                    <HandWrittenLikeButton />
                </Flex>
                <Flex m={4}>
                    <TemplatesNeumophism001 />
                </Flex>
                <Flex m={4}>
                    <TemplatesNeumophism001 />
                </Flex>
                <Flex m={4}>
                    <TemplatesNeumophism001 />
                </Flex>
            </Flex>
            <Flex flexDirection={'row'} alignItems={'center'} p={4}>
                <Flex m={4}>
                    <TemplatesNeumophism001 />
                </Flex>
                <Flex m={4}>
                    <TemplatesNeumophism001 />
                </Flex>
                <Flex m={4}>
                    <TemplatesNeumophism001 />
                </Flex>
                <Flex m={4}>
                    <TemplatesNeumophism001 />
                </Flex>
            </Flex>
            <Flex flexDirection={'row'} alignItems={'center'} p={4}>
                <Flex m={4}>
                    <TemplatesNeumophism001 />
                </Flex>
                <Flex m={4}>
                    <TemplatesNeumophism001 />
                </Flex>
                <Flex m={4}>
                    <TemplatesNeumophism001 />
                </Flex>
                <Flex m={4}>
                    <TemplatesNeumophism001 />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Template
