import React from 'react'
import { ButtonTemplate } from '../ButtonTemplate'

const buttonStyle = {
    width: '70px',
    height: '70px',
    backgroundColor: 'transparent',
    // backgroundImage: `url(${home})`,
    borderRadius: '50%',
    borderStyle: 'solid',
    borderWidth: '3px',
    borderColor: '#1FE88A',
    boxShadow: 'rgba(0, 0, 0, .2) 15px 28px 25px -18px',
    color: '#41403e',
    cursor: 'pointer',
    padding: '.75rem',
    // backgroundSize: '70%',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center',
    '&::before': {
        // content: '',
        width: '70px',
        height: '70px',
        borderRadius: '50%',
        borderStyle: 'solid',
        borderWidth: '3px',
        borderColor: '#1FE88A',
        backgroundColor: 'rgb(70 68 94)',
    },
    '&:hover::before': {
        borderWidth: '35px',
    },
    '&:hover': {
        boxShadow: 'rgba(0, 0, 0, .3) 2px 8px 8px -5px',
        // transform: 'translate3d(0, 2px, 0)',
    },
    '&:active': {
        boxShadow: 'rgba(0, 0, 0, .3) 0px 0px 0px 0px',
        // transform: 'translate3d(0, 2px, 0)',
    },
}

export const SimpleRoundIconButton = () => {
    return <ButtonTemplate {...buttonStyle} />
    // return (
    //     <Flex flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
    //         {/* cssにしたときはbeforeで代用予定 */}
    //         <Box
    //             as={motion.div}
    //             variants={SimpleRoundIconButtonVariants}
    //             initial={SimpleRoundIconButtonVariants.pseudoInit}
    //             animate={
    //                 isHover ? SimpleRoundIconButtonVariants.pseudoHover : SimpleRoundIconButtonVariants.pseudoHoverOut
    //             }
    //             whileHover={
    //                 isHover ? SimpleRoundIconButtonVariants.pseudoHover : SimpleRoundIconButtonVariants.pseudoHoverOut
    //             }
    //             style={pseudoStyle}
    //         />
    //         <Button
    //             as={motion.button}
    //             variants={SimpleRoundIconButtonVariants}
    //             initial={SimpleRoundIconButtonVariants.off}
    //             whileHover={SimpleRoundIconButtonVariants.hover}
    //             whileTap={SimpleRoundIconButtonVariants.tap}
    //             style={buttonStyle}
    //             onClick={() => onClick()}
    //             onHoverStart={() => setIsHover(true)}
    //             onHoverEnd={() => setIsHover(false)}
    //         ></Button>
    //     </Flex>
    // )
}
