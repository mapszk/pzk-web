import { colors } from "../../styles/colors"

interface Props {
  name: string
  img: string
}

const ToolsItem: React.FC<Props> = ({ name, img }) => {
  return (
    <>
      <div className="grid_item">
        <img src={img} alt={name} />
        <h5>{name}</h5>
      </div>
      <style jsx>{`
        .grid_item {
          min-width: 100px;
          min-height: 100px;
          background-color: white;
          padding: 1rem;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          transition: transform 0.5s ease-in-out, box-shadow 0.5s ease;
        }
        .grid_item > img {
          width: 50%;
        }
        .grid_item > h5 {
          margin-top: 0.8rem;
          color: ${colors.azul};
        }
        .grid_item:hover {
          transform: scale(0.95);
          box-shadow: 10px 10px 45px -19px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </>
  )
}

export default ToolsItem
