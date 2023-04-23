import { useState } from "react"

export const useCount = (initial= 0)=>{
    const [count,setcount] = useState(initial)

   const increaseCount =()=>{
     setcount(count+1)
    }
   const decreaseCount = ()=>{
   setcount(count-1)
   }
   const restart = ()=>{
    setcount(0);
   }
   return {count, increaseCount,decreaseCount,restart}
}












