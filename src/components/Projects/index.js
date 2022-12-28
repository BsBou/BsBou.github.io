import './index.css'
import TraceGif from '../../assets/images/trace.gif'
import WhippetGood from '../../assets/images/whippet-good-screen.png'
const projectsArray = [
  // Ensure web project images are at 16:9 ratio
  {
    name: 'Trace',
    img: TraceGif,
    url: 'https://bsbou.github.io/where-in-the-world-/',
    github: 'https://github.com/BsBou/trace',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing el  it, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    name: 'Whippet Good',
    img: WhippetGood,
    url: 'https://bsbou.github.io/where-in-the-world-/',
    github: 'https://github.com/BsBou/whippet-good',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing el  it, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
]
const projectCards = projectsArray.map((project) => (
  <div className="flex flex-col items-center mb-16">
    <div>
      <img
        className="w-full md:w-3/5 relative hover:z-10"
        src={project.img}
        alt="project demo"
      ></img>
      <div className="w-4/5 p-4 border bg-gray-50 relative bottom-5 left-5 md:bottom-48 md:w-3/5 md:left-1/3">
        <h1 className="text-center text-xl">{project.name}</h1>
        <p>{project.desc}</p>
        <div className="flex justify-end">
          <span className="mx-4">
            <a href={project.url} target="_blank" rel="noreferrer">
              Live demo
            </a>
          </span>
          <span>
            <a href={project.github} target="_blank" rel="noreferrer">
              Github
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
))
const Projects = () => {
  return (
    <section id="projects">
      <h1 className="text-5xl p-4 ">Projects</h1>
      {projectCards}
    </section>
  )
}

export default Projects
