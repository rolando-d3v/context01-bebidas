import React, { useContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { ModalContext } from "../context/ModalContext";

const Receta = ({ ev }) => {
  const { strDrinkThumb, strDrink, idDrink } = ev;

  const [modalShow, setModalShow] = useState(false);

  const { informacion, setIdReceta, setReceta } = useContext(ModalContext);

  const mostrarIngredientes = (informacion) => {
    let ingredientes = [];
    for (let i = 1; i < 16; i++) {
      if (informacion[`strIngredient${i}`]) {
        ingredientes.push(
          <li key={informacion[`strIngredient${i}`]} >
            {informacion[`strIngredient${i}`]} : {informacion[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredientes;
  };

  //strIngredient11

  return (
    <div className="col-lg-4 col-sm-12  mb-3">
      <div className="card" style={{ width: "18rem" }}>
        <img src={strDrinkThumb} className="card-img-top" alt="img" />
        <div className="card-body">
          <h5 className="card-title text-center">{strDrink}</h5>
          <button
            className="btn btn-primary btn-block"
            onClick={() => {
              setIdReceta(idDrink);
              setModalShow(true);
            }}
          >
            Ver Receta
          </button>
          <ModalReceta
            mostrarIngredientes={mostrarIngredientes}
            informacion={informacion}
            show={modalShow}
            onHide={() => {
              setModalShow(false);
              setIdReceta(null);
              setReceta({});
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Receta;

// componente Modal
function ModalReceta(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.informacion.strDrink}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Instrucciones</h4>
        <p>{props.informacion.strInstructions}</p>

        <img
          src={props.informacion.strDrinkThumb}
          className="card-img-top"
          alt="img"
        />
        <h4 className="text-center mt-2">Mostrar Ingredientes y Cantidades </h4>
        <ul className="list-inline-item">
          {props.mostrarIngredientes(props.informacion)}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            props.onHide();
          }}
        >
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

