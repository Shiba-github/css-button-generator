export const copyAnimeVariants = {
    init: {
        backgroundColor: 'black',
    },
    onClick: {
        backgroundColor: 'teal',
        scale: 2.0,
        transition: { type: 'spring', stiffness: 1000, damping: 6 },
    },
    whileTap: {
        backgroundColor: 'teal',
        scale: 0.7,
    },
    whileHover: {
        backgroundColor: 'teal',
        scale: 1.0,
        transition: { type: 'spring', stiffness: 900, damping: 5 },
    },
    whileHoverOut: {
        backgroundColor: 'black',
    },
}
