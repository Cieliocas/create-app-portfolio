import Titulo from "../../components/Titulo/index.tsx"
import Paragrafo from "../../components/Paragrafo/index.tsx"
import { GithubSection } from "./styles.ts"
import React from 'react'


const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">Olá, meu nome é Cielio, sou estudante de Ciência da Computação e estou aprendendo a programar.</Paragrafo>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=cieliocas&show_icons=true&theme=dark#gh-dark-mode-only&include_all_commits=true&count_private=true" alt="status github"/>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=cieliocas&layout=compact&langs_count=7&&theme=dark#gh-dark-mode-only" alt="status github"/>
    </GithubSection>
  </section>
)

export default Sobre
