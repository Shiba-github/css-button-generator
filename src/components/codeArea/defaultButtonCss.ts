// ここに存在しない、または数値が同じであるCSSプロパティは表示するようにする
type defaultButtonType = {
    color: string
    backgroundColor: string
    border: string
    padding: string
    textDecoration: string
    display: string
    fontSize: string
    borderColor: string
    borderStyle: string
    borderRadius: string
    width: string
    height: string
}

export const defaultButtonCss: defaultButtonType = {
    color: 'rgba(255,0,0,1)',
    backgroundColor: 'rgba(0,0,255,1)',
    border: 'none',
    padding: '0px',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: 'ALWAYS',
    borderColor: 'none',
    borderStyle: 'none',
    borderRadius: '0px',
    width: 'ALWAYS',
    height: 'ALWAYS',
}
