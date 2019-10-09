import React, {useState} from 'react'


const Formulario = ({datosConsulta}) => {

    //busqueda sería nuestro state y guardar busqueda nuestro this.setState
    const [busqueda, guardarBusqueda] = useState({
        ciudad:'',
        pais: ''
    })

    const handleChange = (e) => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })

    }

    const consultarClima = (e) => {
        e.preventDefault()

        datosConsulta(busqueda)
    }

    return (
        <form onSubmit={consultarClima}>
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <select 
                    name="pais" 
                    id="pais" 
                    onChange={handleChange}
                >
                    <option value="">SELECCIONA UN VALOR</option>
                    <option value="US">ESTADOS UNIDOS</option>
                    <option value="MX">MEXICO</option>
                    <option value="AR">ARGENTINA</option>
                    <option value="CO">COLOMBIA</option>
                    <option value="CR">COSTA RICA</option>
                    <option value="ES">ESPAÑA</option>
                    <option value="PE">PERU</option>
                </select>
            </div>
            
            <div className="input-field col s12">
                <input 
                    type="submit" 
                    className="waves-effect waves-light btn-large btn-block yellow accent-4" 
                    value="buscar clima"
                />
            </div>
        </form>
    
    )
}

export default Formulario