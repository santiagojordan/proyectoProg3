import React, {Component} from "react";
import Card from "../Card/Card";
import Header from "../Header/Header";
import Movies from "../Movies/movies.css";

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pelis: [],
            next: "",
            ordenPelis: "columnaPelis",
            resultadoPelis: [],
        }
    }


componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=70db58e85426bd08c7fc4258ff49edc0&language=en-US&page=1") //Por que aca no va una coma?
    .then(response => response.json())
    .then((data) => this.setState({
        pelis: data.results,
        next: data.page + 1,
        resultadoPelis: data.results,
    }
    ))

    .catch((error) => console.log(error));
    
}

}






export default Movies;