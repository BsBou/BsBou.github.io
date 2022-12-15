import React from 'react'
import './index.css'

const Stack = () => {
  const skills = [
    { skill: 'React', icon: 'devicon-devicon-plain' },
    { skill: 'Rails', icon: 'devicon-rails-plain-wordmark colored' },
    { skill: 'PostgreSQL', icon: 'devicon-postgresql-plain-wordmark' },
    { skill: 'Figma', icon: 'devicon-figma-plain' },
    { skill: 'JavaScript', icon: 'devicon-javascript-plain' },
    { skill: 'Tailwind', icon: 'devicon-tailwindcss-original-wordmark' },
    { skill: 'Ruby', icon: 'devicon-ruby-plain-wordmark' },
  ]

  const skillItems = skills.map((skill) => (
    <li>
      <i className={skill.icon}>{skill.skill}</i>
    </li>
  ))
  return <ul>{skillItems}</ul>
}

export default Stack
