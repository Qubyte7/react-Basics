import { useContext,useEffect,useState } from "react";

export const useToggle = (initialVal = false) =>{
    const [state,setstate] = useState(initialVal);

const Toggle = ()=>{
    setstate((val)=> !val)
}

return {state , Toggle};
};






