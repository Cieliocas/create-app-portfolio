import React from 'react'
import styled from 'styled-components'

type BotaoProps = {
  princopal: boolean;
  fontSize?: string;
}

const Botao = styled.button`
  background-color: ${props => (props.principal ? 'green' : 'blue')};
  font-size: ${props => props.fontSize || '16px'};
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: white;
`

function Teste() {
  return (
    <>
      <Botao fontSize="18px" principal>Enviar</Botao>
      <Botao fontSize="14px" principal={false}>
        Cancelar
      </Botao>
      <BotaoPerigo as="a" principal={false}>
        Não clique aqui
      </BotaoPerigo>
    </>
  )
}

export default Teste
