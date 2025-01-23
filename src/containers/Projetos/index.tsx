import React from "react"
import Titulo from "../../components/Titulo/index.tsx"
import Projeto from "../../components/Projeto/index.tsx"

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
    <ul>
      <li>
        <Projeto />
      </li>
    </ul>
  </section>
)

export default Projetos
