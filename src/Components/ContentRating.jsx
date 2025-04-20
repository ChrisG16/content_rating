
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        me_gusta: 0,
        no_me_gusta: 0,
        valoraciones_totales: 0,
        handleMeGusta:() => {
            this.setState((prevState) => ({
                me_gusta: prevState.me_gusta + 1,
                valoraciones_totales: prevState.valoraciones_totales + 1
            }));
        },
        handleNoMeGusta:() => {
            this.setState((prevState) => ({
                no_me_gusta: prevState.no_me_gusta + 1,
                valoraciones_totales: prevState.valoraciones_totales + 1
            }));
        }
    };
  }
  render() {
    return (
     <>
     <div className="puntaje-contenido">
        <p>
            Grand Theft Auto VI - Date Release: Soon (Maybe)
        </p>
        <div className="botones-puntaje">
            <button className="boton-me-gusta" onClick={this.state.handleMeGusta}>
                Me gusta ({this.state.me_gusta})
            </button>
            <button className="boton-no-me-gusta" onClick={this.state.handleNoMeGusta}>
                No me gusta ({this.state.no_me_gusta})
            </button>
            <p>
                Contador de Valoraciones: {this.state.valoraciones_totales}
            </p>
        </div>
     </div>
     </>
    );
  }
}

export default ContentRating;
