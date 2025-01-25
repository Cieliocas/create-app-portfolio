import styled from 'styled-components'


export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
`

export const LinkBotao = styled.a`
  color: ${(props) => props.theme.corDeFundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
  border: solid 0.6;
  border-color: ${(props) => props.theme.corPrincipal};
  border-radius: 12px;
  box-shadow: 0px 0px 2px ${(props) => props.theme.corPrincipal};

  &:hover {
    background-color:${(props) => props.theme.corDeFundo};
    color: ${(props) => props.theme.corPrincipal};
    transition: background-color 0.4s;
  }
`

// padding: 10px;
// border-radius: 12px;
// font-size: 12px;
// transition: background-color 0.3s;
// cursor: pointer;
// background-color: ${(props) => props.theme.corDeFundoBotao};
// color: ${(props) => props.theme.corDeFundo};

// box-shadow: 0px 0px 4px ${(props) => props.theme.corPrincipal};
// font-weight: bold;

// &:hover {
//   background-color:${(props) => props.theme.corDeFundo};
//   color: ${(props) => props.theme.corPrincipal};
//   transition: background-color 0.7s;
