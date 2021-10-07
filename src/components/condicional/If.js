export default props => {
    const esleChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0]

    const ifChildren = props.children.filter(child => {
        return child !== esleChild
    })
    
    if (props.test) {
        return ifChildren
    } else if (esleChild) {
        return esleChild
    } else {
        return false
    }
}

export const Else = props => props.children