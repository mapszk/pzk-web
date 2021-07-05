import { getColor } from "../../styles/colors"

interface Props {
    color: string;
    width: number;
    handleClick: () => void;
    className?: string;
}

const MenuIcon: React.FC<Props> = ({color, width, handleClick, className}) => {
    return ( 
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 283.426 283.426"
        width={width+"px"}
        onClick={handleClick}
        style={{cursor: "pointer"}}
        >
        <g fill={getColor(color)}>
          <path d="M0 40.84h283.426v47.735H0zM0 117.282h283.426v47.735H0zM0 194.851h283.426v47.735H0z" />
        </g>
      </svg>
    )
  }
  
export default MenuIcon