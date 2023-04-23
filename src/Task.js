export const Task = (props) =>{
  
return (  
  <div style={{backgroundColor:props.completed ? "green" : "white"}}>
    <h2>{props.taskname}</h2>
    <button onClick={()=>{props.deleteTask(props.id)}}> -X- </button>
    <button onClick={()=>{props.completeTask(props.id)}}>TasK Complete</button>
  </div>
);
};  