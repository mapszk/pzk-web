import React from "react"
import { getColor } from "../../styles/colors"

interface Props {
    color: string;
    width: number;
}

const MailIcon: React.FC<Props> = ({color, width}) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width+'px'}
        viewBox="0 0 24 24"
        fill={getColor(color)}
      >
        <path d="M12 12.713L.015 3h23.97L12 12.713zm0 2.574L0 5.562V21h24V5.562l-12 9.725z" />
      </svg>
    )
  }
  
  export default MailIcon
  