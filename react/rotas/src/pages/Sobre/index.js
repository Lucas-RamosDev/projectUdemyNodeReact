import { Link } from 'react-router-dom'

function Sobre() {
  return (
    <div className="App">
      <h1>Bem vindo a pagina Sobre</h1><br />

      <Link to="/">ir para Home</Link> <br /><br />
      <Link to="/contato">ir para Contato</Link>
    </div>
  );
}

export default Sobre;
