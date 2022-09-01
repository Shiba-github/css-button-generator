export const SimpleRoundIconButtonVariants = {
    hover: {
        boxShadow: 'rgba(0, 0, 0, .3) 2px 8px 8px -5px',
        transform: 'translate3d(0, 2px, 0)',
        transition: {
            duration: 0.1,
        },
    },
    tap: {
        boxShadow: 'rgba(0, 0, 0, .3) 0px 0px 0px 0px',
        transform: 'translate3d(0, 2px, 0)',
        transition: {
            duration: 0.1,
        },
    },
    off: {
        boxShadow: 'rgba(0, 0, 0, .2) 15px 28px 25px -18px',
        transition: { duration: 0.1 },
    },
    pseudoInit: {
        width: '70px',
        height: '70px',
        borderRadius: '50%',
        borderStyle: 'solid',
        borderWidth: '3px',
        borderColor: '#1FE88A',
        backgroundColor: 'rgb(70 68 94)',
    },
    pseudoHover: {
        borderWidth: '35px',
    },
    pseudoHoverOut: {
        borderWidth: '3px',
    },
}
