import React from 'react'
import { useStyle } from './hooks'
import withContext from './withContext'

interface AnimatedBarProps {
    scale : number, 
    onClick : () => void, 
    i : number 
}

const AnimatedBar = (props : AnimatedBarProps) => {
    const {barStyle} = useStyle(props.i, props.scale)
    return (
        <div style = {barStyle()}>
        </div>
    )
}

export default withContext(AnimatedBar)