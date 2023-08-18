import { Container } from "@mui/material"
import { useContextTheme } from "../context/ThemeContext"
import Header from "./Header/Header"

import Footer from "./Footer/Footer"
import Hero from "./Hero/Hero"
import PokemonLiks from "./PokemonList/PokemonLiks"

const Layout = () => {
  const {state} = useContextTheme()
  const color = state === 'dark' ? 'darkTheme' : 'lightTheme'
  return (
    <>
      <Header color={color}/>
      <main className={'theme-'+state}>
        <div>
          <Hero color={color}/>
          <PokemonLiks color={color}/>
        </div>
      </main>
      <Footer color={color}/>
    </>
  )
}

export default Layout