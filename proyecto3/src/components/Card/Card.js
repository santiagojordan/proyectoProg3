import React, {Component} from "react";
import "./card.css";

class Card extends Component{
constructor(props){
    super(props)
    this.state={ 
        link: "additional-info",
        text: "Ver más",
        viewMore: false,
    };

}

    viewMore() {
        if (this.state.viewMore) {
            this.setState({
                viewMore: false,
                text: "Ver más",
                link: "additional-info",
            });
        } else {
            this.setState({
                viewMore: true,
                text: "Ver menos",
                link: "additional-info-show",
            });
        }
    }

render(){
    return(
        <li className="cardsItem">
            <div className="card">
        <main>

        <img className="image" src={"https://image.tmdb.org/t/p/w500" + this.props.pelicula.poster_path} alt="Imagen de la pelicula"/>

        <div className="cardContent">
        <h3>{this.props.pelicula.title}</h3>
        <p className="description">{this.props.pelicula.overview}</p>
        <section className={this.state.link}>
            <p>Popularity: {this.props.pelicula.popularity}</p>
            <p>Release date: {this.props.pelicula.release_date}</p>
            <p>Vote average: {this.props.pelicula.vote_average}</p>
        </section>
        <p onClick={() => this.viewMore()}>{this.state.text}</p>
        </div>
    </main>   
    </div>
    </li>
    
)    
}

}

export default Card;