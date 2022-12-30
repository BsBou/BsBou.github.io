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
    </div>
  )
}

export default Layout
