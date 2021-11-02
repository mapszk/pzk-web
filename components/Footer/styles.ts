import css from "styled-jsx/css"
import { colors } from "../../styles/colors"

export const footerStyles = css`
  .container {
    height: 100%;
    max-width: 200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer {
    height: 50px;
    background-color: ${colors.gris};
    width: 100%;
  }
  h5 {
    color: ${colors.azul};
    font-weight: 500;
    margin-left: 0.5rem;
  }
  img {
    height: 22px;
    transition: transform 1s ease;
  }
  img:hover {
    transform: translateY(5px);
  }
`
