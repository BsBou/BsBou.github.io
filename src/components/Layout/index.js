import About from '../About'
import Banner from '../Banner'
import Contact from '../Contact'
import Projects from '../Projects'
import './index.css'
const Layout = () => {
  return (
    <div className="page">
      <Banner />
      <About />
      <Projects />
      <Contact />
      <p className="text-center mb-4">© Copyright 2023, Borhan Boulandier</p>
    </div>
  )
}

export default Layout
