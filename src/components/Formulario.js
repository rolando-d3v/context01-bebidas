import React from 'react'
import { Form } from "react-bootstrap"

const Formulario = () => {
    return (
        <Form className="col-12" >
            <fieldset>
                <legend>
                    Buscar Bebidas por Categorias
                </legend>
            </fieldset>
            <Form.Group controlId="formBasicEmail">
                <label className="" >Email address</label>
                <input  className="form-control" type="email" placeholder="Enter email" />
            </Form.Group>
        </Form>
    )
}

export default Formulario
