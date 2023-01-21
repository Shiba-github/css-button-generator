import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AlphaPicker, CirclePicker, ColorResult, HuePicker, SketchPicker } from 'react-color'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { getElementUid, saveCurrentCssProps } from '../../pseudoArea/pseudoAreaSlice'
import { BoxShadowSlider } from './BoxShadowSlider'

export const EditBoxShadow = () => {
    const selectedElementClass = useAppSelector((state) => state.pseudoArea.elementClassSelectedCurrent) //現在の選択中のelementClass
    const selectedElementName = useAppSelector((state) => state.pseudoArea.elementNameSelectedCurrent) //現在の選択中のelementName
    const dispatch = useAppDispatch()
    const uid = getElementUid(selectedElementName, selectedElementClass)
    const cssStates = useAppSelector((state) => state.pseudoArea.cssStates) //現在のcssState
    const getBoxShadowProps = () => {
        // templateですでに入力済みのboxShadowから中身を分割して抽出する
        const result = []
        const boxShadow = cssStates[uid].cssProps.boxShadow
        if (boxShadow === undefined) {
            return
        }
        // カンマ区切りでリストにする（リストの数が影の総数になる）
        // colorが超絶厄介（rgba(0, 0, 0, 0)←素直にカンマ区切りができない）なので、colorの状態によって条件を分岐させてうまいことリストを作成する
        const boxShadowList = []
        let boxShadowStrings = []
        let minStyleString = ''
        let rgbaFlag = false
        for (const [index, string] of Object.entries(boxShadow)) {
            if (string === '(') {
                rgbaFlag = true
            }
            if (string === ' ' && rgbaFlag === false) {
                boxShadowStrings.push(minStyleString)
                minStyleString = ''
                continue
            }
            // 最後まで行ったときはそのままリストに入れて終わり
            else if (parseInt(index) + 1 === boxShadow.length) {
                minStyleString += string
                boxShadowStrings.push(minStyleString)
                const _boxShadowStrings = boxShadowStrings.filter((strings) => {
                    return strings !== ''
                })
                boxShadowList.push(_boxShadowStrings)
                break
            } else if (string === ',' && rgbaFlag === false) {
                boxShadowStrings.push(minStyleString)
                const _boxShadowStrings = boxShadowStrings.filter((strings) => {
                    return strings !== ''
                })
                boxShadowList.push(_boxShadowStrings)
                minStyleString = ''
                boxShadowStrings = []
                continue
            } else {
                minStyleString += string
            }
            if (string === ')') {
                rgbaFlag = false
            }
        }
        // boxShadowは省略形で書くことができ、記入方法がいくつもあるので、それに合わせて分岐させ抽出する
        // ただし、noneキーワードがわざわざ指定されていることは考慮に入れない
        /**
         * 値が2つだけ与えられた場合 ⇒ offset-x, offset-yとして解釈される
         * 3つ目の値が与えられた場合 ⇒ blur-radiusとして解釈される
         * 4つ目の値が与えられた場合 ⇒ spread-radiusとして解釈される
         * insetキーワード ⇒ 任意
         * color ⇒ 任意
         */
        // colorとinsetキーワードが任意なので、数だけ数えるのは✖
        for (const [index, boxShadow] of Object.entries(boxShadowList)) {
            let inset = ''
            let color = ''
            let offsetX = 0
            let offsetY = 0
            let blurRadius = 0
            let spreadRadius = 0
            // insetキーワードがあるかどうか調べる
            if ('inset' in boxShadow) {
                inset = 'inset'
            }
            //colorがあるか調べる
            if (boxShadow.find((value) => value.includes('rgba') || value.includes('#'))) {
                for (const style of boxShadow) {
                    if (style.includes('rgba') || style.includes('#')) {
                        color = style
                    }
                }
            }
            // colorとinsetキーワードを取り除いたリストを作成して、後処理をやりやすくしてる
            const keywordList = boxShadow.filter((value) => {
                if (value === 'inset') {
                    return false
                } else if (value.includes('rgba') || value.includes('#')) {
                    false
                } else {
                    return true
                }
            })
            // キーワード数を調べる
            const keyWordSum = keywordList.length
            if (keyWordSum === 2) {
                // offset-xとoffset-yしかないパターン
                offsetX = parseInt(keywordList[0].replace('px', ''))
                offsetY = parseInt(keywordList[1].replace('px', ''))
            } else if (keyWordSum === 3) {
                // offset-xとoffset-yしかないパターン
                offsetX = parseInt(keywordList[0].replace('px', ''))
                offsetY = parseInt(keywordList[1].replace('px', ''))
                blurRadius = parseInt(keywordList[2].replace('px', ''))
            } else if (keyWordSum === 4) {
                // offset-xとoffset-yしかないパターン
                offsetX = parseInt(keywordList[0].replace('px', ''))
                offsetY = parseInt(keywordList[1].replace('px', ''))
                blurRadius = parseInt(keywordList[2].replace('px', ''))
                spreadRadius = parseInt(keywordList[3].replace('px', ''))
            }
            result.push({
                uid: parseInt(index) + 1,
                text: `Box Shadow ${parseInt(index) + 1}`,
                inset: inset,
                offsetX: offsetX,
                offsetY: offsetY,
                blurRadius: blurRadius,
                spreadRadius: spreadRadius,
                color: color,
            })
        }
        return result
    }

    const displayBoxShadow = cssStates[uid].customAreaDisplay.boxShadow

    const [editingBoxNumber, setEditingBoxNumber] = useState(1)
    const [selectedBoxShadowProps, setSelectedBoxShadowProps] = useState({
        uid: 1,
        text: 'Box Shadow 1',
        inset: '',
        offsetX: 0,
        offsetY: 0,
        blurRadius: 0,
        spreadRadius: 0,
        color: 'rgba(0, 0, 0, 1)',
    })
    const [boxShadowButton, setBoxShadowButton] = useState(() => {
        const boxShadow = cssStates[uid].cssProps.boxShadow
        if (boxShadow === undefined) {
            return [
                {
                    uid: 1,
                    text: 'Box Shadow 1',
                    inset: '',
                    offsetX: 0,
                    offsetY: 0,
                    blurRadius: 0,
                    spreadRadius: 0,
                    color: 'rgba(0, 0, 0, 1)',
                },
            ]
        } else {
            const boxShadowProps = getBoxShadowProps()
            if (boxShadowProps === undefined) {
                return [
                    {
                        uid: 1,
                        text: 'Box Shadow 1',
                        inset: '',
                        offsetX: 0,
                        offsetY: 0,
                        blurRadius: 0,
                        spreadRadius: 0,
                        color: 'rgba(0, 0, 0, 1)',
                    },
                ]
            } else {
                return boxShadowProps
            }
        }
    })
    useEffect(() => {
        // 操作するBox Shadowが変更されたときに現在操作対象のプロパティをセットしなおす
        for (const _boxShadowButton of boxShadowButton) {
            // 選択された番号の要素だけ操作する
            if (_boxShadowButton.uid === editingBoxNumber) {
                setSelectedBoxShadowProps(_boxShadowButton)
            }
        }
    }, [editingBoxNumber])
    useEffect(() => {
        for (const _boxShadowButton of boxShadowButton) {
            if (_boxShadowButton.uid === editingBoxNumber) {
                const result = boxShadowButton
                result[boxShadowButton.indexOf(_boxShadowButton)] = selectedBoxShadowProps
                setBoxShadowButton([...result])
            }
        }
    }, [selectedBoxShadowProps])
    useEffect(() => {
        let result = ''
        for (const [index, _boxShadowProps] of Object.entries(boxShadowButton)) {
            // プロパティの並び順は inset, offset-x, offset-y, blur-radius, spread-radius, colorとなっている
            // insetがない場合は何も記入しなくてOK（noneとか入れんでヨロシ）
            if (boxShadowButton.length === 1) {
                result = `${_boxShadowProps.inset === 'inset' ? 'inset ' : ''} ${_boxShadowProps.offsetX}px ${
                    _boxShadowProps.offsetY
                }px ${_boxShadowProps.blurRadius}px ${_boxShadowProps.spreadRadius}px ${_boxShadowProps.color}`
            } else {
                if (index === '0') {
                    result = `${_boxShadowProps.inset === 'inset' ? 'inset ' : ''} ${_boxShadowProps.offsetX}px ${
                        _boxShadowProps.offsetY
                    }px ${_boxShadowProps.blurRadius}px ${_boxShadowProps.spreadRadius}px ${_boxShadowProps.color}`
                } else {
                    result += `,${_boxShadowProps.inset === 'inset' ? 'inset ' : ''} ${_boxShadowProps.offsetX}px ${
                        _boxShadowProps.offsetY
                    }px ${_boxShadowProps.blurRadius}px ${_boxShadowProps.spreadRadius}px ${_boxShadowProps.color}`
                }
            }
        }
        dispatch(
            saveCurrentCssProps({
                elementName: selectedElementName,
                classNames: selectedElementClass,
                cssPropKey: 'boxShadow',
                cssPropValue: result,
            })
        )
    }, [boxShadowButton])
    useEffect(() => {
        // pseudo areaが切り替わった時の処理（uidを見てるのはpseudoareaが切り替わるときは必ずuidが変化するため）
        const boxShadowProps = getBoxShadowProps()
        if (boxShadowProps) {
            setEditingBoxNumber(boxShadowProps[0].uid)
            setSelectedBoxShadowProps(boxShadowProps[boxShadowProps[0].uid - 1])
            setBoxShadowButton([...boxShadowProps])
        }
    }, [uid])

    const onClickInset = () => {
        // insetボタンを押したときの処理
        const _selectedBoxShadowProps = selectedBoxShadowProps
        let newInset = ''
        if (_selectedBoxShadowProps.inset === 'inset') {
            newInset = ''
        } else {
            newInset = 'inset'
        }
        setSelectedBoxShadowProps({
            ..._selectedBoxShadowProps,
            inset: newInset,
        })
    }

    const onClickButtonHandler = (value: number) => {
        setEditingBoxNumber(value)
    }

    const pushAddShadowButton = () => {
        // add Shadowボタンを押された時には新規のBoxShadowボタンを追加で作成（他）をする
        if (boxShadowButton.length === 10) {
            return
        }
        const newUid = boxShadowButton[boxShadowButton.length - 1].uid + 1
        const newText = `Box Shadow ${newUid}`
        setBoxShadowButton([
            ...boxShadowButton,
            {
                uid: newUid,
                text: newText,
                inset: '',
                offsetX: 0,
                offsetY: 0,
                blurRadius: 0,
                spreadRadius: 0,
                color: 'rgba(0, 0, 0, 1)',
            },
        ])
    }

    const deleteShadowButton = (uid: number) => {
        // ✖を押されたBox Shadow Button を削除する
        if (boxShadowButton.length === 1) {
            return
        }
        const newState = []
        for (const item of boxShadowButton) {
            if (!(item.uid === uid)) {
                newState.push(item)
            }
        }
        setBoxShadowButton(newState)
    }

    const handleChange = (color: ColorResult) => {
        const rgba = `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`
        const _selectedBoxShadowProps = selectedBoxShadowProps
        setSelectedBoxShadowProps({
            ..._selectedBoxShadowProps,
            color: rgba,
        })
    }

    return (
        <>
            {displayBoxShadow && (
                <Flex
                    flexDirection={'column'}
                    alignItems={'center'}
                    width={'50rem'}
                    backgroundColor={'gray.50'}
                    borderRadius={'1rem'}
                    marginTop={'1rem'}
                    paddingTop={'0.5rem'}
                    paddingBottom={'0.8rem'}
                >
                    <Flex
                        flexDirection={'row'}
                        alignItems={'center'}
                        width={'50rem'}
                        backgroundColor={'gray.50'}
                        borderRadius={'1rem'}
                        marginTop={'1rem'}
                        paddingTop={'0.5rem'}
                        paddingBottom={'0.8rem'}
                    >
                        <Text
                            width={'100%'}
                            color={'blackAlpha.800'}
                            marginLeft={'1rem'}
                            marginRight={'1rem'}
                            fontSize={'1.2rem'}
                        >
                            BoxShadow
                        </Text>
                        <Button marginRight={'3rem'} width={'15rem'} onClick={() => pushAddShadowButton()}>
                            add Shadow
                        </Button>
                    </Flex>
                    <Flex
                        flexDirection={'row'}
                        alignItems={'center'}
                        width={'50rem'}
                        backgroundColor={'gray.50'}
                        borderRadius={'1rem'}
                        marginTop={'1rem'}
                        paddingTop={'0.5rem'}
                        paddingBottom={'0.8rem'}
                        justifyContent={'space-evenly'}
                    >
                        <Flex
                            flexDirection={'column'}
                            height={'40rem'}
                            justifyContent={'flex-start'}
                            width={'12rem'}
                            bg={'#607D8B'}
                            padding={'0 1rem'}
                            borderRadius={'1rem'}
                        >
                            {boxShadowButton.map((buttonProps) => {
                                return (
                                    <Flex
                                        key={buttonProps.uid}
                                        flexDirection={'row'}
                                        alignItems={'center'}
                                        width={'11rem'}
                                        marginLeft={'-0.5rem'}
                                        marginTop={'1.3rem'}
                                    >
                                        <Button
                                            bg={'#607d8b'}
                                            marginRight={'0.5rem'}
                                            width={'2rem'}
                                            height={'2rem'}
                                            borderRadius={'50%'}
                                            padding={'0'}
                                            minWidth={'0'}
                                            minHeight={'0'}
                                            onClick={() => deleteShadowButton(buttonProps.uid)}
                                        >
                                            ✖
                                        </Button>
                                        <Button
                                            borderStyle={'solid'}
                                            borderWidth={'3px'}
                                            borderColor={'#00BCD4'}
                                            bg={editingBoxNumber === buttonProps.uid ? '#00BCD4' : 'white'}
                                            color={editingBoxNumber === buttonProps.uid ? 'white' : 'black'}
                                            onClick={() => onClickButtonHandler(buttonProps.uid)}
                                        >
                                            {buttonProps.text}
                                        </Button>
                                    </Flex>
                                )
                            })}
                        </Flex>
                        <Flex
                            flexDirection={'column'}
                            borderStyle={'solid'}
                            borderWidth={'2px'}
                            height={'40rem'}
                            width={'36rem'}
                            alignItems={'center'}
                        >
                            <Flex
                                flexDirection={'column'}
                                height={'15rem'}
                                width={'36rem'}
                                justifyContent={'space-evenly'}
                            >
                                <Button
                                    borderStyle={'solid'}
                                    borderWidth={'3px'}
                                    borderColor={'#00BCD4'}
                                    value={selectedBoxShadowProps.inset}
                                    bg={selectedBoxShadowProps.inset === 'inset' ? '#00BCD4' : 'white'}
                                    color={selectedBoxShadowProps.inset === 'inset' ? 'white' : 'black'}
                                    _hover={{ backgroundColor: 'none', opacity: '0.8' }}
                                    onClick={() => onClickInset()}
                                >
                                    inset
                                </Button>
                                <Flex flexDirection={'row'} justifyContent={'space-evenly'}>
                                    <Text width={'5rem'}>offset-x</Text>
                                    <BoxShadowSlider
                                        propsName={'offsetX'}
                                        selectedBoxShadowProps={selectedBoxShadowProps}
                                        setSelectedBoxShadowProps={setSelectedBoxShadowProps}
                                    />
                                </Flex>
                                <Flex flexDirection={'row'} justifyContent={'space-evenly'}>
                                    <Text width={'5rem'}>offset-y</Text>
                                    <BoxShadowSlider
                                        propsName={'offsetY'}
                                        selectedBoxShadowProps={selectedBoxShadowProps}
                                        setSelectedBoxShadowProps={setSelectedBoxShadowProps}
                                    />
                                </Flex>
                                <Flex flexDirection={'row'} justifyContent={'space-evenly'}>
                                    <Text width={'5rem'}>blur</Text>
                                    <BoxShadowSlider
                                        propsName={'blurRadius'}
                                        selectedBoxShadowProps={selectedBoxShadowProps}
                                        setSelectedBoxShadowProps={setSelectedBoxShadowProps}
                                    />
                                </Flex>
                                <Flex flexDirection={'row'} justifyContent={'space-evenly'}>
                                    <Text width={'5rem'}>spread</Text>
                                    <BoxShadowSlider
                                        propsName={'spreadRadius'}
                                        selectedBoxShadowProps={selectedBoxShadowProps}
                                        setSelectedBoxShadowProps={setSelectedBoxShadowProps}
                                    />
                                </Flex>
                            </Flex>
                            <Flex
                                flexDirection={'column'}
                                height={'25rem'}
                                width={'36rem'}
                                justifyContent={'space-evenly'}
                                alignItems={'center'}
                            >
                                <HuePicker
                                    width={'31rem'}
                                    color={selectedBoxShadowProps.color}
                                    onChange={handleChange}
                                />
                                <AlphaPicker
                                    width={'31rem'}
                                    color={selectedBoxShadowProps.color}
                                    onChange={handleChange}
                                />
                                <Flex
                                    flexDirection={'row'}
                                    justifyContent={'space-evenly'}
                                    width={'36rem'}
                                    alignItems={'center'}
                                >
                                    <Box bg={selectedBoxShadowProps.color} padding={'1rem'} borderRadius={'1rem'}>
                                        <CirclePicker
                                            color={selectedBoxShadowProps.color}
                                            onChange={handleChange}
                                            width={'15rem'}
                                            circleSize={45}
                                        />
                                    </Box>
                                    <SketchPicker
                                        color={selectedBoxShadowProps.color}
                                        onChange={handleChange}
                                        width={'15rem'}
                                    />
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            )}
        </>
    )
}
