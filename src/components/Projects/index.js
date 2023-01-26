import './index.css'
import React, { useEffect, useRef, useState } from 'react'
import TraceGif from '../../assets/images/trace.gif'
import WhippetGood from '../../assets/images/whippet-good-screen.png'
import WhereInTheWorld from '../../assets/images/WITW.png'
import WhereInTheWorldMobile from '../../assets/images/WITW-mobile.gif'
import { AnimatePresence, motion } from 'framer-motion'

const Project = (props, handleClose) => {
  const handleClick = () => {
    setSelectedId(props.id)
  }

  const [selectedId, setSelectedId] = useState(null)

  selectedId
    ? (document.body.classList = 'body-modal')
    : (document.body.classList = '')

  return (
    <div className="flex flex-col items-center mb-16">
      <motion.img
        layoutId={props.id}
        onClick={handleClick}
        src={props.img}
        alt="props demo"
      ></motion.img>

      <AnimatePresence>
        {selectedId && (
          <>
            <motion.img
              style={{
                position: 'fixed',
                top: '38%',
                zIndex: 2,
                overflowY: 'hidden',
              }}
              layoutId={selectedId}
              src={props.img}
              alt="props demo"
            ></motion.img>
            <div
              class="modal-overlay"
              id="modal-overlay"
              onClick={() => setSelectedId(null)}
            ></div>
          </>
        )}
      </AnimatePresence>

      <div
        className={`w-4/5 p-4 border bg-gray-50 relative bottom-5 md:bottom-48 md:w-3/5 md:left-1/3 m-auto md:m-0 `}
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
  )
}
const Projects = () => {
  return (
    <section id="projects">
      <h1 className="text-5xl p-4 font-medium">Projects</h1>
      {/* Ensure web project images are at 16:9 ratio */}
      <Project
        id={1}
        name="Trace"
        img={TraceGif}
        url="https://bsbou.github.io/where-in-the-world-/"
        github="https://github.com/BsBou/trace"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing el  it, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <Project
        id={2}
        name="Whippet Good"
        img={WhippetGood}
        url="https://bsbou.github.io/where-in-the-world-/"
        github="https://github.com/BsBou/whippet-good"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing el  it, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <Project
        id={3}
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
