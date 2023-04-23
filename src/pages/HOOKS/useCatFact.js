import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
export const useCatFact =()=>{

    const { data,refetch,isLoading,error } = useQuery(["cat"],async ()=>{
        await Axios.get("https://catfact.ninja/fact").then((res)=>res.data)
    })
const refecthData =() =>{
    alert("Refetching data")
    refetch();
}


    return {data,refecthData,isLoading}
}






















