import { useState, useEffect } from 'react'
import { sendForm } from 'emailjs-com'
import { motion } from 'framer-motion'
import { ReactComponent as LinkedInSVG } from '../../assets/images/linkedin.svg'
import { ReactComponent as GithubSVG } from '../../assets/images/github.svg'
import { ReactComponent as MailSVG } from '../../assets/images/mail.svg'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Contact = () => {
  const YOUR_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE
  const YOUR_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE
  const YOUR_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC
  // const RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  })
  const [formValid, setFormValid] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    setFormValid(
      formData.user_name.length > 0 &&
        formData.user_email.length > 0 &&
        formData.message.length > 0
    )
  }, [formData])

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formValid) return
    const form = event.target
    sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form, YOUR_PUBLIC_KEY)
      .then(() => {
        setFormData({
          user_name: '',
          user_email: '',
          message: '',
        })
        setSubmitted(true)
      })
      .catch((error) => console.error(error))
  }
  return (
    <section
      className="mb-32 text-center text-gray-800 bg-[#02044A]  rounded-2xl"
      id="contact"
    >
      <div className="flex flex-col md:flex-row p-8 md:p-16">
        <div className="md:w-3/5 text-gray-100 flex flex-col">
          <h1 className="text-5xl md:p-4 mb-4 font-medium text-center md:text-left">
            Let's work together!
          </h1>
          <h4 className="text-left text-gray-500 md:pl-4 px-2 md:w-3/5 mb-4">
            <i>
              Always happy to chat, feel free to send a message and I will get
              back to you soon!
            </i>
          </h4>
          <div className="flex-grow flex flex-col justify-evenly md:ml-6">
            <div className="text-sm md:text-base text-left hover:border-[#0C75FF] hover:border-2 hover:bg-[#030D58] md:w-1/2 rounded-xl flex items-center ">
              <a href="mailto:borhan.boulandier@gmail.com" className="pl-4">
                <MailSVG className="w-4 h-4 md:w-6 md:h-6" />
              </a>
              <h3 className="m-4">borhan.boulandier@gmail.com</h3>
            </div>
            <div className="text-sm md:text-base text-left hover:border-[#0C75FF] hover:border-2 hover:bg-[#030D58] md:w-1/2 rounded-xl flex items-center ">
              <a
                href="https://goo.gl/maps/sk91BQQFthDrQSQ86"
                className="pl-4 text-base md:text-2xl"
              >
                <FontAwesomeIcon icon={faLocationDot} />
              </a>
              <h3 className="m-4">London, United Kingdom</h3>
            </div>
          </div>

          <span className="flex flex-grow md:ml-4 md:w-1/5 md:items-center justify-end md:justify-evenly">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/BsBou"
              target={'_blank'}
              rel="noreferrer"
            >
              <GithubSVG className="contact-socials" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/borhanbou/"
              target={'_blank'}
              rel="noreferrer"
            >
              <LinkedInSVG className="contact-socials" />
            </motion.a>
          </span>
        </div>
        <div className="md:w-2/5 md:mx-auto md:mr-0 p-4 lg:px-6 bg-gray-200 rounded-2xl text-left md:h-[60vh]">
          <form onSubmit={handleSubmit} className="flex flex-col h-full">
            <div className="form-group mb-6">
              <label for="user_name">Your name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-6">
              <label for="user_email">Your email</label>

              <input
                type="email"
                name="user_email"
                placeholder="Email"
                className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-6 flex-grow">
              <label for="message">Message</label>

              <textarea
                className=" h-[86%]
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
                id="exampleFormControlTextarea13"
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Message"
              ></textarea>
            </div>
            <div className="form-group mb-6">
              <button
                disabled={!formValid}
                type="submit"
                className={`
          w-full
          px-6
          py-2.5
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          transition
          duration-150
          ease-in-out
          ${
            submitted
              ? 'bg-green-600 hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg'
              : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg'
          }
          `}
              >
                {submitted ? 'Email sent!' : 'Send'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
