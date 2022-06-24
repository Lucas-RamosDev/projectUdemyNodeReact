
import { Link } from 'react-router-dom'

function Home() {


  const idProduto = 123

  return (
    <div className="App">
      <h1>Bem vindo a pagina Home</h1> <br />

      <Link to="/sobre">ir para Sobre</Link> <br /><br />
      <Link to="/contato">ir para Contato</Link><br /><br />

      <hr /><br /><br />


      <Link to="/produto/123">Acessar produto {idProduto}</Link>

    </div>
  );
}

export default Home;
