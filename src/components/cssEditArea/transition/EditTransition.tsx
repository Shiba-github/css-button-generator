import {
    Flex,
    Text,
    Button,
    Tabs,
    TabList,
    TabPanels,
    TabPanel,
    Tab,
    Slider,
    SliderFilledTrack,
    SliderMark,
    SliderThumb,
    SliderTrack,
    Tooltip,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    // PopoverTrigger,
    PopoverFooter,
    PopoverHeader,
    Portal,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { getElementUid } from '../../pseudoArea/pseudoAreaSlice'
import { saveCurrentCssProps } from '../../pseudoArea/pseudoAreaSlice'
// react18ではPopoverTriggerだけ旧式の型定義をしないとBOM💣だったので↓↓↓↓急ごしらえパッチです
import { PopoverTrigger as OrigPopoverTrigger } from '@chakra-ui/react'
export const PopoverTrigger: React.FC<{ children: React.ReactNode }> = OrigPopoverTrigger

export const EditTransition = () => {
    const dispatch = useAppDispatch()
    const selectedElementClass = useAppSelector((state) => state.pseudoArea.elementClassSelectedCurrent)
    const selectedElementName = useAppSelector((state) => state.pseudoArea.elementNameSelectedCurrent)
    const uid = getElementUid(selectedElementName, selectedElementClass)
    const cssStates = useAppSelector((state) => state.pseudoArea.cssStates)
    console.log('cssStates', cssStates)
    console.log('uid', uid)
    const canSelectProperty = Object.keys(cssStates[uid].cssProps)
    console.log('canSelectProperty', canSelectProperty)
    const filterTarget = 'transition'
    const filterdSelectProperty = canSelectProperty.filter((property) => !property.includes(filterTarget))
    console.log('filterdSelectProperty: ', filterdSelectProperty)
    type transitionType = {
        [transitionProperty: string]: {
            duration: number
            timingFunction: string
            delay: number
        }
    }

    const [transitionObject, setTransitionObject] = useState<transitionType>({})
    const [currentSelectedProperty, setCurrentSelectedProperty] = useState('')
    // プロパティ名 | 所要時間(duration) | イージング関数(timingFunction) | 待ち時間(delay)
    // プロパティ名は必須
    // timingFunctionは０か１個
    // 時間を示す数字が一つしかない場合はdurationに該当する
    // 時間を示す数字が二つある場合は、二つ目はdelayに該当する
    // 指定が無かった場合はすべてデフォルト値が適用される
    // transition: '1s 0.4s, width linear 1s 0.2s, height 0.5s, ease-out 2s 0.8s border-radius, background-color 0.8s 2s, 8s font-size',

    /**  {
     *      all: {
     *          duration: 1,
     *          timingFunction: '',
     *          delay: 0.4
     *      },
     *      width: {
     *          duration: 1,
     *          timingFunction: 'linear',
     *          delay: 0.2
     *      },
     *      height: {
     *          duration: 0.5,
     *          timingFunction: '',
     *          delay: 0
     *      },
     *      border-radius: {
     *          duration: 2s,
     *          timingFunction: 'ease-out',
     *          delay: 0.8
     *      },
     *      background-color: {
     *          duration: 0.8,
     *          timingFunction: '',
     *          delay: 2,
     *          },
     *      font-size: {
     *          duration: 8,
     *          timingFunction: '',
     *          delay: 0,
     *          },
     * }
     */
    const convertTransitionStringToArray = () => {
        // 文字列を各要素に分解して、適当な連想配列を作成する
        const templateTransitionStrings = cssStates[uid].cssProps.transition
        if (templateTransitionStrings === undefined) {
            return
        }
        console.log('templateTransitionStrings', templateTransitionStrings)
        console.log(typeof templateTransitionStrings)
        const templateTransitionList = templateTransitionStrings.split(',')
        console.log('templateTransitionList', templateTransitionList)
        const timingFunctions = [
            'ease',
            'linear',
            'ease-in',
            'ease-out',
            'ease-in-out',
            'cubic-bezier',
            'steps',
            'jump-start',
            'jump-end',
            'jump-none',
            'jump-both',
            'start',
            'end',
            'step-start',
            'step-end',
        ]
        const ans: transitionType = {}
        for (const transitionProperties of templateTransitionList) {
            let transitionProperty = 'all'
            let transitionDuration = 0
            let transitionDelay = 0
            let transitionTimingFunction = ''
            console.log('transitionProperties', transitionProperties)
            const _transitionProperties = transitionProperties.split(' ')
            for (const transitionItem of _transitionProperties) {
                console.log('transitionItem', transitionItem)
                if (transitionItem.match(/[0-9]/)) {
                    // 要素に数字が含まれている場合はtransitionProperty名ではないので終了
                    // 数字は一つの場合と二つの場合がある（当然何もない場合もある）
                    if (!transitionDuration) {
                        // 邪魔な文字sを取り除く
                        transitionDelay = parseFloat(transitionItem.replace('s', ''))
                    }
                    transitionDuration = parseFloat(transitionItem.replace('s', ''))
                    continue
                }
                if (timingFunctions.includes(transitionItem)) {
                    // 要素にtimingFunctionに該当するものが含まれている場合はtransitionPropertyではないので終了
                    transitionTimingFunction = transitionItem
                    continue
                }
                // 数字でもない（duration, delayではない）、timingfunctionでもない場合は、transitionPropertyなので変数に格納する
                transitionProperty = transitionItem
            }
            // 一つのオブジェクトを作成する
            /**
             * width: {
             *         duration: 1,
             *         timingFunction: 'linear',
             *         delay: 0.2
             *     },
             */
            ans[transitionProperty] = {
                duration: transitionDuration,
                timingFunction: transitionTimingFunction,
                delay: transitionDelay,
            }
        }
        setTransitionObject(ans)
        console.log('ans', ans)
    }

    const convertTransitionArrayToString = () => {
        let resultStrings = ''
        for (const [transitionPropertyName, transitionValues] of Object.entries(transitionObject)) {
            resultStrings += transitionPropertyName
            for (const transitionValue of Object.values(transitionValues)) {
                if (typeof transitionValue === 'number') {
                    resultStrings += ' ' + transitionValue + 'px'
                } else {
                    resultStrings += ' ' + transitionValue
                }
            }
            resultStrings += ', '
        }
        return resultStrings
    }
    useEffect(() => {
        convertTransitionStringToArray()
    }, [])
    /**
     * transitionに関するプロパティを変更し、pseudoSliceにあるcssStatesを更新する関数
     *
     *
     * Note: この関数は○○な実装をしているので、……××なアルゴリズムを使っているので
     * @params {'duration' | 'timingDunction' | 'delay'} transitionPropertyName: 変更するtransitionに関わるプロパティの名前
     * @params {string | number} value: プロパティの変更値
     * @returns {void}
     */
    const setTransitionProperty = (
        transitionPropertyName: 'duration' | 'timingFunction' | 'delay',
        value: string | number
    ) => {
        const newTransitionObject = {
            ...transitionObject,
            [currentSelectedProperty]: {
                ...transitionObject[currentSelectedProperty],
                [transitionPropertyName]: value,
            },
        }
        setTransitionObject(newTransitionObject)
        const newTransitionString = convertTransitionArrayToString()
        dispatch(
            saveCurrentCssProps({
                elementName: selectedElementName,
                classNames: selectedElementClass,
                cssPropKey: 'transition',
                cssPropValue: newTransitionString,
            })
        )
    }

    const displayTransition = cssStates[uid].customAreaDisplay.transition
    let transition = cssStates[uid].cssProps.transition
    if (!transition) {
        transition = ''
    }
    const [isDisplaySelectProperty, setIsDisplaySelectProperty] = useState(false)
    const [showTooltipDuration, setShowTooltipDuration] = useState(false)
    const [showTooltipDelay, setShowTooltipDelay] = useState(false)

    // transitionに統合させる処理 検証
    const [transitionPropertyList, setTransitionPropertyList] = useState<string[]>([])
    console.log('transitionPropertyList:', transitionPropertyList)

    const onClickTransitionPropertyToAdd = (cssStyleName: string) => {
        if (transitionPropertyList.includes(cssStyleName)) {
            // すでにリスト内にプロパティが存在している場合は削除する
            setTransitionPropertyList(transitionPropertyList.filter((_cssStyleName) => _cssStyleName !== cssStyleName))
        } else {
            setTransitionPropertyList([...transitionPropertyList, cssStyleName])
            createNewTransitionObject(cssStyleName)
        }
    }

    // transitionObject の サンプル
    //     {
    //     "all": {
    //         "duration": 0.4,
    //         "timingFunction": "",
    //         "delay": 1
    //     },
    //     "width": {
    //         "duration": 0.2,
    //         "timingFunction": "linear",
    //         "delay": 1
    //     },
    //     "height": {
    //         "duration": 0.5,
    //         "timingFunction": "",
    //         "delay": 0.5
    //     },
    //     "border-radius": {
    //         "duration": 0.8,
    //         "timingFunction": "ease-out",
    //         "delay": 2
    //     },
    //     "background-color": {
    //         "duration": 2,
    //         "timingFunction": "",
    //         "delay": 0.8
    //     },
    //     "font-size": {
    //         "duration": 8,
    //         "timingFunction": "",
    //         "delay": 8
    //     }
    // }

    // transitionPropertyList の サンプル
    //     [
    //     "borderStyle",
    //     "fontSize",
    //     "backgroundColor"
    //      ]
    // transitionの値があるときuseStateへ最初に反映する処理
    // console.log('transitionPropertyList:', transitionPropertyList)

    const deleteTransitionObject = (propertyName: string) => {
        //obj=対象のオブジェクト, value=キーを取得したい値
        // Object.keys(obj).filter(key => obj[key] === value)

        // transitionObjectの中身をはかいする
        // const newTransitionObject = transitionObject.filter(key => !(propertyName === key))
        const newTransitionObject = transitionObject
        delete newTransitionObject[propertyName]
        // const newTransitionObjectKeys = Object.keys(transitionObject).filter(key => !(propertyName === key))
        // const newTransitionObject = newTransitionObjectKeys.filter((key) => transitionObject[key])
        setTransitionObject(newTransitionObject)
    }
    const createNewTransitionObject = (propertyName: string) => {
        setCurrentSelectedProperty(propertyName)
        console.log('hoge')
        console.log('currentSelected', currentSelectedProperty)
        console.log('isCurrentSelectedTrue', currentSelectedProperty !== '')
        // console.log(
        //     'transitionObject[currentSelectedProperty].duration',
        //     transitionObject[currentSelectedProperty].duration
        // )

        // type _tmpObjectType = {
        //     [key: string]: {
        //         duration: number
        //         timingFunction: string
        //         delay: number
        //     }
        // }
        // const transitionProperty = 'all'
        const initTransitionDuration = 0
        const initTransitionDelay = 0
        const initTransitionTimingFunction = ''
        const _tmpObject: transitionType = {}
        // transitionPropertyListから選択されているtransitionPropertyの取得
        transitionPropertyList.map((property) => {
            console.log('---transitionObject---', transitionObject[property])
            if (transitionObject[property]) {
                return
            }

            // 初期オブジェクトの生成処理
            _tmpObject[property] = {
                duration: initTransitionDuration,
                delay: initTransitionDelay,
                timingFunction: initTransitionTimingFunction,
            }
        })
        // 完成したオブジェクトを格納
        setTransitionObject(_tmpObject)
        console.log('transitionObject', transitionObject)
        // setTransitionObject('hoge')
    }
    const pressTabHandler = (propertyName: string, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setCurrentSelectedProperty(propertyName)
    }

    // useEffect(() => {
    //     transition = [transitionProperty, transitionDuration, transitionTimingFunction, transitionDelay].join(' ')
    //     console.log('useEffectで保存したtransition:', transition)
    //     dispatch(
    //         saveCurrentCssProps({
    //             elementName: selectedElementName,
    //             classNames: selectedElementClass,
    //             cssPropKey: 'transition',
    //             cssPropValue: transition,
    //         })
    //     )
    // }, [transitionProperty, transitionDuration, transitionTimingFunction, transitionDelay])

    return (
        <Flex>
            {displayTransition ? (
                <Flex flexDirection={'column'} backgroundColor={'gray.50'} borderRadius={'1rem'} marginTop={'1rem'}>
                    <Flex
                        flexDirection={'row'}
                        alignItems={'center'}
                        marginTop={'0.5rem'}
                        marginBottom={'0.8rem'}
                        width={'50rem'}
                        borderColor={'gray.200'}
                    >
                        <Text
                            width={'8rem'}
                            color={'black'}
                            justifyContent={'start'}
                            fontSize={'1.2rem'}
                            marginLeft={'1rem'}
                            marginRight={'1rem'}
                        >
                            Transition
                        </Text>
                    </Flex>
                    <Flex flexDirection={'row'} justifyContent={'space-between'} width={'37rem'} mb={'1rem'}>
                        <Text mx={'1rem'} fontSize={'1.2rem'}>
                            transition property
                        </Text>
                        <Flex flexDirection={'row'} justifyContent={'space-between'}>
                            {/* <Button
                                onClick={() => onClickTransitionPropertyStyle('none')}
                                fontSize={'1.2rem'}
                                margin={'0.1rem'}
                                height={'2rem'}
                                bg={currentSelectedProperty === 'none' ? 'teal' : 'gray'}
                            >
                                none
                            </Button>
                            <Button
                                onClick={() => onClickTransitionPropertyStyle('all')}
                                fontSize={'1.2rem'}
                                margin={'0.1rem'}
                                height={'2rem'}
                                bg={currentSelectedProperty === 'all' ? 'teal' : 'gray'}
                            >
                                all
                            </Button> */}
                            <Popover placement="bottom-end">
                                <PopoverTrigger>
                                    <Button fontSize={'1.2rem'} ml={'8rem'} height={'2rem'} bg={'gray'}>
                                        +
                                    </Button>
                                </PopoverTrigger>
                                <Portal>
                                    <PopoverContent width={'35rem'}>
                                        <PopoverArrow />
                                        <PopoverHeader>Using properties</PopoverHeader>
                                        <PopoverCloseButton />
                                        <PopoverBody>
                                            <>
                                                {filterdSelectProperty.map((value) => {
                                                    return (
                                                        <Button
                                                            key={value}
                                                            onClick={() => onClickTransitionPropertyToAdd(value)}
                                                            marginRight={'0.2rem'}
                                                            backgroundColor={
                                                                transitionPropertyList.includes(value) ? 'teal' : 'gray'
                                                            }
                                                        >
                                                            {value}
                                                        </Button>
                                                    )
                                                })}
                                            </>
                                            {/* <Button colorScheme="blue">Button</Button> */}
                                        </PopoverBody>
                                        <PopoverFooter>This is the footer</PopoverFooter>
                                    </PopoverContent>
                                </Portal>
                            </Popover>
                        </Flex>
                    </Flex>
                    {currentSelectedProperty !== 'none' ? (
                        <Tabs variant="enclosed">
                            <TabList>
                                {transitionPropertyList.map((property) => {
                                    return (
                                        <Tab key={property} onClick={(e) => pressTabHandler(property, e)}>
                                            {property}
                                        </Tab>
                                    )
                                })}
                            </TabList>
                            <TabPanels>
                                {transitionPropertyList.map((property) => {
                                    return (
                                        <TabPanel key={property}>
                                            <Flex flexDirection={'column'}>
                                                <Flex
                                                    flexDirection={'row'}
                                                    my={'1rem'}
                                                    justifyContent={'space-between'}
                                                    width={'45rem'}
                                                >
                                                    <Text mx={'1rem'} fontSize={'1.2rem'} whiteSpace={'nowrap'}>
                                                        transition duration {property}
                                                    </Text>
                                                    <Slider
                                                        id="slider"
                                                        defaultValue={0.8}
                                                        value={
                                                            currentSelectedProperty !== ''
                                                                ? transitionObject[currentSelectedProperty].duration
                                                                : 0.8
                                                        }
                                                        min={0}
                                                        max={5}
                                                        step={0.1}
                                                        colorScheme="teal"
                                                        onChange={(v) => setTransitionProperty('duration', v)}
                                                        onMouseEnter={() => setShowTooltipDuration(true)}
                                                        onMouseLeave={() => setShowTooltipDuration(false)}
                                                    >
                                                        <SliderMark
                                                            color={'black'}
                                                            value={1.5}
                                                            mt="1"
                                                            ml="-2.5"
                                                            fontSize="sm"
                                                        >
                                                            1.5s
                                                        </SliderMark>
                                                        <SliderMark
                                                            color={'black'}
                                                            value={2.5}
                                                            mt="1"
                                                            ml="-2.5"
                                                            fontSize="sm"
                                                        >
                                                            2.5s
                                                        </SliderMark>
                                                        <SliderMark
                                                            color={'black'}
                                                            value={3.5}
                                                            mt="1"
                                                            ml="-2.5"
                                                            fontSize="sm"
                                                        >
                                                            3.5s
                                                        </SliderMark>
                                                        <SliderTrack bg={'teal.50'}>
                                                            <SliderFilledTrack />
                                                        </SliderTrack>
                                                        <Tooltip
                                                            hasArrow
                                                            bg="teal.500"
                                                            color="white"
                                                            placement="top"
                                                            isOpen={showTooltipDuration}
                                                            label={`${
                                                                currentSelectedProperty !== ''
                                                                    ? transitionObject[currentSelectedProperty].duration
                                                                    : 0.8
                                                            }`}
                                                        >
                                                            <SliderThumb />
                                                        </Tooltip>
                                                    </Slider>
                                                </Flex>
                                                {/* TODO: 段階式の関数キーワード、関数値(cubic-bezier)の実装 */}
                                                <Flex
                                                    flexDirection={'row'}
                                                    my={'1rem'}
                                                    justifyContent={'space-between'}
                                                    width={'45rem'}
                                                >
                                                    <Text mx={'1rem'} fontSize={'1.2rem'}>
                                                        transition timing function
                                                    </Text>
                                                    <Flex flexDirection={'column'}>
                                                        <Flex flexDirection={'row'} justifyContent={'space-between'}>
                                                            <Button
                                                                onClick={() =>
                                                                    setTransitionProperty('timingFunction', 'ease')
                                                                }
                                                                fontSize={'1.2rem'}
                                                                margin={'0.1rem'}
                                                                height={'2rem'}
                                                                bg={
                                                                    currentSelectedProperty !== ''
                                                                        ? transitionObject[currentSelectedProperty]
                                                                              .timingFunction === 'ease'
                                                                            ? 'teal'
                                                                            : 'gray'
                                                                        : 'gray'
                                                                }
                                                            >
                                                                ease
                                                            </Button>
                                                            <Button
                                                                onClick={() =>
                                                                    setTransitionProperty('timingFunction', 'ease-in')
                                                                }
                                                                fontSize={'1.2rem'}
                                                                margin={'0.1rem'}
                                                                height={'2rem'}
                                                                bg={
                                                                    currentSelectedProperty !== ''
                                                                        ? transitionObject[currentSelectedProperty]
                                                                              .timingFunction === 'ease-in'
                                                                            ? 'teal'
                                                                            : 'gray'
                                                                        : 'gray'
                                                                }
                                                            >
                                                                ease-in
                                                            </Button>
                                                            <Button
                                                                onClick={() =>
                                                                    setTransitionProperty('timingFunction', 'ease-out')
                                                                }
                                                                fontSize={'1.2rem'}
                                                                margin={'0.1rem'}
                                                                height={'2rem'}
                                                                bg={
                                                                    currentSelectedProperty !== ''
                                                                        ? transitionObject[currentSelectedProperty]
                                                                              .timingFunction === 'ease-out'
                                                                            ? 'teal'
                                                                            : 'gray'
                                                                        : 'gray'
                                                                }
                                                            >
                                                                ease-out
                                                            </Button>
                                                        </Flex>
                                                        <Flex flexDirection={'row'} justifyContent={'space-between'}>
                                                            <Button
                                                                onClick={() =>
                                                                    setTransitionProperty('timingFunction', 'linear')
                                                                }
                                                                fontSize={'1.2rem'}
                                                                margin={'0.1rem'}
                                                                height={'2rem'}
                                                                bg={
                                                                    currentSelectedProperty !== ''
                                                                        ? transitionObject[currentSelectedProperty]
                                                                              .timingFunction === 'linear'
                                                                            ? 'teal'
                                                                            : 'gray'
                                                                        : 'gray'
                                                                }
                                                            >
                                                                linear
                                                            </Button>
                                                            <Button
                                                                onClick={() =>
                                                                    setTransitionProperty(
                                                                        'timingFunction',
                                                                        'step-start'
                                                                    )
                                                                }
                                                                fontSize={'1.2rem'}
                                                                margin={'0.1rem'}
                                                                height={'2rem'}
                                                                bg={
                                                                    currentSelectedProperty !== ''
                                                                        ? transitionObject[currentSelectedProperty]
                                                                              .timingFunction === 'step-start'
                                                                            ? 'teal'
                                                                            : 'gray'
                                                                        : 'gray'
                                                                }
                                                            >
                                                                step-start
                                                            </Button>
                                                            <Button
                                                                onClick={() =>
                                                                    setTransitionProperty('timingFunction', 'step-end')
                                                                }
                                                                fontSize={'1.2rem'}
                                                                margin={'0.1rem'}
                                                                height={'2rem'}
                                                                bg={
                                                                    currentSelectedProperty !== ''
                                                                        ? transitionObject[currentSelectedProperty]
                                                                              .timingFunction === 'step-end'
                                                                            ? 'teal'
                                                                            : 'gray'
                                                                        : 'gray'
                                                                }
                                                            >
                                                                step-end
                                                            </Button>
                                                        </Flex>
                                                    </Flex>
                                                </Flex>
                                                <Flex
                                                    flexDirection={'row'}
                                                    my={'1rem'}
                                                    justifyContent={'space-between'}
                                                    width={'45rem'}
                                                >
                                                    <Text mx={'1rem'} fontSize={'1.2rem'} whiteSpace={'nowrap'}>
                                                        transition delay
                                                    </Text>
                                                    <Slider
                                                        id="slider"
                                                        defaultValue={0.8}
                                                        value={
                                                            currentSelectedProperty !== ''
                                                                ? transitionObject[currentSelectedProperty].delay
                                                                : 0.8
                                                        }
                                                        min={0}
                                                        max={5}
                                                        step={0.1}
                                                        colorScheme="teal"
                                                        onChange={(v) => setTransitionProperty('delay', v)}
                                                        onMouseEnter={() => setShowTooltipDelay(true)}
                                                        onMouseLeave={() => setShowTooltipDelay(false)}
                                                    >
                                                        <SliderMark
                                                            color={'black'}
                                                            value={1.5}
                                                            mt="1"
                                                            ml="-2.5"
                                                            fontSize="sm"
                                                        >
                                                            1.5s
                                                        </SliderMark>
                                                        <SliderMark
                                                            color={'black'}
                                                            value={2.5}
                                                            mt="1"
                                                            ml="-2.5"
                                                            fontSize="sm"
                                                        >
                                                            2.5s
                                                        </SliderMark>
                                                        <SliderMark
                                                            color={'black'}
                                                            value={3.5}
                                                            mt="1"
                                                            ml="-2.5"
                                                            fontSize="sm"
                                                        >
                                                            3.5s
                                                        </SliderMark>
                                                        <SliderTrack bg={'teal.50'}>
                                                            <SliderFilledTrack />
                                                        </SliderTrack>
                                                        <Tooltip
                                                            hasArrow
                                                            bg="teal.500"
                                                            color="white"
                                                            placement="top"
                                                            isOpen={showTooltipDelay}
                                                            label={`${
                                                                currentSelectedProperty !== ''
                                                                    ? transitionObject[currentSelectedProperty].delay
                                                                    : 0.8
                                                            }`}
                                                        >
                                                            <SliderThumb />
                                                        </Tooltip>
                                                    </Slider>
                                                </Flex>
                                            </Flex>
                                        </TabPanel>
                                    )
                                })}
                            </TabPanels>
                        </Tabs>
                    ) : (
                        ''
                    )}
                </Flex>
            ) : (
                ''
            )}
        </Flex>
    )
}
