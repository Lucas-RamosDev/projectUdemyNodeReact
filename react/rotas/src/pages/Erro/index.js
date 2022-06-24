import { Link } from 'react-router-dom'

function Erro() {

  return(
    <div>
      <h1>Ops, a pagina que tentou acessar não esta disponível :/</h1>

      <Link to="/">Voltar</Link>
    </div>
    
  )

}

export default Erro