import { useState } from 'react'

function Formulario() {

  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [email, setEmail] = useState('')

  const [user, setUser] = useState({})

  function handleRegister(e){
    e.preventDefault()

    setUser({
      nome: nome,
      idade: idade,
      email: email
    })

    alert('Usuário cadastrado com sucesso')
  }

  return(

    <div>

      <h1>Cadastrando Usuário</h1>

      <form onSubmit={handleRegister}>
        <label>Nome:</label><br/>
        <input 
          placeholder='digite seu nome'
          value={nome}
          onChange={(e) => setNome(e.target.value) }
        /><br/><br/>

        <label>email:</label><br/>
        <input 
          placeholder='digite seu email'
          value={email}
          onChange={(e) => setEmail(e.target.value) }
        /><br/><br/>

        <label>idade:</label><br/>
        <input 
          placeholder='digite sua idade'
          value={idade}
          onChange={(e) => setIdade(e.target.value) }
        /><br/><br/>

        <button type='submit'>Registrar</button>

      </form>

      <br/><br/>

      <div>
        <span>Bem vindo: {user.nome}</span><br/>
        <span>Idade: {user.idade}</span><br/>
        <span>Email: {user.email}</span>
      </div>

    </div>

  )
}

export default Formulario