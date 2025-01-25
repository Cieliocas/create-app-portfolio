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
  background-color: ${(props) => props.theme.corDeFundoBotao};
  color: ${(props) => props.theme.corDeFundo};
  border: solid 1px;
  border-color: ${(props) => props.theme.corPrincipal};
  box-shadow: 0px 0px 4px ${(props) => props.theme.corPrincipal};
  font-weight: bold;

  &:hover {
    background-color:${(props) => props.theme.corDeFundo};
    color: ${(props) => props.theme.corPrincipal};
    transition: background-color 0.7s;
  }
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
