// Define la función para hacer la solicitud SOAP
export const fetchDataFromSoapService = async () => {
    const url = "https://servicios.taylor-johnson.co:10105/web/services/parametrizarUrsCanTrnService/parametrizarUrsCanTrn";
  
    const soapEnvelope = '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:par="http://parametrizarurscantrn.wsbeans.iseries/">' +
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
  // Crear la solicitud XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-Type', 'text/xml');
  // Manejar la respuesta
  xhr.onreadystatechange = function () {
     if (xhr.readyState === 4 && xhr.status === 200) {
         // La respuesta está en xhr.responseText
         console.log((xhr.responseText));
         // Mostrar la respuesta en la tabla
         //updateTable(xhr.responseText);
     }
  };
  
  // Enviar la solicitud SOAP
  xhr.send(soapEnvelope);
  return xhr.responseText;
  }
  
  
  
  