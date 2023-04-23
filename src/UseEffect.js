import { useState, useEffect, BrowserRouter as Router,Routes,Route } from 'react';
import styles from './App.module.css'
import { Text } from './text';
import Axios from 'axios';
import { Home } from './pages/Home';

function UseEffectHook() {
    const [ShowText2, setShowText2] = useState(false);
    const ShowInputBox = () => {
        setShowText2(!ShowText2);
    };
//The Axios i'm using is for feching the Api as bellow and it is better than using 'Fecth'
const [CatFact,setCatFact] =useState("")
const FectCatFact = () =>{
    Axios.get("https://catfact.ninja/fact")
    .then((res)=>{ setCatFact(res.data.fact);
    });
}
useEffect(()=>{
FectCatFact();
},[])
///////////////////Agi predicting ///////////////////
const [Name,setName] =  useState("");
const [PredictedValue,setPredictedValue] = useState(null);
const fetchData = () =>{
    Axios.get(`https://api.agify.io/?name=${Name}`)
    .then((res)=>{setPredictedValue(res.data)})
}


const GettingName =  (event) =>{
setName(event.target.value);
}


    return (
        <div className={styles.App}>
            <button onClick={ShowInputBox}>Show/hide where to type</button>
            {ShowText2 && <Text />}
            <button onClick={FectCatFact}>Generate Cat Fact</button>
            <p>{CatFact}</p>
            {/* {tree.map((item) => (<div>
                <h1>{item.name}</h1>
                <p>{item.l ocation}</p>
            </div>))} */}
        <input placeholder='ex:Noah...' onChange={GettingName}/>
        <button onClick={fetchData}> Predict the age</button>
        <h1>Name:{PredictedValue?.name}</h1>
        <h1>Age:{PredictedValue?.age}</h1>
        <h1>Count:{PredictedValue?.count}</h1>


<div>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>  
    </Router>
</div>






        </div>
    )
}
export default UseEffectHook;


