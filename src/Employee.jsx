import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";
import { useState,useEffect } from "react";

export const Employee = () =>{

    const [dataempleado,setDataEmpleado]= useState([]);

    useEffect(function(){
        ListEmployee();
    },[]);

    const ListEmployee = async () =>{
  /*let respo = 
  //await fetch("https://nodejs-mysql-api-text-production.up.railway.app/api/employees");
                
        //  let ListaEmployee = await respo.json();

          //setDataEmpleado(ListaEmployee);
          console.log("Este es Employee");
          console.log(ListaEmployee);
          */
          


    }


return(
    <div className="container-fluid">
        <h1 style={{textAlign:"center"}}>Datos Employee</h1>
        <table className="table table.hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Salary</th>                  
                </tr>
            </thead>
        </table>
    </div>    
)

    }
