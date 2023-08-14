import { useContextTheme } from "../context/ThemeContext"
import Header from "./Header/Header"

const Layout = () => {
  const {state} = useContextTheme()
  const color = state === 'dark' ? 'darkTheme' : 'lightTheme'
  return (
    <>
      <Header color={color}/>
      <main className={'theme-'+state}>
        main
      </main>
      <footer className={'theme-'+state}>
        footer
      </footer>
    </>
  )
}

export default Layout