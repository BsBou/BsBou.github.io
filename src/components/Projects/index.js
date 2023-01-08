import './index.css'
import React, { useEffect, useState } from 'react'
import TraceGif from '../../assets/images/trace.gif'
import WhippetGood from '../../assets/images/whippet-good-screen.png'
import WhereInTheWorld from '../../assets/images/WITW.png'
import WhereInTheWorldMobile from '../../assets/images/WITW-mobile.gif'

const Project = (props) => {
  const [focusState, setFocusState] = useState(false)
  return (
    <div className="flex flex-col items-center mb-16">
      <div>
        <img
          onClick={() => setFocusState(!focusState)}
          className={`w-full md:w-3/5 relative ${
            focusState ? 'focused' : 'non-focused'
          }`}
          src={props.img}
          alt="props demo"
        ></img>
        <div
          onClick={() => setFocusState(!focusState)}
          className={`w-4/5 p-4 border bg-gray-50 relative bottom-5 md:bottom-48 md:w-3/5 md:left-1/3 m-auto md:m-0 ${
            focusState ? 'non-focused' : 'focused'
          }`}
        >
          <h1 className="text-center text-xl">{props.name}</h1>
          <p>{props.desc}</p>
          <div className="flex justify-end">
            <span className="mx-4">
              <a href={props.url} target="_blank" rel="noreferrer">
                Live demo
              </a>
            </span>
            <span>
              <a href={props.github} target="_blank" rel="noreferrer">
                Github
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
const Projects = () => {
  return (
    <section id="projects">
      <h1 className="text-5xl p-4 font-medium">Projects</h1>
      {/* Ensure web project images are at 16:9 ratio */}
      <Project
        name="Trace"
        img={TraceGif}
        url="https://bsbou.github.io/where-in-the-world-/"
        github="https://github.com/BsBou/trace"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing el  it, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <Project
        name="Whippet Good"
        img={WhippetGood}
        url="https://bsbou.github.io/where-in-the-world-/"
        github="https://github.com/BsBou/whippet-good"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing el  it, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <Project
        name="Where in the World?"
        img={WhereInTheWorld}
        url="https://bsbou.github.io/where-in-the-world-/"
        github="https://github.com/BsBou/where-in-the-world-"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing el  it, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
    </section>
  )
}

export default Projects
