import { Link } from "react-router-dom"
export const NavBAR = () =>{
    return (
        <div>
            <Link to="/" style={{padding:"20px",color:'orange'}}>Home</Link>
            <Link to="/menu" style={{padding:"20px",color:'violet'}}>Menu</Link>
            <Link to="/contact" style={{padding:"20px",color:'green'}}>Contact</Link>
            <Link to="/product">Product</Link>
            <Link to="/profile" style={{padding:"20px"}}>profile</Link>
            <Link to="/form">form</Link>
        </div>
    )
}