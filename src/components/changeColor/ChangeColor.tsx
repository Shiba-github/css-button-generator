import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import { ColorResult, SketchPicker } from 'react-color'
import { useAppDispatch } from '../../hooks'
import { setColor } from '../buttonView/buttonViewSlice'

export const ChangeColor = () => {
    const dispatch = useAppDispatch()

    const [colorRgb, setColorRgb] = useState({ r: 0, g: 0, b: 0, a: 1 })

    const handleOnChangeComplete = (color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => {
        setColorRgb({
            r: color.rgb.r,
            g: color.rgb.g,
            b: color.rgb.b,
            a: color.rgb.a!,
        })
        const rgba = `rgba(${colorRgb.r},${colorRgb.g},${colorRgb.b},${colorRgb.a})`
        dispatch(setColor(rgba))
    }

    const handleChange = (color: ColorResult) => {
        setColorRgb({
            r: color.rgb.r,
            g: color.rgb.g,
            b: color.rgb.b,
            a: color.rgb.a!,
        })
        const rgba = `rgba(${colorRgb.r},${colorRgb.g},${colorRgb.b},${colorRgb.a})`
        dispatch(setColor(rgba))
    }
    return (
        <Box>
            <SketchPicker color={colorRgb} onChange={handleChange} onChangeComplete={handleOnChangeComplete} />
        </Box>
    )
}
