import { useNavigate,useParams } from "react-router-dom"
import { useContext } from "react";
import Axios from "axios";
import  {AppContext} from "../Routing"
import { useQuery } from "@tanstack/react-query";
import { useToggle } from "./HOOKS/useToggle";
import { useCatFact } from "./HOOKS/useCatFact";
import { useCount } from "./HOOKS/useCount";
import { Person } from "./person";

export const Home = ()=>{
const { username } = useContext(AppContext)
    const navigate = useNavigate();

    const {data,refecthData,isLoading} = useCatFact()
    const {state : isvisible, Toggle} = useToggle()
    const {count ,increaseCount,decreaseCount,restart} = useCount(100)

    return(
    <div>
    <h1>Hello you are at the home page </h1>
    <button onClick={()=>{navigate("/Contact")}}>Click to go to the about Contact Page</button> 
    <h1>{username }</h1>
    {/* {data ? <p>This the fact about the cat : {data?.fact}</p> : <p>Loading...</p>}*/}
    {isLoading ? <p>Loading...</p> : <p>{data?.fact}</p>}
    <button onClick={refecthData}>Click to Refecth</button>
    <h1>Creating my own HOOOK</h1>
    <button onClick={Toggle}>{isvisible ? "hide" : "show"}</button>
    {isvisible && <h2> Hidden Text </h2>}
    <h3>Play with the count</h3>
    <button onClick={increaseCount}>Increase</button>
    <button onClick={decreaseCount}>Decrease</button>
    <button onClick={restart}>Restart</button>
    <h1>{count}</h1>
    <h4> <Person name="Innocent" email="tearracy@gmail.com" age={12} isMarried={true} friend={["kayumba","ettiene","terry"]} /> </h4>
    </div>
    )
}
