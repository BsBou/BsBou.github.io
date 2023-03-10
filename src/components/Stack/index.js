// import React, { useEffect, useState } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './index.css'

const Stack = () => {
  const skills = [
    { skill: 'React', icon: 'devicon-devicon-plain' },
    { skill: 'Rails', icon: 'devicon-rails-plain-wordmark' },
    { skill: 'Rspec', icon: 'devicon-rspec-original' },
    {
      skill: 'PostgreSQL',
      icon: 'devicon-postgresql-plain-wordmark',
    },
    { skill: 'Figma', icon: 'devicon-figma-plain' },
    { skill: 'JavaScript', icon: 'devicon-javascript-plain' },
    {
      skill: 'Tailwind',
      icon: 'devicon-tailwindcss-original-wordmark',
    },
    { skill: 'Ruby', icon: 'devicon-ruby-plain-wordmark' },
    { skill: 'Sass/Scss', icon: 'devicon-sass-original' },
  ]

  const skillItems = skills.map((skill) => (
    <SwiperSlide key={skill.skill}>
      <div className="flex flex-col justify-evenly items-center h-24 w-24 md:h-32 md:w-32 border border-black text-6xl active mx-auto">
        <i className={skill.icon}></i>
        <p className="text-sm md:text-base">{skill.skill}</p>
      </div>
    </SwiperSlide>
  ))

  return (
    <div className="flex flex-col items-center py-4 md:w-[80vw] w-full">
      <h2 className="text-3xl py-4">Tech Stack</h2>
      <div className="stack-slider w-full h-full">
        {
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            slidesPerView={3}
            centeredSlides={true}
            breakpoints={{ 600: { slidesPerView: 7 } }}
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
