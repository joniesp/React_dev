import React, { Component } from 'react'
import axios from 'axios'

const CategoriasCtx = React.createContext()
export const CategoriasConsumer = CategoriasCtx.Consumer

class CategoriasProvider extends Component {

    state = {
        categorias : []
    }

    token = 'GZBWBDTBUETJ6EXDUQ27'

    obtenerCategorias = async () => {
        let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`

        let categorias = await axios.get(url)

        this.setState({
            categorias : categorias.data.categories
        })
    }


    componentDidMount(){
        this.obtenerCategorias()
    }


    render(){
        return(
            <CategoriasCtx.Provider 
                value = {{
                    categorias : this.state.categorias
                }}
            >
                {this.props.children}
            </CategoriasCtx.Provider>
        )
    }
}

export default CategoriasProvider