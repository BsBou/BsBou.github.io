import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
import './index.css'
import { motion } from 'framer-motion'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import particlesConfig from '../../config/particlesConfig'
import Typed from 'react-typed'

const Banner = () => {
  const handleClickScroll = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
  }

  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (
    <div
      id="banner"
      className="banner flex h-screen justify-center items-center"
    >
      {/* <Particles init={particlesInit} options={particlesConfig} /> */}
      <div className="banner-text prevent-select flex flex-col justify-between h-full">
        <div className="h-4/5 flex flex-col justify-center">
          <h1 className="text-6xl text-center font-medium pb-4 md:text-9xl">
            {' '}
            Borhan Boulandier
          </h1>
          <Typed
            strings={['Software Engineer']}
            wrapper="div"
            typeSpeed={40}
            className={['text-5xl text-center font-light mx-auto w-[70%]']}
          />
        </div>
        <div className=" flex flex-col h-1/5">
          <h2 className="text-3xl text-center pb-4">See more</h2>
          <motion.button
            animate={{ rotate: [180, 0] }}
            transition={{ duration: 0.5 }}
            href="#about"
            className="text-center w-fit m-auto z-10"
            onClick={handleClickScroll}
          >
            <FontAwesomeIcon icon={faCircleArrowDown} size="3x" />
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default Banner
