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
        <article>
            <section className="naviagation">
                <div>
                    <i className="fas fa-chevron-left"></i>
                    <i className="fas fa-chevron-right"></i>
                </div>
                    <i className="far fa-window-close"></i>
            </section>
        <main>
        <img src={"https://image.tmdb.org/t/p/w500" + this.props.pelicula.poster_path} alt="Imagen de la pelicula"/>
        <h3>{this.props.pelicula.title}</h3>
        <p className="description">{this.props.pelicula.overview}</p>
        <section className={this.state.link}>
            <p>{this.props.pelicula.popularity}</p>
            <p>{this.props.pelicula.release_date}</p>
            <p>{this.props.pelicula.vote_average}</p>
        </section>
        <p onClick={() => this.viewMore()}>{this.state.text}</p>
    </main>   
    </article>
)    
}

}

export default Card;