import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles.ts'


export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  font-size: 16px;
  transition: background-color 0.3s;
  cursor: pointer;
  background-color: black;
  color: #fff;
  border-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color:rgb(255, 255, 255);
    color: black;
    transition: background-color 0.7s;
  }
`
