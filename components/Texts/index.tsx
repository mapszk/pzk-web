import React from "react"
import { getColor } from "../../styles/colors"

interface Props {
  className?: string
  color?: string
}

export const Title: React.FC<Props> = ({ children, className, color }) => {
  return (
    <>
      <h2 className={className}>{children}</h2>
      <style jsx>{`
        h2 {
          color: ${getColor(color)};
          margin: 0 0 0.5rem 0;
        }
      `}</style>
    </>
  )
}

export const Subtitle: React.FC<Props> = ({ children, className, color }) => {
  return (
    <>
      <h4 className={className}>{children}</h4>
      <style jsx>{`
        h4 {
          color: ${getColor(color)};
          margin: 0 0 0.5rem 0;
        }
      `}</style>
    </>
  )
}

export const Para: React.FC<Props> = ({ children, className, color }) => {
  return (
    <>
      <p className={className}>{children}</p>
      <style jsx>{`
        p {
          color: ${getColor(color)};
          margin: 0 0 0.5rem 0;
        }
      `}</style>
    </>
  )
}
