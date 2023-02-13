import './index.css'
import React from 'react'
import ProjectCard from '../ProjectCard'
import { nanoid } from 'nanoid'

import TraceGif from '../../assets/images/trace.gif'
import TraceMobileGif from '../../assets/images/TraceMobile.gif'
import WhippetGood from '../../assets/images/whippet-good-screen.png'
import WhippetGoodGif from '../../assets/images/whippetGoodGif.gif'
import WhereInTheWorld from '../../assets/images/WITW.png'
import WhereInTheWorldMobile from '../../assets/images/WITW-mobile.gif'
import findDesktop from '../../assets/images/findDesktop.png'
import findMobile from '../../assets/images/findMobile.gif'

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="text-5xl p-4 font-medium">Projects</h1>
      {/* Ensure desktop images are at 16:9 ratio */}
      {/* <ProjectCard
        id={nanoid()}
        name="Trace"
        images={[
          { img: TraceGif, mobile: false },
          { img: TraceMobileGif, mobile: true },
        ]}
        videoDemo={
          'https://www.youtube.com/watch?v=X2IFL4Ev69c&list=PLkbmdtbypn7TaaSLn0twxAxZ1FIiu6PIS&index=4'
        }
        github="https://github.com/BsBou/trace"
        stack={['Ruby on Rails', 'API', 'Stimulus']}
        desc={`<strong>Merging the digital and real-world experience through scavenger hunt games.</strong> \n Trace allows users to create custom challenges, plotted on a map. \nPlayers then race against the clock in teams, adding points to a leaderboard.
        Developed two users flows (desktop for admins and mobile for players) with two team members using Ruby on Rails, Stimulus, HTML, CSS, JS, Mapbox API and OpenWeather API`}
      /> */}

      {/* <ProjectCard
        id={nanoid()}
        name="Find (Hack for Peace Hackathon)"
        desktopImg={[findDesktop]}
        mobileImg={findMobile}
        github="https://github.com/BsBou/hack-for-peace"
        stack={['API', 'JavaScript', 'Tailwind']}
        desc={`Find enables users to locate their missing loved ones by uploading a picture, which then gets compared to a hospital database of unidentified patients, leveraging a facial recognition API.\n Find was developed alongside 3 team members over 2 days at Hack for Peace, a Cross-European Hackathon where over 200 developers and entrepeneurs came together to build anti-war tech products.\n<strong>Our team made it to the finals, coming in 6th place overall</strong>`}
      /> */}
      <ProjectCard
        id={nanoid()}
        name="Where in the World?"
        images={[
          { img: WhereInTheWorld, mobile: false },
          { img: WhereInTheWorldMobile, mobile: true },
        ]}
        url="https://bsbou.github.io/where-in-the-world-/"
        github="https://github.com/BsBou/where-in-the-world-"
        stack={['JavaScript', 'SCSS']}
        desc={`<strong>Discover the world, learn new facts about countries</strong> \nA mobile first web app based on REST countries API, built using vanilla JavaScript, SCSS and HTML
        Features: Dark Mode, Search
        `}
      />
      {/* <ProjectCard
        id={nanoid()}
        name="Whippet Good"
        desktopImg={[WhippetGood, WhippetGoodGif]}
        github="https://github.com/BsBou/whippet-good"
        stack={['Ruby on Rails', 'Stimulus JS', 'SCSS']}
        desc={`An AirBnB clone where you can rent... <strong>Dogs!</strong>
        \n Built with Ruby on Rails, Stimulus JS and SCSS`}
      />  */}
    </section>
  )
}

export default Projects
