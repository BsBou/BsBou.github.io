import './index.css'
import React from 'react'
import ProjectCard from '../ProjectCard'
import { nanoid } from 'nanoid'

import TraceGif from '../../assets/images/trace.gif'
import TraceMobileGif from '../../assets/images/TraceMobile.gif'
import WhippetGood from '../../assets/images/whippet-good-screen.png'
import WhereInTheWorld from '../../assets/images/WITW.png'
import WhereInTheWorldMobile from '../../assets/images/WITW-mobile.gif'
import findDesktop from '../../assets/images/findDesktop.png'
import findMobile from '../../assets/images/findMobile.gif'

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="text-5xl p-4 font-medium">Projects</h1>
      {/* Ensure desktop images are at 16:9 ratio */}
      <ProjectCard
        id={nanoid()}
        name="Trace"
        desktopImg={TraceGif}
        mobileImg={TraceMobileGif}
        videoDemo={
          'https://www.youtube.com/watch?v=X2IFL4Ev69c&list=PLkbmdtbypn7TaaSLn0twxAxZ1FIiu6PIS&index=4'
        }
        github="https://github.com/BsBou/trace"
        desc="Merging the digital and real-world experience through scavenger hunt games. Trace allows users to create custom challenges, plotted on a map. Players then race against the clock in teams, adding points to a leaderboard.
        Developed two users flows (desktop for admins and mobile for players) with two team members using Ruby on Rails, Stimulus, HTML, CSS, JS, Mapbox API and OpenWeather API"
      />

      <ProjectCard
        id={nanoid()}
        name="Where in the World?"
        desktopImg={WhereInTheWorld}
        mobileImg={WhereInTheWorldMobile}
        url="https://bsbou.github.io/where-in-the-world-/"
        github="https://github.com/BsBou/where-in-the-world-"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing el  it, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <ProjectCard
        id={nanoid()}
        name="Find (Hack for Peace Hackathon)"
        desktopImg={findDesktop}
        mobileImg={findMobile}
        github="https://github.com/BsBou/hack-for-peace"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing el  it, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <ProjectCard
        id={nanoid()}
        name="Whippet Good"
        desktopImg={WhippetGood}
        github="https://github.com/BsBou/whippet-good"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing el  it, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
    </section>
  )
}

export default Projects
