import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import api from '../../services/api'

function Filme(){
  const { id } = useParams()

  useEffect(()=>{

    async function loadFilme() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: "1cdfb19ad404e1a089a54fa099676287",
          language: "pt-BR",
        }
      })
      .then((response)=>{
        console.log(response)
      })
      .catch(()=>{
        console.log("Filme Não encontrado")
      })
    }

    loadFilme()

  }, [])

  return(
    <div>
      <h1>ACESSANDO O FILME {id}</h1>
    </div>
  )
}

export default Filme