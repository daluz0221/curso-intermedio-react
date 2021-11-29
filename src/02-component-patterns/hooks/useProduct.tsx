import { useState } from "react";




const useProduct = (initialState:number) => {

    const [counter, setCounter] = useState(initialState);

    const increaseBy = (value:number) => {
      setCounter( prev => Math.max( prev + value, 0) )
    }

    return {counter, increaseBy}
}

export default useProduct;
