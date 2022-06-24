import axios from 'axios'


//base da URL: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=1cdfb19ad404e1a089a54fa099676287&language=pt-BR

const api = axios.create({

  baseURL:'https://api.themoviedb.org/3/'

})

export default api

