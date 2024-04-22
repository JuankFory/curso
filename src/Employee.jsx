import "bootstrap/dist/css/bootstrap.min.css"
import { FaEdit } from "react-icons/fa";
import {AiFillDelete  } from "react-icons/ai"
import {  FaUserPlus } from "react-icons/fa";
import React from "react";
import { useState,useEffect } from "react";

export const Employee = () =>{

    const [empleado,setEmpleado]= useState([]);

    useEffect(function(){
        ListEmployee();
    },[]);

    const ListEmployee = async () =>{
         let respo = await fetch("https://nodejs-mysql-api-text-production.up.railway.app/api/employees");
       let ListaEmployee = await respo.json();
          setEmpleado(ListaEmployee);
          console.log("Este es Employee");
          console.log(ListaEmployee);
          }

return(
    <div className="container-fluid">
        <h1 style={{textAlign:"center"}}>Datos Employee</h1>
        <table className="table table-dark table-hover">
        <thead >
                <tr >
                    <th class="bg-success">Id</th>
                    <th class="bg-success">Name</th>
                    <th class="bg-success">Salary</th>    
                    <th class="bg-success" colSpan={3}>Actions</th>              
                </tr>
            </thead>
            <tbody>
            {empleado.map((item, i) =>(
                <tr key={i}>
               <td >{item.id} </td>
                 <td >{item.name}</td>
                 <td>{item.salary}</td> 
                 <td>
                 <button title='Crear' style={{marginRight:'3px'}} className='btn btn-warning' onClick={()=>{}}><FaUserPlus/></button>
        
        <button title='Actuallizar' style={{marginRight:'3px'}} className='btn btn-success' onClick={()=>{}}><FaEdit /></button>
<button title='Eliminar' style={{marginRight:'3px'}} className='btn btn-danger'
 onClick={()=>{
 }}><AiFillDelete  /></button>
                    </td>             
                </tr>             

            )  )}           
            </tbody>
        </table>
    </div>    
)

    }
