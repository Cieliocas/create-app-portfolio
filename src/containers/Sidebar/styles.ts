import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles.ts'


export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button`
  padding: 10px;
  border-radius: 12px;
  font-size: 12px;
  transition: background-color 0.3s;
  cursor: pointer;
  background-color: black;
  color: #fff;
  border-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-weight: bold;

  &:hover {
    background-color:rgb(255, 255, 255);
    color: black;
    transition: background-color 0.7s;
  }
`
