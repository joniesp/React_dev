import React from 'react'
import Header from './components/header'
import Formulario from './components/formulario'
import ListaEventos from './components/listaEventos'

import CategoriasProvider from './context/CategoríasContext'
import EventosProvider from './context/EventosContext'

function App() {
  return (
    <EventosProvider>
      <CategoriasProvider>
        <Header/>

        <div className="uk-container">
          <Formulario/>
          <ListaEventos/>
        </div>

      </CategoriasProvider>
    </EventosProvider>
  );
}

export default App;
