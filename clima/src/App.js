import React , {useState, useEffect} from 'react';
import Header from './Components/header'
import Formulario from './Components/formulario'
import Error from './Components/error'
import Clima from './Components/clima'

function App() {

  const [ciudad, guardarCiudad] = useState('')
  const [pais, gurdarPais] = useState('')
  const [error, guardarError] = useState(false)
  const [resultado, guardarResultado] = useState({})

  useEffect(() => {

    if (ciudad === '') return


    const consultarApi = async () => {
      const appId = '579f809d02e8ced0fdbb7ea9f3553e50'
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais},&appid=${appId}`

      console.log(url)
    
      const res = await fetch(url)
      const resultado = await res.json()
  
      guardarResultado(resultado)
    }

    consultarApi()

  }, [ciudad,pais])
  
  const datosConsulta = (datos) => {
    
    if (datos.ciudad === '' || datos.pais === ''){
      guardarError(true)
      return
    }

    guardarCiudad(datos.ciudad)
    gurdarPais(datos.pais)
    guardarError(false)
    
  }


  let componente

  if(error) {
    componente = <Error mensaje="Ambos campos son obligatorios"/>
  } else if (resultado.cod === '404'){
    componente = <Error mensaje="No existe"/>
  } else {
    componente = <Clima resultado={resultado}/>
  }

  return (
    <div className="App">
      <Header
        titulo='Clima React App'
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario 
                datosConsulta={datosConsulta}
              />
            </div>
            <div className="col s12 m6">
                {componente}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
