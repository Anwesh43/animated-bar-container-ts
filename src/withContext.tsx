import React from 'react'
import {useAnimatedScale} from './hooks'

const withContext = (MainComponent : React.FC<any>) : React.FC<any> => {
    
    return (props : any) => {
        const {scale, start : onClick} = useAnimatedScale()
        const newProps = {
            ...props,
            scale, 
            onClick 
        }
        return (<MainComponent {...newProps}>

        </MainComponent>)
    }
} 

export default withContext 