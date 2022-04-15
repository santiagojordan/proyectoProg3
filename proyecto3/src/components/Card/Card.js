import React, {Component} from "react";
import "../Card/card.css"

class Card extends Component{
constructor(props){
    super(props)
    this.state={ 
        link: " ",
        text: "Ver más",
        viewMore: false,
    };

}

    /* viewMore() {
        if (this.state.viewMore) {
            this.setState({
                viewMore: false,
                text: "Ver más",
            });
        } else {
            this.setState({
                viewMore: true,
                text: "Ver menos",
            });
        }
    }*/ //VER CON TOTO

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
        <img src="./img/image-default.png" alt="Imagen de la pelicula"/>
        <h3>Título/ Nombre</h3>
        <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta perspiciatis! Sint, laboriosam cum.</p>
        <section class="aditional-info">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
        </section>
        <a href="">Ver más</a>
    </main>   
    </article>
)    
}

}

export default Card;