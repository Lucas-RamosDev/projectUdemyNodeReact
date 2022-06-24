import React, { useEffect, useState } from 'react'

import './style.css'

// --- ### LINK API PRONTA PARA USA NO PROJETO ### ---
//https://sujeitoprogramador.com/rn-api/?api=posts

function App() {

  const [nutri, setNutri] = useState ([])

  /* 
  1 - Quando entramos na aplicação é esecutado o useEffect que 
      por sua vez executa a função loadApi()
      responsável por carregar o conteudo da minha API.
   */
  useEffect(() => {

    function loadApi() {

      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
      
      fetch(url) // faz a requisição (busca) os resultados na URL fornecida
      .then((r) => r.json()) // tranforma os resultados em JSON
      .then((json) => {  // dando tudo certo, temos todo o Array da API transformado em JSON
        console.log(json)
        setNutri(json) // jogamos todos os resultados dentro do "useState" - setNutri
      })

    }

    loadApi()

  }, [])

  return (

    <div className='container'>
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item) => {

        return (

          <article key={item.id} className="post">

            <strong className='titulo'>{item.titulo}</strong>

            <img src={item.capa} alt={item.titulo} className="capa" />

            <p className='subtitulo'>
              {item.subtitulo}
            </p>

            <a className='botao'>Acessar</a>

          </article>
        )
        
      })}
      


    </div>

  );
}

export default App;
