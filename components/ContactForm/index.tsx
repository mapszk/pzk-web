/* eslint-disable prettier/prettier */
import React, { useState } from "react"
import { colors } from "../../styles/colors"
import { submit } from "./submit"
interface Alert {
  message?: string
  type?: string
}

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [msg, setMsg] = useState<string>("")
  const [alert, setAlert] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [alertText, setAlertText] = useState<Alert>({})

  const clearAlert = () => {
    setTimeout(()=> {
      setAlert(false)
      setAlertText({})
    }, 5000)
  }
  const submitForm = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    const {message, type} = await submit(name, email, msg)
    setAlert(true)
    setAlertText({type, message})
    setIsSubmitting(false)
    clearAlert()
  }

  return (
    <>
      <form onSubmit={submitForm}>
        <h1>Contact</h1>
        <label>
          Name
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </label>
        <label>
          Email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
        </label>
        <label htmlFor="mensaje">Message</label>
        <textarea
          value={msg}
          maxLength={120}
          onChange={(e) => setMsg(e.target.value)}
          id="mensaje"
        ></textarea>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send"}
        </button>
        {alert && <div className="alert">{alertText.message}</div>}
      </form>
      <style jsx>{`
        h1{
          color: ${colors.verde};
        }
        .alert {
          color: ${alertText.type === "error" ? colors.gris : colors.azul};
          background-color: ${alertText.type === "error"
          ? "crimson"
          : colors.verde};
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          margin: 1rem 0 0 0;
          padding: 0.6rem 0 0.5rem 0;
          border-radius: 2.5rem;
        }
        .form__section > h2,
        label {
          color: ${colors.verde};
          margin-bottom: 0.5rem;
        }
        input {
          outline: none;
          display: block;
          width: 100%;
          resize: none;
          height: 2.5rem;
          border-radius: 2rem;
          border: none;
          padding: 0 1rem;
          margin: 0.5rem 0 1rem 0;
          font-size: 1rem;
          font-family: inherit;
        }
        input:focus {
          border: 2px solid ${colors.verde};
        }
        textarea {
          outline: none;
          resize: none;
          border: none;
          border-radius: 1rem;
          display: block;
          width: 100%;
          height: 10rem;
          margin: 0.5rem 0 1rem 0;
          padding: 0.7rem;
          font-family: inherit;
          font-size: 1rem;
        }
        textarea:focus {
          border: 2px solid ${colors.verde};
        }
        button {
          outline: none;
          width: 100%;
          height: 2.5rem;
          border-radius: 2.5rem;
          border: none;
          background-color: ${colors.verde};
          color: ${colors.azul};
          font-family: inherit;
          font-size: 1rem;
          transition: background-color 0.5s ease, border 0.2s ease,
            color 0.5s ease;
          cursor: pointer;
        }
        button[disabled] {
          cursor: wait;
          opacity: 0.25;
        }
        button:hover,
        button:focus {
          background-color: ${colors.azul};
          border: 2px solid ${colors.verde};
          color: ${colors.verde};
        }
      `}</style>
    </>
  )
}

export default ContactForm
