import React from 'react';
// import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Formulario from "./components/Formulario"

import CategoriasProvider from "./context/CategoriaContext"

import './App.css';

function App() {
  return (
    <CategoriasProvider>
     <Navigation/>
     <div className="container mt-5 ">
       <div className="row">
        <div className="col-12">
        <Formulario/>
        </div>
       </div>
     </div>

    </CategoriasProvider>
  );
}

export default App;
