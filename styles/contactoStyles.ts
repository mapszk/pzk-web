import css from "styled-jsx/css"
import { colors } from "../styles/colors"

export const contactoStyles = css`
  .form__section {
    background-color: ${colors.azul};
    border-radius: 1rem;
    padding: 1rem;
  }
  .general {
    padding: 0;
  }
  h2,
  h4,
  h5,
  p {
    color: ${colors.azul};
  }

  @media screen and (min-width: 720px) {
    .general {
      display: flex;
      justify-content: space-between;
    }
    .aboutme__section {
      width: 50%;
    }
    .form__section {
      width: 45%;
      order: 1;
      align-self: flex-start;
    }
  }
`
