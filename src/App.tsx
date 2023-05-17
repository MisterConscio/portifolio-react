import { ThemeProvider } from 'styled-components'
import { useState } from 'react'

import EstiloGlobal, { Container } from './styles'
import Sidebar from './containers/Sidebar'
import About from './containers/About'
import Projects from './containers/Projects'
import lightTheme from './themes/light'
import darkTheme from './themes/dark'

function App() {
  const [usingDarkTheme, setDarktheme] = useState(true)

  function changeTheme() {
    setDarktheme(!usingDarkTheme)
  }

  return (
    <ThemeProvider theme={usingDarkTheme ? darkTheme : lightTheme}>
      <EstiloGlobal />
      <Container>
        <Sidebar changeTheme={changeTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
