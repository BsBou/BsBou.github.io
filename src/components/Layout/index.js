import About from '../About'
import Banner from '../Banner'
import Projects from '../Projects'
import './index.css'
const Layout = () => {
  return (
    <div className="page">
      <Banner />
      <About />
      <Projects />
    </div>
  )
}

export default Layout
