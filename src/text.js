import { useState,useEffect } from "react";
import React from "react";

export const Text = ()=>{
    const [Text2,setText2] = useState('');
    const ChangeText2 = (event) =>{
        setText2(event.target.value)
      }


    useEffect(()=>{
        console.log("Component Mounted");
        
        return ()=>{
          console.log("Component UnMounted")
        }
        },[]);
        
    return (
            <div>
<h1>Life cycle in React</h1>
 
<input onChange={ChangeText2}></input>
  <p>{Text2}</p>
            </div>
        )
}
