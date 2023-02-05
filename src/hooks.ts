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