import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// crear el context
export const CategoriasContext = createContext();

// provider es donde se encuentran las funciones y los states
const CategoriasProvider = (props) => {
  const [categoria, setCategoria] = useState([]);

  // obtener api
  useEffect(() => {
    const categoriaApi = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
      const urlApi = await axios.get(url)
      setCategoria(urlApi.data.drinks) 
    };
    categoriaApi()
  }, []);

  return (
    <CategoriasContext.Provider value={{categoria}}>
      {props.children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;
