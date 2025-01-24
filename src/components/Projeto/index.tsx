import React from 'react'
import { Card, LinkBotao } from '../Projeto/styles.ts'
import Paragrafo from '../Paragrafo/index.tsx'
import Titulo from '../Titulo/index.tsx'



const Projeto = () => (
  <Card>
    <Titulo>Meu Projeto</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feita com VueJS</Paragrafo>
    <LinkBotao href="">Visualizar</LinkBotao>
  </Card>
)

export default Projeto
