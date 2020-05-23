import React from "react";
import { Form } from "react-bootstrap";

const Formulario = () => {
  return (
    <Form className="">
      <fieldset>
        <legend className="text-center mb-3">
          Buscar Bebidas por Categorias
        </legend>
      </fieldset>
      <div className="row">
        <Form.Group className="col-4">
          <input
            className="form-control"
            type="text"
            placeholder="Buscar Ingredientes"
            name="nombre"
          />
        </Form.Group>
        <Form.Group className="col-4">
          <select name="categoria" id="" className="form-control">
            <option value="">Selecciona una Categoria</option>
          </select>
        </Form.Group>
        <Form.Group className="col-4">
          <button className="btn btn-primary btn-block">Buscar Bebidas</button>
        </Form.Group>
      </div>
    </Form>
  );
};

export default Formulario;
