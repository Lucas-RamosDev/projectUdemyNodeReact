import { useParams } from 'react-router-dom'

function Produto() {

  const { id } = useParams()

  return(
    <div>
      <h1>Página de detalhe do produto:</h1>
      <span>
        Meu Produto é: {id}  
      </span>
    </div>
    
  )

}

export default Produto