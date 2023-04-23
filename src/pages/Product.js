 import { Outlet,Link } from "react-router-dom"
export const Product =  ()=>{
    return(
        <div>
            <Link to="/product/price" style={{backgroundColor:"green",color:"white"}}>Price</Link> 
            <Link to="/product/available">Product Available</Link>
        <Outlet />
        </div>
        )
}