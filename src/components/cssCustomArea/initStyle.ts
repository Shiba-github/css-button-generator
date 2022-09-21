export type customAreaButtonType = {
    width?: string
    height?: string
    padding?: string
    color?: string
    backgroundColor?: string
    onclickBackgroundColor?: string
    whileHoverBackgroundColor?: string
    whileHoverOnClickBackgroundColor?: string
    opacity?: string
    fontSize?: string
    justifyContent?: string
    boxShadow?: string
    borderRadius?: string
}

export const customButtonStyle:customAreaButtonType = {
    width: '15rem',
    height: '2rem',
    padding: '0.2rem',
    color: '#fff',
    backgroundColor: '#1a202c',
    onclickBackgroundColor: 'teal.500',
    whileHoverBackgroundColor: '#3a4762',
    whileHoverOnClickBackgroundColor: 'teal.400',
    opacity: '0.5',
    fontSize: '1rem',
    justifyContent: 'start',
    boxShadow: 'none !important',
    borderRadius: '0rem',
}