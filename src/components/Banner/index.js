import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
import './index.css'

const Banner = () => {
  return (
    <div className="banner flex h-screen justify-center items-center">
      <div className="banner-text h-1/3  flex flex-col justify-between mobile:h-1/5">
        <h1 className="text-4xl text-center">
          Hello! I'm Borhan Boulandier
          <br />A full-stack web developer
        </h1>
        <div className="flex flex-col h-2/5">
          <h2 className="text-3xl text-center">See more</h2>
          <a href="#about" className="text-center">
            <FontAwesomeIcon icon={faCircleArrowDown} size="3x" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Banner
