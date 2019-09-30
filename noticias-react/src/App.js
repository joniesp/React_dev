import React, {Component, Fragment} from 'react';
import Header from './components/header'
import ListaNoticias from './components/listaNoticias';
import Formulario from './components/form'

class App extends Component {

  state = {
    noticias : []
  }

  componentDidMount = () => {
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=ef95dbbe3bd04d6cb212ded1eb2f83dd`;

    const res = await fetch(url);
    const noticias = await res.json();

    this.setState({
      noticias: noticias.articles
    });

  }


  render() {
    return (
      <Fragment>
        <Header 
          titulo="Noticias React API"
        />
        
        <div className="container white contenedor-noticias">
          <Formulario consultarNoticias={this.consultarNoticias} />
          <ListaNoticias noticias={this.state.noticias}/>
        </div>

      </Fragment>
    )
  }
}

export default App;
