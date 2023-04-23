export const ProductAvl =()=>{
    const products = ["TomATO","potato","fish","cocoa"]
    return (
        <div>
            {products.map((food)=>{ return (<h1>{food}</h1>)
            })}
        </div>
    )
}