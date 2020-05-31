import React, { useContext } from "react";
import Receta from "./Receta"
import { RecetaContext } from "../context/RecetaContext";

const ListaRecetas = () => {
  const { receta } = useContext(RecetaContext);
  
  return (
    <div className="row mt-5" >
   {receta.map((ev) => (
       <Receta
       key={ev.idDrink}
       ev={ev}
       />
   ))}
    </div>
  );
};

export default ListaRecetas;
