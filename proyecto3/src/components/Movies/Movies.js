import React, {Component} from "react";
import Card from "../Card/Card";
import "../Movies/movies.css";
import Buscador from "../Search/Buscador"


class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pelis: [],
            next: "",
            filas: true,
            claseLista: "cards",
            claseTarjeta: "cardsItem"
        }
    }


componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=70db58e85426bd08c7fc4258ff49edc0&language=en-US&page=1")
    .then(response => response.json())
    .then((data) => this.setState({
        pelis: data.results,
        next: data.page + 1,
        pelisFiltradas: data.results,
    }
   
    ))
    .catch((error) => console.log(error));
}


borrar(id){
    let peliculasFiltradas = [];
    peliculasFiltradas = this.state.pelis.filter((unaPelicula) => unaPelicula.id !== id);

    this.setState({
        pelis: peliculasFiltradas
    })
}


filas(){
    this.setState ({
        filas: true,
    })
}


columnas(){
    this.setState ({
        filas: false,
    })
}


filtrarPelis (porTexto) {
    let peliculaBuscada = this.state.pelis.filter(unaPelicula => unaPelicula.title.toLowerCase().includes(porTexto.toLowerCase()))

    this.setState({
        pelis: peliculaBuscada,
    })
}

cambiarOrientacion () {
    if (this.state.claseLista==="cards") {
    this.setState({
        claseLista: "horizontal",
        claseTarjeta: "cardsHorizontal"
    })
    } else {
        this.setState({
            claseLista: "cards",
            claseTarjeta: "cardsItem"
        })
    }
}

render() {
    console.log(this.state.pelis);
    return(
        <React.Fragment>
        <Buscador filter = {(porTexto) => this.filtrarPelis(porTexto)}/>
        <button onClick={()=>this.cambiarOrientacion()}> cambiarOrientacion </button>
        <section>
            <ul className={`${this.state.claseLista}`}>            
            {this.state.pelis.length === 0 ?
            <p>Cargando...</p>:
            this.state.pelis.map((pelicula,idx) => <Card pelicula={pelicula} key={idx} borrarPelicula={ (id)=>this.borrar(id) } claseTarjeta={this.state.claseTarjeta}/>)
            }
            </ul>
        </section>
        </React.Fragment>
    )

}

}


export default Movies;