import React from "react";

class Botao extends React.Component {
  render() {
    const estaAtivo = false;
    const styles = {
      backgroundColor: estaAtivo ? "blue" : "red",
      color: "white",
    };
    return <button style={styles}>Botao</button>;
  }
}
export default Botao;
