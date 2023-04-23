import { useParams } from "react-router-dom"
export const Menu = ()=>{
    const {food} = useParams();
    return<h1>Hello you are at the Menu page {food}</h1>
}
