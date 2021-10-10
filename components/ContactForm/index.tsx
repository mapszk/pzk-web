/* eslint-disable prettier/prettier */
import React, { useState } from "react"
import { colors } from "../../styles/colors"

const formEndpoint = 'https://formspree.io/f/xdoyegpk'
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
interface Alert {
  msg?: string
  type?: string
}
interface Props {
  theme?: string
}

const ContactForm: React.FC<Props> = ({ theme }) => {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [msg, setMsg] = useState<string>("")
  const [alert, setAlert] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [alertText, setAlertText] = useState<Alert>({})

  const handleValidation = (e: React.SyntheticEvent): void => {
    e.preventDefault()
    if (name === "" || email === "" || msg === "") {
      setAlert(true)
      setAlertText({ msg: "Please fill all the fields", type: "error" })
      setTimeout((): void => {
        setAlert(false)
        setAlertText({})
      }, 5000)
      return
    } else if (!emailRegex.test(email)) {
      setAlert(true)
      setAlertText({ msg: "Please put a valid email", type: "error" })
      setTimeout((): void => {
        setAlert(false)
        setAlertText({})
      }, 5000)
      return
    } else {
      handleSubmit(name, email, msg, formEndpoint)
    }
  }
  const handleSubmit = (name: string, email: string, msg: string, endpoint: string) => {
    setIsSubmitting(true)
    fetch(endpoint, {
      method: "POST",
      body: JSON.stringify({ name, email, msg }),
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => {
        setAlertText({ msg: "Sent! Thank you", type: "success" })
        setAlert(true)
        setTimeout((): void => {
          setAlert(false)
          setAlertText({})
        }, 5000)
        setName("")
        setEmail("")
        setMsg("")
        setIsSubmitting(false)
      })
      .catch((err) => {
        setAlertText({
          msg: "An error has ocurred, please try again",
          type: "error",
        })
        setAlert(true)
        setTimeout((): void => {
          setAlert(false)
          setAlertText({})
        }, 5000)
        setIsSubmitting(false)
      })
  }

  return (
    <>
      <form onSubmit={handleValidation}>
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
        {alert && <div className="alert">{alertText.msg}</div>}
      </form>
      <style jsx>{`
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
          color: ${theme === "dark" ? colors.verde : colors.azul};
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
          background-color: ${theme === "dark" ? colors.verde : colors.azul};
          color: ${theme === "dark" ? colors.azul : colors.verde};
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
          background-color: ${theme === "dark" ? colors.azul : colors.verde};
          border: 2px solid ${theme === "dark" ? colors.verde : colors.azul};
          color: ${theme === "dark" ? colors.verde : colors.azul};
        }
      `}</style>
    </>
  )
}

export default ContactForm
