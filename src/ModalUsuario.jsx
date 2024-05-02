import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const ModalUsuario =(props)=> {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     <Button variant="info" onClick={handleShow}>
        Modal dato
      </Button> 

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registrar sus Datos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='form-control mb-3'>
            <div className='row'>
            <span>Name</span>
          <input type="text" placeholder='Digite su Nombre' />
          <span>UserName</span>
          <input type="text"placeholder='Digite su usuario' />
          <span>Email</span>
          <input type="email" required="email" placeholder='Digite su Correo' />
          <span>City</span>
          <input type="text" placeholder='Digite su Ciudad' />
          <span>Street</span>
          <input type="text" placeholder='Digite su Direccion' />
          <span>Suite</span>
          <input type="text" placeholder='Digite su Apartamento' />
          </div>      
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

