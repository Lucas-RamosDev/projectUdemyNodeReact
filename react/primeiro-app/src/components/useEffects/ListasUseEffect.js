import { useState, useEffect } from 'react'

function ListasUseEffect() {

  const [input, setInput] = useState('')

  const [tarefas, setTarefas] = useState([
    'Pagar a conta de Luz',
    'Estudar JavaScript'
  ])

  // PEGA AS INFOS DO LOCAL STORAGE
  useEffect(() => {

    const tarefasStorage = localStorage.getItem('@tarefa')

    if(tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage))
    }

  }, [])

  // SALVA NO LOCAL STORAGE
  useEffect(()=>{

    localStorage.setItem('@tarefa', JSON.stringify(tarefas))

  }, [tarefas])

  function handleRegister(e){
    e.preventDefault()

    setTarefas([...tarefas, input])
    setInput('')

  }

  return(

    <div>

      <h1>Cadastrando uma Tarefa com UseEffect</h1>

      <form onSubmit={handleRegister}>
        <label>Nome da Tarefa:</label><br/>
        <input 
          placeholder='digite uma tarefa'
          value={input}
          onChange={(e) => setInput(e.target.value) }
        /><br/><br/>

        <button type='submit'>Registrar</button>

      </form>

      <br/><br/>

      <ul>
        {tarefas.map( tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}

      </ul>

    </div>

  )
}

export default ListasUseEffect