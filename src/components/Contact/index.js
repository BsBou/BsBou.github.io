import { useState, useEffect } from 'react'
import { sendForm } from 'emailjs-com'
import './index.css'
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
    <section className="mb-32 text-center text-gray-800" id="contact">
      <h1 className="text-3xl md:text-5xl p-4 font-medium mb-4 md:text-left">
        Let's get in touch!
      </h1>
      <div className="md:max-w-[70%] mx-auto md:mr-0 px-3 lg:px-6">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-6">
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
          <div className="form-group mb-6">
            <textarea
              className="
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
    </section>
  )
}

export default Contact
