import React from "react";
// import Header from "./components/Header"
import Navigation from "./components/Navigation";
import Formulario from "./components/Formulario";
import ListaRecetas from "./components/ListaRecetas";

import CategoriasProvider from "./context/CategoriaContext";
import RecetaProvider from "./context/RecetaContext";
import ModalProvider from "./context/ModalContext";

import "./App.css";

function App() {
  return (
    <CategoriasProvider>
      <RecetaProvider>
        <ModalProvider>
          <Navigation />
          <div className="container mt-5 ">
            <div className="row">
              <div className="col-12">
                <Formulario />
              </div>
              <div className="col-12 ">
                <ListaRecetas />
              </div>
            </div>
          </div>
        </ModalProvider>
      </RecetaProvider>
    </CategoriasProvider>
  );
}

export default App;
