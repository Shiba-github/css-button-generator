import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { ButtonView } from '../../components/buttonView/ButtonView'
import { CodeArea } from '../../components/codeArea/CodeArea'
import { CssCustomArea } from '../../components/cssCustomArea/CssCustomArea'
import { CssEditArea } from '../../components/cssEditArea/CssEditArea'
import { PseudoArea } from '../../components/pseudoArea/PseudoArea'

const Editor = () => {
    return (
        <Grid
            templateAreas={`
                "pseudo edit button"
                "custom custom code"
            `}
            gridTemplateRows={'1fr 1fr'}
            gridTemplateColumns={'15rem 1fr 35rem'}
            height={'100vh'}
            width={'100vw'}
            overflowX={'hidden'}
            overflowY={'hidden'}
        >
            <GridItem area={'pseudo'} backgroundColor={'rgb(26 32 44)'} overflowX={'hidden'} overflowY={'scroll'}>
                <PseudoArea />
            </GridItem>
            <GridItem
                display={'flex'}
                flexDirection={'column'}
                area={'custom'}
                backgroundColor={'rgb(26 32 44)'}
                height={'30rem'}
            >
                <CssCustomArea />
            </GridItem>
            <GridItem area={'edit'} backgroundColor={'gray.500'} overflowX={'hidden'} overflowY={'scroll'}>
                <CssEditArea />
            </GridItem>
            <GridItem area={'button'} backgroundColor={'gray.200'} overflow={'hidden'}>
                <ButtonView />
            </GridItem>
            <GridItem
                display={'flex'}
                area={'code'}
                backgroundColor={'rgb(26 32 44)'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <CodeArea />
            </GridItem>
        </Grid>
    )
}

export default Editor
