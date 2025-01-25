import Avatar from "../../components/Avatar/index.tsx"
import Titulo from "../../components/Titulo/index.tsx"
import Paragrafo from "../../components/Paragrafo/index.tsx"
import React from "react"


const Sidebar = () => (
  <aside>
    <Avatar />
    <Titulo fontSize={20}>Franciélio Castro</Titulo>
    <Paragrafo tipo="secundario" fontSize={16}>cieliocas</Paragrafo>
  </aside>
)

export default Sidebar
