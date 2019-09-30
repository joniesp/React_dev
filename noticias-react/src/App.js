import React, {Component} from 'react';

class App extends Component {

  state = {
    noticias : []
  }

  componentDidMount = () => {
    this.consultarNoticias();
  }

  consultarNoticias = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ef95dbbe3bd04d6cb212ded1eb2f83dd`;

    const res = await fetch(url);
    const noticias = await res.json();

    this.setState({
      noticias: noticias.articles
    });

  }


  render() {
    return (
      <h1>Algo para escribir</h1>
    )
  }
}

export default App;
