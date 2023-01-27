import './index.css'
import React from 'react'
import TraceGif from '../../assets/images/trace.gif'
import WhippetGood from '../../assets/images/whippet-good-screen.png'
import WhereInTheWorld from '../../assets/images/WITW.png'
import WhereInTheWorldMobile from '../../assets/images/WITW-mobile.gif'
import ProjectCard from '../ProjectCard'

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="text-5xl p-4 font-medium">Projects</h1>
      {/* Ensure web project images are at 16:9 ratio */}
      <ProjectCard
        id={1}
        name="Trace"
        desktopImg={TraceGif}
        url="https://bsbou.github.io/where-in-the-world-/"
        github="https://github.com/BsBou/trace"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing el  it, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <ProjectCard
        id={2}
        name="Whippet Good"
        desktopImg={WhippetGood}
        url="https://bsbou.github.io/where-in-the-world-/"
        github="https://github.com/BsBou/whippet-good"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing el  it, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <ProjectCard
        id={3}
        name="Where in the World?"
        desktopImg={WhereInTheWorld}
        mobileImg={WhereInTheWorldMobile}
        url="https://bsbou.github.io/where-in-the-world-/"
        github="https://github.com/BsBou/where-in-the-world-"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing el  it, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
    </section>
  )
}

export default Projects
