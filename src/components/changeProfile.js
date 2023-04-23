import { useState } from "react"
import { AppContext } from "../Routing";
import { useContext } from "react";

export const ChangeProfile = ()=>{
const [NewUserName,setNewUserName] = useState(""); 
const {setUsername} = useContext(AppContext)  
    return(
        <div>
           <input type="text" onChange={(event)=>{setNewUserName(event.target.value)}}/> 
           <button onClick={()=>{setUsername(NewUserName)}}>Change Username</button>
        </div>
    )
}