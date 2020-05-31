import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecetaContext = createContext();

const RecetaProvider = (props) => {
  const [receta, setReceta] = useState([]);
  const [busqueda, setBusquedaReceta] = useState({
    nombre: "",
    categoria: "",
  });

  const [consulta, setConsulta] = useState(false);

  //destructurin de los elementos de busqueda
  const { nombre, categoria } = busqueda;

  useEffect(() => {
    if (consulta) {
      const obtenerRecetas = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
        const res = await axios.get(url);
        setReceta(res.data.drinks)
        console.log(res.data.drinks);
        
      };

      obtenerRecetas();
    }
  }, [busqueda]);

  return (
    <RecetaContext.Provider
      value={{
        receta,
        setBusquedaReceta,
        setConsulta
      }}
    >
      {props.children}
    </RecetaContext.Provider>
  );
};

export default RecetaProvider;
