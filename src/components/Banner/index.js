import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
import './index.css'

const Banner = () => {
  return (
    <div className="banner flex h-screen justify-center items-center">
      <div className="banner-text   flex flex-col justify-between h-full">
        {/* mobile:h-1/5 h-1/3 */}
        <div className="h-4/5 flex flex-col justify-center">
          <h1 className="text-6xl text-center font-medium pb-4 md:text-9xl">
            {' '}
            Borhan Boulandier
          </h1>
          <h1 className="text-5xl text-center font-light">
            Full-stack developer
          </h1>
        </div>
        <div className=" flex flex-col h-1/5">
          <h2 className="text-3xl text-center pb-4">See more</h2>
          <a href="#about" className="text-center">
            <FontAwesomeIcon icon={faCircleArrowDown} size="3x" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Banner
