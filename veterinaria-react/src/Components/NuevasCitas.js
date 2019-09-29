import React, {Component} from 'react'
import uuid from 'uuid'
import PropTypes from 'prop-types'

const stateInicial = {
    cita: {
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    },
    error: false
}

class NuevaCita extends Component {
    state = { ...stateInicial };

    handleChange = (value) => {
        this.setState({
            cita:{
                ...this.state.cita,
                [value.target.name] : value.target.value
            }
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const {mascota, propietario, fecha, hora, sintomas} = this.state.cita

        if(mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === ''){
            this.setState({
                error: true
            })
            return;
        }

        const cita = {...this.state.cita}
        cita.id = uuid();
        this.props.crearNuevaCita(cita);

        this.setState({
            ...stateInicial
        });
    }

    render(){

        const {error} = this.state;

        return(
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Rellena el formulario para crear una nueva cita
                    </h2>
                    <form 
                        onSubmit={this.handleSubmit}
                    >
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Nombre mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="nombre mascota" 
                                    name="mascota"
                                    onChange={this.handleChange}
                                    value={this.state.cita.mascota}
                                    />
                            </div> 
                        </div>{/* form group*/ }

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Nombre dueño</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="nombre dueño mascota" 
                                    name="propietario"
                                    onChange={this.handleChange}
                                    value={this.state.cita.propietario}  />
                            </div> 
                        </div>{/* form group*/ }

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Fecha</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="date" 
                                    className="form-control" 
                                    name="fecha"
                                    onChange={this.handleChange}
                                    value={this.state.cita.fecha}  />
                            </div> 

                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="time" 
                                    className="form-control" 
                                    name="hora"
                                    onChange={this.handleChange}
                                    value={this.state.cita.hora}  />
                            </div> 
                        </div>{/* form group*/ }

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Sintomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea type="text" className="form-control" placeholder="Describe los sintomas" name="sintomas" onChange={this.handleChange} value={this.state.cita.sintomas}></textarea>
                            </div> 
                        </div>{/* form group*/ }

                        { error ? <div className="alert alert-danger mt-2 text-center">
                            Todos los campos son obligatorios </div> : null }


                        <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar nueva cita" />
                    </form>
                </div>

            </div>
        )
    }
}

NuevaCita.propTypes = {
    crearNuevaCita: PropTypes.func.isRequired
}

export default NuevaCita;