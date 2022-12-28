// import React, { useEffect, useState } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper'

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
    { id: 8, skill: 'Sass/Scss', icon: 'devicon-sass-original colored' },
  ]

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
            centeredSlides={true}
            breakpoints={{ 600: { slidesPerView: 8 } }}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            fadeEffect={{ crossFade: true }}
          >
            {skillItems}
          </Swiper>
        }
        <div className="swiper-button-next-unique"></div>
      </div>
    </div>
  )
}

export default Stack
