import React from 'react'
import EstiloGlobal from './styles.ts'
import Sidebar from './containers/Sidebar/index.tsx'
import Sobre from './containers/Sobre/index.tsx'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Sidebar />
      <main>
        <Sobre />
        <section>
          Projetos
        </section>
      </main>
    </>
  )
}

export default App
