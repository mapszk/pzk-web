import ToolsItem from "./ToolsItem"

interface Tool {
  name: string
  img: string
  id: number
}

interface Props {
  tools: Tool[]
}

const Tools: React.FC<Props> = ({ tools }) => {
  return (
    <>
      <div className="grid">
        {tools.map((tool) => (
          <ToolsItem key={tool.id} name={tool.name} img={tool.img} />
        ))}
      </div>
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          gap: 1rem;
          margin: 1rem 0;
        }
      `}</style>
    </>
  )
}

export default Tools
