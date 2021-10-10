import { getColor } from "../../styles/colors"

interface Props {
  color: string
  width: number
}

const Logo: React.FC<Props> = ({ color, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 503.14 107.99"
      width={width + "px"}
    >
      <defs>
        <style>{`.prefix__cls-1{fill:${getColor(color)}`}</style>
      </defs>
      <title>{"logo"}</title>
      <g id="prefix__Capa_2" data-name="Capa 2">
        <g id="prefix__Capa_3" data-name="Capa 3">
          <path
            className="prefix__cls-1"
            d="M415.74 0c-57.54 0-87.4 54-87.4 54s29.86 54 87.4 54 87.4-54 87.4-54-29.86-54-87.4-54zm0 100.6A46.61 46.61 0 11462.35 54a46.61 46.61 0 01-46.61 46.6z"
          />
          <circle className="prefix__cls-1" cx={415.74} cy={53.99} r={27.42} />
          <path
            className="prefix__cls-1"
            d="M0 0h56.93a76.8 76.8 0 0121.56 2.69 41.22 41.22 0 0115.13 7.78 31.24 31.24 0 018.94 12.4 44 44 0 012.94 16.51 43 43 0 01-2.9 16A33.43 33.43 0 0193.72 68a42 42 0 01-15.1 8.36 69.17 69.17 0 01-21.55 3l-35.17-.05V108H0zm57.48 60.38a35.92 35.92 0 0010.88-1.48 21.89 21.89 0 007.81-4.22 16.91 16.91 0 004.7-6.63 23.15 23.15 0 001.55-8.67q0-9.6-6.25-15t-18.69-5.31H21.9v41.31zM172.17 31.3l10.37-12.65h-64.88V0H223.3l-60.45 75.93-10.78 13.4h67.85V108H112.34zM287.76 53.99l52.14 53.99h-29.2l-38.04-39.36-14.19 13.73v25.64h-21.9V0h21.9v55.89l57-55.89h28.05l-55.76 53.99z"
          />
        </g>
      </g>
    </svg>
  )
}

export default Logo
