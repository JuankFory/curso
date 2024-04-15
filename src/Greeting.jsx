import "./GrettingEstilo.css";
export function Greeting({title, name="User"}){
   // manera de utilizar css directo return <h1 style={{textAlign:"center"}}>Estoy Aprendiendo React</h1>
   // const style={textAlign:"center"};
console.log(title, name);
return <h1 className="GreetingStyle">Estoy Aprendiendo React Mi Usuario es {name}</h1>

}
export function UserCard(props){
console.log(props);
return <div style={{margin:"20px"}}>
    <h1 style={{color:"blue"}}>{props.name}</h1>
    <p style={{color:"red", fontWeight:"bolder"}}>${props.valor}</p>    
    <p>{props.point[2]}</p>
    <p>{props.address.city}</p>
    <p style={props.text ? {background:"green"}:{background:"red"}}> 
    {props.text ? "TAREA REALIZADA": "TAREA PENDIENTE"}
     </p>
    </div>

}