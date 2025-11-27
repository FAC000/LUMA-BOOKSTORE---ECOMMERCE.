import { useState } from "react"


export function useCounter(minValue = 1, maxValue = 10, step = 1) {

    const [count, setCount] = useState(minValue)

    const incrementar = () => {
        if (count <= maxValue) {
            setCount(count + step )
        }
    }

    const decrementar = () => {
        if (count >= minValue) {
            setCount(count - step )
        }
    }


    return {
        incrementar, decrementar, count
    }
}




