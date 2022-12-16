import React, { useEffect, useState } from 'react'
import { Autoplay, Navigation, Pagination, freeMode } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './index.css'

const Stack = () => {
  const skills = [
    { id: 1, skill: 'React', icon: 'devicon-devicon-plain colored' },
    { id: 2, skill: 'Rails', icon: 'devicon-rails-plain-wordmark colored' },
    {
      id: 3,
      skill: 'PostgreSQL',
      icon: 'devicon-postgresql-plain-wordmark colored',
    },
    { id: 4, skill: 'Figma', icon: 'devicon-figma-plain colored' },
    { id: 5, skill: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    {
      id: 6,
      skill: 'Tailwind',
      icon: 'devicon-tailwindcss-original-wordmark colored',
    },
    { id: 7, skill: 'Ruby', icon: 'devicon-ruby-plain-wordmark colored' },
    { id: 8, skill: 'Ruby', icon: 'devicon-ruby-plain-wordmark colored' },
  ]

  // const [visibleSlide, setVisibleSlide] = useState(1)

  const skillItems = skills.map((skill) => (
    <SwiperSlide>
      <div className="flex flex-col justify-evenly items-center  w-24 h-28 border border-black text-6xl active">
        <i className={skill.icon}></i>
        <p className="text-base">{skill.skill}</p>
      </div>
    </SwiperSlide>
  ))

  return (
    <div className="flex flex-col items-center py-4">
      <h2 className="text-3xl py-4">Tech Stack</h2>
      <div className="stack-slider w-full h-full">
        {
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            // spaceBetween={10}
            slidesPerView={3}
            breakpoints={{ 600: { slidesPerView: 8 } }}
            effect={'fade'}
            loop={true}
            autoplay={{ delay: 2000 }}
            fadeEffect={{ crossFade: true }}
            // pagination={{ clickable: true, dynamicBullets: true }}
            navigation={
              {
                // nextEl: '.swiper-button-next-unique',
                // prevEl: '.swiper-button-prev-unique',
              }
            }
          >
            {skillItems}
          </Swiper>
        }
        <div className="swiper-button-next-unique"></div>
      </div>
    </div>
  )

  /* const [index, setIndex] = useState(0)

  const mod = (n, m) => {
    let result = n % m
    return result >= 0 ? result : result + m
  }

  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % skills.length)
    }, 3000)
  }, [index])

  return (
    <div className="flex flex-col items-center h-full">
      <h2 className="text-3xl">Tech Stack</h2>
      <div className="flex h-full items-center w-3/4  border border-black justify-evenly">

        {skills.map((item, i) => {
          const indexLeft = mod(index - 1, skills.length)
          const indexRight = mod(index + 1, skills.length)
          let className = ''

          if (i === index) {
            className = 'active '
          } else if (i === indexRight) {
            className = 'right '
          } else if (i === indexLeft) {
            className = 'left '
          }

          return (
            <div
              key={item.id}
              className={
                className +
                'flex flex-col justify-evenly items-center  p-1 border border-black w-36 h-40 text-6xl'
              }
            >
              <i className={item.icon}></i>
              <p className="text-2xl">{item.skill}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
  */
}

export default Stack
