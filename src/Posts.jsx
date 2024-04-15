//rafce para crear un componente desde cero atajo
import 'bootstrap/dist/css/bootstrap.min.css';
import { ImTerminal   } from "react-icons/im";
import {AiFillDelete  } from "react-icons/ai"
import { FaRegFileArchive, FaUserPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import {useState,useEffect} from "react";
import {Modal} from "./ModalUsuario";
//import { array } from 'prop-types';
import "./Api.css";
 
export const Api=  ()=>{
    const [contador, setContador]= useState(0);
    const [data,setData]= useState([]);
    const [modal, setModal]= useState(false);
    const openModal=()=>setModal(true)
    const closeModal=()=>setModal(false)

    useEffect(function(){
         fetchData();        
    },[])

    const Crear = async()=>{       

    
        console.log("Metodo crear con numero ");
    }
    const EditData= async (id)=>{
        const Edit=  await fetch('https://jsonplaceholder.typicode.com/posts/'+id, {
            method: 'PUT',
            body: JSON.stringify({
              id: +id,
              name: 'Juan Carlos',
              username: 'juanfory',
              email: "juankfory4@gmail.com",
              address:{street:"Estados Unidos",city:"Angeles", suite:"Apt. Fory"},
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          }).then((response) => response.json())
          .then((json) => console.log(json));
          
         if(Edit !==null){
            const dataUpdate=data.map(item=>item.id===id ? Edit:item);
          
           setData(dataUpdate);
            console.log("Dato Actualizado con # "+id);
         }else{
            console.log("Error al Actualizar");
         }
    }
 
    const EliminarData = async (id) => {
        const eliminar = await fetch('https://jsonplaceholder.typicode.com/users/'+id, {
            method: 'DELETE',
        });
        if (eliminar.status === 200) {
            const newData= data.filter(item => item.id !== id);
            setData(newData);
            console.log("Dato eliminado con el id # "+id);
            // Filtrar los datos para eliminar el elemento con el id correspondiente
          //  const newData = data.filter(item => item.id !== id);
        //setData(newData); // Actualizar el estado con los datos filtra
        } else {
            console.error("Error al Eliminar");
        }
    }

    const FiltarData =async (id)=> {

        const filtar= fetch('https://jsonplaceholder.typicode.com/users?id='+id)
        .then((response) => response.json())
        .then((json) => console.log(json));
        if(filtar!== null){
            console.log("Dato Filtardo");
        }
    }

    const fetchData= async ()=>{
        let response= await fetch("https://jsonplaceholder.typicode.com/users");
        let jsondata= await response.json();
        setData(jsondata);
    }


return( <div className='container-fluid'>
   
  <h1 style={{textAlign:"center"}}>Datos de una Api Prueba # {contador}</h1>
  <span>Codigo</span>
  <input placeholder='Filtrar por codigo' type='number'onChange={function(e,texto){
    texto= (e.target.value);
    console.log(texto);

  }} /><button className='btn btn-success btnspace' onClick={function(){
    FiltarData(1)
  }}><FaSearch /></button>
  <button  className="btn btn-primary btnspace" onClick={function(){
fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(data=>console.log(data)).catch(console.error());
}}><ImTerminal/> Consola</button> 

<button className="btn btn-success btnspace"onClick={function(){
setContador(contador+1);
}}>incrementar</button>

<button className="btn btn-primary btnspace" onClick={function(){

    setContador(contador-1);
}}>Restar</button>

<button className="btn btn-success btnspace" onClick={function(){

    setContador(0)
}}>Reiniciar</button>

<button className='btn btn-info'onClick={openModal} >Open Modal</button>
{modal && <Modal closeModal={closeModal} />}

    <table className='table table-dark table-hover mt-2'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>City</th>
                <th>street</th>
                <th>Suite</th>
                <th colSpan={3}>Actions</th>
             
            </tr>
        </thead>
        <tbody>  
            {data.map((item,i) =>(
                <tr key={i}>
                    <td>{i=i+1}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>   
                    <td>{item.address.city}</td>   
                    <td>{item.address.street}</td>  
                    <td>{item.address.suite}</td>    
                    <td>
         <button title='Crear' style={{marginRight:'3px'}} className='btn btn-warning' onClick={()=>Crear()}><FaUserPlus/></button>
        
        <button title='Actuallizar' style={{marginRight:'3px'}} className='btn btn-success' onClick={()=>EditData(1)}><FaEdit /></button>
<button title='Eliminar' style={{marginRight:'3px'}} className='btn btn-danger'
 onClick={function(){
    EliminarData(3)
 }}><AiFillDelete  /></button>

 </td>                               
    </tr>            
           ))}         
             
        </tbody>
    </table>

    
</div> 

)
 }