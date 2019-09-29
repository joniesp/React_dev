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


    componentDidMount() {
      const citas = localStorage.getItem('citas');

      if (citas) {
        this.setState({
          citas: JSON.parse(citas)
        });
      }
    }

    componentDidUpdate(){
      localStorage.setItem('citas', JSON.stringify(this.state.citas));
    }

    crearNuevaCita = (datos) => {
      const citas = [...this.state.citas, datos];
      
      this.setState({
        citas
      });
    }

    eliminarCita = (id) => {
      // guardamos copia siempre del state
      const citasActuales = [...this.state.citas];
      
      const citas = citasActuales.filter(cita => cita.id !== id);

      this.setState({
        citas
      });

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
                  eliminarCita = {this.eliminarCita}
                />
              </div>
            </div>
          </div>
        );
    }
}


export default App;