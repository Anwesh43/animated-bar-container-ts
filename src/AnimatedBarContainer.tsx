import React from "react";
import AnimatedBar from "./AnimatedBar";

interface ABCProps {
    n : number 
}

const getAnimatedBars = (n : number) : Array<React.ReactElement> => {
    const animatedBars : Array<React.ReactElement> = []
    for (let i = 0; i < n; i++) {
        animatedBars.push(<AnimatedBar i = {i}></AnimatedBar>)
    }
    return animatedBars 
}
const AnimatedBarContainer = (props : ABCProps) => {
    return (
        <React.Fragment>
            {getAnimatedBars(props.n)}
        </React.Fragment>
    )
}

export default AnimatedBarContainer