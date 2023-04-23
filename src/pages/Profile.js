import { ChangeProfile } from "../components/changeProfile"
import { AppContext } from "../Routing"
import { useContext } from "react"
export const Profile = ()=>{
    const {username,setUsername} = useContext(AppContext)
    return (
        <div>
            <h1>PROFILE , user :{username}</h1>
            <ChangeProfile setUsername={setUsername} />
        </div>
    )
}