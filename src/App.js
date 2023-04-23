import styles from './App.module.css';
import { useState,BrowserRouter as Router,Routes,Route  } from 'react';
import {Worker} from './Worker';
import { Task } from './Task';
import { Home } from './pages/Home';

function App() {

  const mugisha = false;
////////////////////////////Lists/////////////////////////////////////////////////
const workers = ["Mukamana","Jay Bruce","Jenny Mike","Samanta Alinuamba"];

const workers2 = [{name:"pedro", age: 21},
                  {name: "innocent",age:16},
                  {name:"Ganza" ,age:45}];

const planets = [{name:"Mars", isGasPlanet:false},
                 {name:"Earth", isGasPlanet:false},
                 {name:"Jupiter", isGasPlanet:true},
                 {name:"Venus", isGasPlanet:false},
                 {name:"Neptune", isGasPlanet:true},
                 {name:"Uranus", isGasPlanet:true},];

const  [age,setage] = useState(0);
const increaseAge =()=>{
  setage(age+1);
}

const [inputValue,setinputValue] = useState('');
const handleInputValue = (event) => {
  setinputValue(event.target.value);/* the value inputed by the user in the form by the user are got like this */}

const [showtext,setshowtext] =  useState(true);
const showOrHide = () =>{
  setshowtext(!showtext)
}

const [textColor,settextColor] = useState("black");
const changeColor = () => {
    settextColor(textColor === "black" ? "goldenrod" : "black");
}

const [count,setcount] = useState(0);
const increaseCount = () =>{
      setcount(count + 1);
}
const decreasecount = () =>{
  setcount(count - 1);
}
const setCountToZero = ()=>{
  setcount(0);
}
//////////////////////////////////////////////TASK LIST///////////////////////////////////////
const [list,setlist] = useState([]);
const [newtask,setnewtask] = useState('');

const handleWord = (event) =>{
  setnewtask(event.target.value);
}
const addToList = () => {
const task ={
  id:list.length === 0 ? 1 : list[list.length-1].id+1,
  taskname: newtask,
  completed:false,
}
      const newlist = [...list, task];{/* the 3 dots there mean that this current variable will contain the value in list and newword*/}
      setlist(newlist);

}
const deleteTask = (id)=>{
  //note that here task represent the information in the list and taskname represent the specific current information in the list that we are on. 
  const newlist1 = list.filter((task)=>{
   return task.id !== id;//here it will return false when the task is equal to the taskname to mean if it is false it implies that we don't want that specific task or value
  })
setlist(newlist1)
}

const completeTask = (id)=>{
  setlist(
    list.map((task)=>{
      if(task.id === id){
        return {...task,completed:true};
      }else{
        return task
      }
    }));
};


  return (
   
      <div className={styles.App}>
        {/*-------Codes under i for how we use Props in a return */}
      {/* <User name="Mugisha" age={16} subject="Maths"/>
      <User name="Ganza" age={13} subject="Physics"/>
      <User name="Sabrina" age={9} subject="English"/> */}


            {/* New way of styling  in Reacrt*/}
      <h1 className={styles.inno}>Innocent</h1>
      <h2 className={styles.inno2}>Shami</h2>
      <h3 style={{color:"green",}}>Mugisha  {mugisha ? 16 : 18 }</h3>
 <div>
  <h1>Dealing with lists</h1>
  <h1>-------------------------</h1>

   {workers.map((worker,key)=>{
    return <h1>{worker}</h1>
   })}

 </div>
 <br />
 <h2 style={{color:"orangered"}}>Now with the object lists</h2>
 {workers2.map((worker,key)=>{
  return <div> <Worker  name={worker.name} age={worker.age}/></div>
 })}
 {/*dealing with the homework for displayng the gas planet*/}
 <div><h1>Gases worlds or planets </h1>
   {planets.map((planet,key)=> planet.isGasPlanet && <h1>{planet.name}</h1>)}
 </div>


{/*state and react statehoos*/}
<div>
<h1 style={{color:"red"}}>states and state hooks</h1>
<h1 style={{color:"grey"}}>1</h1>
<button onClick={increaseAge}>Click Here to In crease the age</button>
<h1>{age}</h1>

<h2 style={{color:"goldenrod"}}>Hey int the provided box and see what happens</h2>
<input type="text" onChange={handleInputValue}/>
<h2>{inputValue}</h2>

<h1 style={{color:"grey"}}>2</h1>
<button onClick={showOrHide}>click to SHOW/HIDE</button>
{showtext && <h3>MY NAME IS INNOCENT </h3>}

<h1 style={{color:"grey"}}>3</h1>
<button onClick={changeColor}>Click here to change the color </button>
<h2 style={{color:textColor}}>MY NAME IS MUGISHA</h2>

<h1 style={{color:"grey"}}>4</h1>
<button onClick={increaseCount}>Increase</button>
<button onClick={decreasecount}>Decrease</button>
<button onClick={setCountToZero}>Set to Zero</button>
<h1>{count}</h1>

<div>
  <h1>Add you task Here</h1>
   <input  type="text" onChange={handleWord}/>
   <button onClick={addToList}>add task</button>
   <h2>{list.map((task)=>{
    return <div>
           <Task taskname={task.taskname} id={task.id} deleteTask={deleteTask} completed={task.completed} completeTask={completeTask}/>       {/*the deletetask is a prop in Task component normally for making a connection of the Deleting funcion we created fro deleting with our Component Note that functions can also be passed as props*/}
           </div>    
    
    //Note that for fntion passed in  an html tag with arguments it is wrtitten in An Anonymous function like this ex: <h1> {()=>{funtion_name(ARGUMENT)}} </h1>
  })}</h2>
</div>
</div>
<div>
  
  {/* <Text ShowInputBox={ShowInputBox} Text2={Text2} ShowText2={ShowText2} ChangeText2={ChangeText2}/> */}
</div>








</div>);
}

export default App;
