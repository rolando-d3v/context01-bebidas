import React, { useState, useContext } from "react";
import { CategoriasContext } from "../context/CategoriaContext";
import { Form } from "react-bootstrap";

const Formulario = () => {
  const { categoria } = useContext(CategoriasContext);

  const [busqueda, setBusqueda] = useState({
    nombre: "",
    categoria: "",
  });

  const obtenerDatos = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name] : e.target.value
      
    });
    console.log(e.target.value );
  };
 

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
            onChange={obtenerDatos}
          />
        </Form.Group>
        <Form.Group className="col-4">
          <select
            name="categoria"
            className="form-control"
            onChange={obtenerDatos}
          >
            <option value="">Selecciona una Categoria</option>
            {categoria.map((ev, index) => (
              <option value={ev.strCategory} key={index}>
                {ev.strCategory}
              </option>
            ))}
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
