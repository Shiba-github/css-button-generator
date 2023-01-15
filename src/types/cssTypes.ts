export type arrayType = {
    [prop: string]: string
}

export type cssTypes = {
    color: string
    backgroundColor: string
    border: string
    padding: string
    textDecoration: string
    display: string
    fontSize: string
    borderColor: string
    borderStyle: string
    borderWidth: string
    borderRadius: string
    width: string
    height: string
    cursor: string
}
export const buttonInitialState: cssTypes = {
    color: 'rgba(255,0,0,1)',
    backgroundColor: 'rgba(0,0,255,1)',
    border: 'none',
    padding: '0px',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '30px',
    borderColor: 'none',
    borderStyle: 'none',
    borderWidth: '0px',
    borderRadius: '0px',
    width: '150px',
    height: '75x',
    cursor: 'auto',
}
