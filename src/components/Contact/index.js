import { useRef } from 'react'
import emailjs from '@emailjs/browser'

import './index.css'
const Contact = () => {
  const YOUR_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE
  const YOUR_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE
  const YOUR_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC
  const RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        form.current,
        YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <section id="contact" className="pb-20">
      <h1 className="text-5xl p-4 ">Contact</h1>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col">
        <label>Name</label>
        <input type="text" name="user_name" className="border" />
        <label>Email</label>
        <input type="email" name="user_email" className="border" />
        <label>Message</label>
        <textarea name="message" className="border mb-4" />
        <div class="g-recaptcha" data-sitekey={RECAPTCHA_SITE_KEY}></div>
        <br />
        <input type="submit" value="Send" />
      </form>
    </section>
  )
}
export default Contact
