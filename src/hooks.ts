import {
    useEffect, 
    useState
} from 'react'

export const useAnimatedScale = (scGap : number = 0.01, delay : number = 20) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    const [dir, setDir] = useState(1)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    setScale((prev : number) : number => {
                        if (prev < 0 || prev > 1) {
                            return scale + dir 
                        }
                        return prev + scGap * dir 
                    })
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    }, [])
    return {
        w, 
        h
    }
}

export const useStyle = (i : number, scale : number) => {
    const {w, h} = useDimension()
    const barW : number = Math.min(w, h) / 6
    const barH : number = Math.min(w, h) / 15 
    const position  = 'absolute'
    const background : string = `#64dd17`
    return {
        barStyle() {
            const top = `${(h /2 - barW) * scale}px`
            const left = `${i * barW}px`
            const transform = `rotate(${90 * scale}deg)`
            const width = `${barW}px`
            const height = `${barH}px`
            return {
                position, 
                top, 
                left,
                background, 
                transform, 
                width, 
                height 
            }
        }
    }
}