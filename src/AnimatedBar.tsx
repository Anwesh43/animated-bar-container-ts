import React from 'react'
import { useStyle } from './hooks'
import withContext from './withContext'

interface AnimatedBarProps {
    scale : number, 
    onClick : () => void, 
    i : number 
}

const AnimatedBar : React.FC<AnimatedBarProps> = (props : AnimatedBarProps) => {
    const {barStyle} = useStyle(props.i, props.scale)
    return (
        <div style = {barStyle()} onClick = {() => {
            props.onClick()
        }}>
        </div>
    )
}

export default withContext(AnimatedBar)