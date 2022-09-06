import { Flex, Stack, Switch, Text } from '@chakra-ui/react'
import React, { ChangeEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { setIs0PercentPanelSelected, setIs100PercentPanelSelected, setIs10PercentPanelSelected, setIs20PercentPanelSelected, setIs30PercentPanelSelected, setIs40PercentPanelSelected, setIs50PercentPanelSelected, setIs60PercentPanelSelected, setIs70PercentPanelSelected, setIs80PercentPanelSelected, setIs90PercentPanelSelected } from './cssEditAnimeAreaSlice'

type PropsType = {
    percent: '0%' | '10%' | '20%' | '30%' | '40%' | '50%' | '60%' | '70%' | '80%' | '90%' | '100%'
}

export const PercentPanel = (props:PropsType) => {
    // ココでデータ読み書きをする
    // 専用のsliceが必要なので作成する
    /**
↑↑↑↑こんな感じのデータを０％～１００％までの箱を作成して、それぞれに常時入れておく
中身はcssEdisAreaSliceに追加作成してしまって良いと思う
あとはこのコンポーネント内で、現在選択されているパネルに該当するデータの箱にデータを入れていく
ほんで、トグルがオンになっているようだったら、その箱から読みだしたデータをbuttonViewやcodeArea,CopyButtonに渡す
また、通常のEditAreaとは異なり、EditAreaに表示されるデータも保持しておく必要がある
これはパネルが選択されるたびに、該当のパネルで作成していたデータをEditArea上で反映するようにする必要がある
     */
    const dispatch = useAppDispatch()
    let isPercentPanelSelected = false
    let setIsPercentPanelSelected = setIs0PercentPanelSelected
    switch (props.percent) {
        case '0%':
            isPercentPanelSelected = useAppSelector((state) => state.cssEditAnimeArea.is0PercentPanelSelected)
            setIsPercentPanelSelected = setIs0PercentPanelSelected
            break
        case '10%':
            isPercentPanelSelected = useAppSelector((state) => state.cssEditAnimeArea.is10PercentPanelSelected)
            setIsPercentPanelSelected = setIs10PercentPanelSelected
            break
        case '20%':
            isPercentPanelSelected = useAppSelector((state) => state.cssEditAnimeArea.is20PercentPanelSelected)
            setIsPercentPanelSelected = setIs20PercentPanelSelected
            break
        case '30%':
            isPercentPanelSelected = useAppSelector((state) => state.cssEditAnimeArea.is30PercentPanelSelected)
            setIsPercentPanelSelected = setIs30PercentPanelSelected
            break
        case '40%':
            isPercentPanelSelected = useAppSelector((state) => state.cssEditAnimeArea.is40PercentPanelSelected)
            setIsPercentPanelSelected = setIs40PercentPanelSelected
            break
        case '50%':
            isPercentPanelSelected = useAppSelector((state) => state.cssEditAnimeArea.is50PercentPanelSelected)
            setIsPercentPanelSelected = setIs50PercentPanelSelected
            break
        case '60%':
            isPercentPanelSelected = useAppSelector((state) => state.cssEditAnimeArea.is60PercentPanelSelected)
            setIsPercentPanelSelected = setIs60PercentPanelSelected
            break
        case '70%':
            isPercentPanelSelected = useAppSelector((state) => state.cssEditAnimeArea.is70PercentPanelSelected)
            setIsPercentPanelSelected = setIs70PercentPanelSelected
            break
        case '80%':
            isPercentPanelSelected = useAppSelector((state) => state.cssEditAnimeArea.is80PercentPanelSelected)
            setIsPercentPanelSelected = setIs80PercentPanelSelected
            break
        case '90%':
            isPercentPanelSelected = useAppSelector((state) => state.cssEditAnimeArea.is90PercentPanelSelected)
            setIsPercentPanelSelected = setIs90PercentPanelSelected
            break
        case '100%':
            isPercentPanelSelected = useAppSelector((state) => state.cssEditAnimeArea.is100PercentPanelSelected)
            setIsPercentPanelSelected = setIs100PercentPanelSelected
            break
        }

    const onChangeToggleHandler = (event: ChangeEvent) => {
    }

    const onClickBoxHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        dispatch(setIs0PercentPanelSelected(false))
        dispatch(setIs10PercentPanelSelected(false))
        dispatch(setIs20PercentPanelSelected(false))
        dispatch(setIs30PercentPanelSelected(false))
        dispatch(setIs40PercentPanelSelected(false))
        dispatch(setIs50PercentPanelSelected(false))
        dispatch(setIs60PercentPanelSelected(false))
        dispatch(setIs70PercentPanelSelected(false))
        dispatch(setIs80PercentPanelSelected(false))
        dispatch(setIs90PercentPanelSelected(false))
        dispatch(setIs100PercentPanelSelected(false))
        dispatch(setIsPercentPanelSelected(true))
    }
    return (
        <Flex flexDirection={'column'} margin={'0.1rem'} alignItems={'center'}>
            <Stack 
            align="center" 
            direction="row" 
            position={'relative'} 
            top={'1.6rem'} 
            zIndex={2}
            >
                <Switch id="innerSwitch" size="md" onChange={(e) => onChangeToggleHandler(e)} />
            </Stack>
            <Flex
                id="outerBox"
                flexDirection={'column'}
                justifyContent={'end'}
                backgroundColor={isPercentPanelSelected ? 'rgb(134 232 232)' : '#263450'}
                height={'4rem'}
                width={'4.6rem'}
                paddingBottom={'0.4rem'}
                borderRadius={'0.4rem'}
                _hover={{ opacity: '0.5', cursor: 'pointer' }}
                onClick={(e) => onClickBoxHandler(e)}
            >
                <Text textAlign={'center'}>{props.percent}</Text>
            </Flex>
        </Flex>
    )
}
