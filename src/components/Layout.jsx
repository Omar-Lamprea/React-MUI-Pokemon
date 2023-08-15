import { Container } from "@mui/material"
import { useContextTheme } from "../context/ThemeContext"
import Header from "./Header/Header"
import Hero from "./Header/Hero/Hero"

const Layout = () => {
  const {state} = useContextTheme()
  const color = state === 'dark' ? 'darkTheme' : 'lightTheme'
  return (
    <>
      <Header color={color}/>
      <main className={'theme-'+state}>
        <Container maxWidth="xl" sx={{py:2}}>
          <Hero color={color}/>
        </Container>
      </main>
      <footer className={'theme-'+state}>
        footer
      </footer>
    </>
  )
}

export default Layout