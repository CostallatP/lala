//import react from 'react';
import React from "react";
import Botao from "../Botao";

//create class formulario extends react.component
class Formulario extends React.Component {
  render() {
    return (
      //create form with 2 divs and 1 button
      <form>
        <div>
          <label htmlFor="tarefa">Adicione um novo estudo</label>

          <input
            type="text"
            id="tarefa"
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            name="tempo"
            step="1"
            id="time"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Botao />
      </form>
    );
  }
}

export  default Formulario;