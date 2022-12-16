import './index.css'
import Profile from '../../assets/images/Borhan.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelopeSquare,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import Stack from '../Stack'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (
    <section id="about" className="h-screen flex flex-col ">
      <h1 className="text-5xl p-4">About</h1>
      <div className="flex flex-col sm:flex-row flex-grow">
        <div className="profile-body flex flex-col justify-center basis-1/3 items-center py-4">
          <div className=" my-0 mx-auto text-center">
            <img src={Profile} className="m-auto pb-1  w-5/12" alt="profile" />
            <div className="text-5xl m-auto flex justify-evenly w-4/5 p-4">
              <a
                href="https://github.com/BsBou"
                target={'_blank'}
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faSquareGithub} />
              </a>

              <a
                href="https://www.linkedin.com/in/borhanbou/"
                target={'_blank'}
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="mailto:borhan.boulandier@gmail.com"
                target={'_blank'}
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelopeSquare} />
              </a>
            </div>
          </div>
          <span
            className="text-2xl w-2/4 text-center flex justify-evenly items-center pt-4
          "
          >
            <FontAwesomeIcon icon={faLocationDot} />
            London, UK
          </span>
        </div>
        <hr class="mt-4 h-px bg-gray-200 border-0 dark:bg-gray-700" />

        <div className="profile-text flex flex-col text-center basis-2/3 items-center justify-center py-4">
          {/* <div className="border-t-2"> */}
          <div>
            <h3 className="text-2xl py-4">Hey there! I'm Borhan</h3>
            <p className="text-center text-lg pb-3 italic">
              Skilled web developer with a passion for creating intuitive,
              user-friendly websites and applications. Constantly seeking to
              improve and expand my skills. Dedicated to delivering high-quality
              solutions to challenging problems
            </p>
          </div>
        </div>
      </div>
      {/* <div className="tech-stack"> */}
      <Stack />
      {/* </div> */}
    </section>
  )
}

export default About
