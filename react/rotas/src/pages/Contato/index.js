
import { Link } from 'react-router-dom'

function Contato() {
  return (
    <div className="App">
      <h1>pagina Contato</h1> <br />
      <h1>Contato da empresa (xx) xxxx-xxxx</h1> <br />

      <Link to="/">ir para Home</Link> <br /><br />
      <Link to="/sobre">ir para Sobre</Link>
    </div>
  );
}

export default Contato;
