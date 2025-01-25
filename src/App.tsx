import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import EstiloGlobal, { Container } from './styles.ts'
import Sidebar from './containers/Sidebar/index.tsx'
import Sobre from './containers/Sobre/index.tsx'
import Projetos from './containers/Projetos/index.tsx'
import temaLight from './themes/light.ts'
import temaDark from './themes/dark.ts'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocarTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocarTema={trocarTema}/>
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
