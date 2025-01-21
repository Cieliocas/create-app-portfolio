import React from 'react'
import styled from 'styled-components'

type BotaoProps = {
  princopal: boolean
}

const Botao = styled.button`
  background-color: ${props => (props.principal ? 'green' : 'blue')};
`

function Teste() {
  return <Botao principal>Clique aqui</Botao>
}

export default Teste
