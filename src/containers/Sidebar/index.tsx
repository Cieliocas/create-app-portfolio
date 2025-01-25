import React from "react"
import Avatar from "../../components/Avatar/index.tsx"
import Titulo from "../../components/Titulo/index.tsx"
import Paragrafo from "../../components/Paragrafo/index.tsx"

import { Descricao, BotaoTema, SidebarContainer } from "./styles.ts"

type Props = {
  trocarTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Franciélio Castro</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>cieliocas</Paragrafo>
      <Descricao tipo="principal" fontSize={12}>Fullstack Developer</Descricao>
      <BotaoTema onClick={props.trocarTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
