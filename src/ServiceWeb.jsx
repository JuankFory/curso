import { useEffect, useState } from "react";
//import parser from "xml2js";

export const Soap = () => {
    const [soapResponse, setSoapResponse] = useState(null);
    const [xmlDoc, setxmlDoc] = useState([]);  

   
    useEffect(() => {
        const fetchData = async () => {
            const url = "https://servicios.taylor-johnson.co:10105/web/services/parametrizarUrsCanTrnService/parametrizarUrsCanTrn";

            const xmlBody = '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:par="http://parametrizarurscantrn.wsbeans.iseries/">' +
                '<soap:Header/>' +
                '<soap:Body>' +
                '<par:bnkws156>' +
                '<arg0>' +
                '<i_AGCORI></i_AGCORI>' +
                '<i_CODCAN></i_CODCAN>' +
                '<i_CODOPC></i_CODOPC>' +
                '<i_CODPRO></i_CODPRO>' +
                '<i_CODTRN></i_CODTRN>' +
                '<i_DIREIP></i_DIREIP>' +
                '<i_MSGIDE></i_MSGIDE>' +
                '<i_TIPACC>' + 2 + '</i_TIPACC>' +
                '<i_TRNCOM></i_TRNCOM>' +
                '<i_TRNCRE></i_TRNCRE>' +
                '<i_TRNDEB></i_TRNDEB>' +
                '<i_USRING></i_USRING>' +
                '</arg0>' +
                '</par:bnkws156>' +
                '</soap:Body>' +
                '</soap:Envelope>';

            const headers = new Headers({ 'Content-Type': 'text/xml' });

            const requestOptions = {
                method: 'POST',
                headers: headers,
                body: xmlBody,
            };

            try {
                const response = await fetch(url, requestOptions);
                const xml = await response.text();
                setSoapResponse(xml);
            } catch (error) {
                console.error('Error al realizar la solicitud SOAP:', error);
            }
        };
        const parser = new DOMParser();
        const xmlSoap = parser.parseFromString(soapResponse, "text/xml");

        const convert = require('xml-js');
        const jsondata= convert.xml2json(xmlSoap., {compact: true, spaces: 4});
        setxmlDoc(xmldata)
        console.log("Lo que devuelve el servicio Soap transformado");
        console.log(jsondata);

        // Ejecutar la función fetchData
        fetchData();
    },[]);

    return (
        <div>
    
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
      
    
        </div>
    );
};




