import './index.css'
import Profile from '../../assets/images/Borhan.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Stack from '../Stack'

const About = () => {
  return (
    <div id="about" className="h-screen flex flex-col">
      <div className="flex">
        <div className="left-profile flex flex-col justify-center basis-1/3 items-center">
          <div className=" my-0 mx-auto w-5/12 text-center">
            <img src={Profile} className="m-auto pb-1" alt="profile" />
            <p className="text-center text-lg pb-3">
              Currently a Teaching Assistant at Le Wagon in London, UK, a
              full-stack web development bootcamp
            </p>
          </div>
          <span
            className="text-2xl w-2/5 text-center flex justify-evenly items-center
          "
          >
            <FontAwesomeIcon icon={faLocationDot} />
            London, UK
          </span>
        </div>
        <div className="right-profile flex flex-col text-center justify-center basis-2/3 items-center">
          <h1 className="text-4xl">Borhan Boulandier</h1>
          <h2 className="text-3xl">Freelance full-stack developer</h2>
          <p className="text-xl w-7/12">
            I'm a full-stack web developer based in London, UK.
            <br />
            Interested in creative solutions to challenging projects.
          </p>
          <p className="text-xl w-7/12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="tech-stack">
        <Stack />
      </div>
    </div>
  )
}

export default About
