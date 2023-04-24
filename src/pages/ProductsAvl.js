import background from './video/background.mp4'
import styles from '../App.module.css'



export const ProductAvl =()=>{
    const products = ["TomATO","potato","fish","cocoa","tatana"]
    return (
        
        
        <div className={styles.background}>
             <video src={background} autoPlay loop muted/> 
        <div className={styles.word}>
           
            {products.map((food)=>{ return (<h1>{food}</h1>)})}
            <iframe width="560" height="315" src="https://www.youtube.com/embed/bjQqIe6nM3E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h1 >Welcome to my website</h1>
        </div>
        </div>
    )
}