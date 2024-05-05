import React, { useState, useEffect } from 'react';
import { fetchDataFromSoapService } from './Services';
import {Soap} from "./ServiceWeb";
import "./Api.css"

//import {Xml} from 'xml2js';
export const App = () => {
  const [tableData, setTableData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        debugger;
        const soapResponse = await new Soap();
        // Extrae los datos XML de la respuesta SOAP
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(soapResponse, "text/xml");

        let Elements= xmlDoc.getElementsByTagName("LIST_OF_LISTATRN");
        for (let i = 0; i < Elements.length; i++) {
            const element= [];
             element[0] = Elements[i];
            console.log("juan")
        }
        // Encuentra la lista de transacciones dentro del XML
        ///const transactionList = xmlDoc.querySelectorAll('LIST_OF_LISTATRN');
        debugger;
        //setTableData(xmlDoc);
        
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <>     
      <h1 align="center">Datos de Prueba React</h1>
      <table id="t01" border="2" className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">AGCORI</th>
            <th scope="col">CODCAJ</th>
            <th scope="col">CODCAN</th>
            <th scope="col">CODEMP</th>
            <th scope="col">CODOPC</th>
            <th scope="col">CODPRO</th>
            <th scope="col">DESTRN</th>
            <th scope="col">FECING</th>
            <th scope="col">HORING</th>
            <th scope="col">TRNCOM</th>
            <th scope="col">TRNCRE</th>
            <th scope="col">TRNDEB</th>
            <th scope="col">USRING</th>
            <th scope="col">ACTIONS</th>
          </tr>
        </thead>
        <tbody>

       
        </tbody>
      </table>
    </>
  );
};


