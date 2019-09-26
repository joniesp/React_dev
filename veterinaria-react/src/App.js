import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css'
import Header from './Components/Header'
import NuevaCita from './Components/NuevasCitas'
import ListaCitas from './Components/ListaCitas'

class App extends Component {
    state = {
      citas: []
    }

    crearNuevaCita = (datos) => {
      const citas = [...this.state.citas, datos];
      
      this.setState({
        citas
      })
    }

    render() {
        return (
          <div className="container">
            <Header
              titulo="Administrador pacientes veterinaria"
            />

            <div className="row">
              <div className="col-md-12 mx-auto">
                <NuevaCita
                  crearNuevaCita={this.crearNuevaCita}
                />
              </div>
              <div className="mt-5 col-md-12 mx-auto">
                <ListaCitas
                  citas = {this.state.citas}
                />
              </div>
            </div>
          </div>
        );
    }
}


export default App;