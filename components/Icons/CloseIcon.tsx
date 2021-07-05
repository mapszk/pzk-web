import { getColor } from "../../styles/colors"

interface Props {
    color: string;
    width: number;
    handleClick: () => void
}

const CloseIcon: React.FC<Props> = ({color, width, handleClick}) => {
  return (
    <svg
      onClick={handleClick}
      viewBox="0 0 32 32"
      width={width+"px"}
      xmlns="http://www.w3.org/2000/svg"
      style={{fill: getColor(color)}}
    >
      <path d="M4 8l4-4 8 8 8-8 4 4-8 8 8 8-4 4-8-8-8 8-4-4 8-8z" />
    </svg>
  )
}

export default CloseIcon