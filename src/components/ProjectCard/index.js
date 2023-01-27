import './index.css'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/bundle'

import 'swiper/css/navigation'

const ProjectCard = ({
  id,
  name,
  desktopImg,
  url,
  github,
  desc,
  mobileImg,
}) => {
  const handleClick = () => {
    setSelectedId(id)
  }

  const [selectedId, setSelectedId] = useState(null)

  const [slideWidths, setSlideWidths] = useState([])
  const [activeIndex, setActiveIndex] = useState('')

  function swiperInit(event) {
    event.imagesToLoad.forEach((element, index) => {
      let slideObj = {
        slideActiveIndex: index,
        width: element.width,
      }

      if (
        !slideWidths.some(
          (el) => el['slideActiveIndex'] === slideObj.slideActiveIndex
        )
      ) {
        setSlideWidths((prevSlides) => [...prevSlides, slideObj])
      }
    })
    setActiveIndex(event.activeIndex)
  }

  function handleSlideChange(event) {
    setActiveIndex(event.activeIndex)
  }

  selectedId
    ? (document.body.classList = 'body-modal')
    : (document.body.classList = '')

  return (
    <div className="flex flex-col items-center md:items-start mb-16">
      <motion.div
        layoutId={id}
        whileHover={{
          scale: 0.98,
          transition: { duration: 0.3 },
        }}
        className="md:w-2/3 cursor-pointer"
        onClick={handleClick}
      >
        <motion.img src={desktopImg} alt="demo"></motion.img>
      </motion.div>

      <AnimatePresence>
        {selectedId && (
          <>
            <motion.div
              style={{
                width: `${
                  activeIndex !== ''
                    ? `${slideWidths[activeIndex].width}px`
                    : '74%'
                }`,
              }}
              layoutId={selectedId}
              className="selected-project"
              transition={{ type: 'spring', stiffness: 60 }}
            >
              <Swiper
                onImagesReady={swiperInit}
                onSlideChange={handleSlideChange}
                className="my-swiper"
                modules={[Navigation]}
                navigation={true}
              >
                <SwiperSlide>
                  <motion.img src={desktopImg} alt="demo"></motion.img>
                  <motion.button
                    whileHover={{ rotate: -15, scale: 1.1 }}
                    className="absolute top-2 right-8"
                    onClick={() => setSelectedId(null)}
                  >
                    <FontAwesomeIcon icon={faXmark} className="text-5xl" />
                  </motion.button>
                </SwiperSlide>

                {mobileImg && (
                  <SwiperSlide>
                    <motion.img src={mobileImg} alt="demo"></motion.img>
                    <motion.button
                      whileHover={{ rotate: -15, scale: 1.1 }}
                      className="absolute top-2 right-4"
                      onClick={() => setSelectedId(null)}
                    >
                      <FontAwesomeIcon icon={faXmark} className="text-5xl" />
                    </motion.button>
                  </SwiperSlide>
                )}
              </Swiper>
            </motion.div>
            <div
              className="modal-overlay cursor-pointer"
              id="modal-overlay"
              onClick={() => setSelectedId(null)}
            ></div>
          </>
        )}
      </AnimatePresence>

      <motion.div
        whileInView={{ y: [0, -70, -50] }}
        viewport={{ once: true }}
        transition={{ type: 'spring', duration: 0.8, bounce: 1 }}
        className={`w-4/5 p-4 border bg-gray-50 relative bottom-5 md:bottom-48 md:w-3/5 md:left-1/3 m-auto md:m-0 `}
      >
        <h1 className="text-center text-xl">{name}</h1>
        <p>{desc}</p>
        <div className="flex justify-end">
          <span className="mx-4">
            <a href={url} target="_blank" rel="noreferrer">
              Live demo
            </a>
          </span>
          <span>
            <a href={github} target="_blank" rel="noreferrer">
              Github
            </a>
          </span>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectCard
