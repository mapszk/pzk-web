import css from 'styled-jsx/css'
import { colors } from '../styles/colors'

export const homeStyles = css`
.buttons{
  margin-top: 1rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1{
  color: ${colors.azul};
  animation: 2s fallAnim;
}
.hero__images{
    padding: 0 0 2rem 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    justify-content: center;
    align-items: center;
    animation: 3s fallAnim;
}
.hero__text{
    padding: 2rem 0;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    animation: 2s fallAnim;
}

.monitor{
  grid-column: 2 / 4;
  grid-row: 2 / 4;
  width: 100%; 
  animation: floatMonitor 8s ease infinite alternate;
}
.baldeAzul{
  z-index: -1;
  width: 100%;
  height: 100%;
  grid-column: 1 / 3;
  grid-row: 1 / 3;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  animation: floatPintura 5s ease 1s infinite alternate;
}
.baldeAzul img{
  width: 50%;
  transform: translateX(35px);
}
.baldeVerde{
  z-index: 1;
  width: 100%;
  height: 100%;
  grid-column: 5 / 3;
  grid-row: 5 / 3;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: floatPintura 6s ease 2s infinite alternate;
}
.baldeVerde img{
  width: 50%;
}
.cubo{
  grid-column: 1 / 3;
  grid-row: 3 / 5;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 5rem;
  animation: floatFigura 5s ease infinite alternate;
}
.cubo img{
  width: 50%;
}
.esfera{
  grid-column: 3 / 5;
  grid-row: 1 / 3;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center; 
  align-items: flex-start;
  padding-left: 4rem;
  padding-top: 3rem;
  animation: floatFigura 5s ease infinite alternate;
}
.esfera img{
  width: 35%;
}

img{
  width: 100%;
}


@keyframes floatMonitor{
  0%{ transform: translateY(0); }
  0%{ transform: translateY(14px); }
}
@keyframes floatPintura{
  0%{ transform: translateY(0); }
  100%{ transform: translateY(17px); }
}
@keyframes floatFigura{
  0%{ transform: translateY(0); }
  0%{ transform: translateY(20px); }
}


@keyframes fallAnim{
  0%{
    transform: translateY(-3rem);
    opacity: 0;
  }
  100%{
    transform: translateY(0);
    opacity: 1;
  }
}
@media screen and (min-width: 720px){
    .buttons{
      width: 50%;
      align-items: flex-start;
    }
    .hero__section{
        display: flex;
        height: 500px;
    }
    .hero__images{
        padding: 2rem 0 2rem 0;
        flex: 5;
    }
    .hero__text{
        align-items: flex-start;
        text-align: left;
        flex: 4;
        order: -1;
    }
    h1{
      font-size: 30px;
    }
}
`