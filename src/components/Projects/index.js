import './index.css'
// import WhereInTheWorldMobile from '../../assets/images/where-in-the-world-mobile.gif'

const projectsArray = [
  {
    name: 'Where in the world?',
    // mobileImg: WhereInTheWorldMobile,
    url: 'https://bsbou.github.io/where-in-the-world-/',
  },
]
const Projects = () => {
  return (
    <section id="projects">
      <h1 className="text-5xl p-4 h-screen">Projects</h1>
      <div>
        <h1>{projectsArray[0].name}</h1>
        <img src={projectsArray[0].mobileImg} alt="project demo"></img>
      </div>
    </section>
  )
}

export default Projects
