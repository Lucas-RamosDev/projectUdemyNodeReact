const express = require('express')

const server = express()

server.use(express.json())


/* --- ### QUERYPARAMS ### --- */
/*
// Digite na url do navegador
// exemplo URL: "localhost:3003/curso?nomeInformadoUrl=JavaScript"
server.get('/curso', (req, res)=>{
  const nome = req.query.nomeInformadoUrl;
  return res.json({curso: `Aprendendo ${nome}`})
 })
*/

/* --- ### ROUTE PARAMS ### --- */
// Digite na url do navegador
// exemplo URL: "localhost:3003/curso/1"
/*
server.get('/curso/:id', (req, res)=>{
  const id = req.params.id;
  return res.json({curso: `Curso: ${id}`})
 })
 */

 //CRUD = Create, Read, Update, Delete

 const cursos = ['nodeJS', 'JavaScript', 'React Native']

 // --- LISTANDO CURSOS
 server.get('/cursos', (req, res) => {

  return res.json(cursos)
 })

 // --- LISTANDO UM CURSO
 server.get('/cursos/:index', (req, res) => {
  const { index } = req.params;

  return res.json(cursos[index])
 })

 // --- CRIANDO CURSO
 server.post('/cursos', (req,res) => {
  const { name } = req.body;
  cursos.push(name)

  return res.json(cursos)
 })

 // --- ATUALIZANDO UM CURSO
 server.put('/cursos/:index', (req,res) => {
  const { index } = req.params;
  const { name } = req.body;

  cursos[index] = name;

  return res.json(cursos)
 }) 

  // --- DELETANDO UM CURSO
  server.delete('/cursos/:index', (req,res) => {
    const { index } = req.params;

    cursos.splice(index, 1)
    return res.json({message:"Curso deletado com sucesso"})
   }) 

server.listen(3003)