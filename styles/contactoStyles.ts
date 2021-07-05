import css from 'styled-jsx/css'
import { colors } from '../styles/colors'

export const contactoStyles = css`
.form__section{
    background-color: ${colors.azul};
    border-radius: 1rem ;
    padding: 1rem;
}
.general{
    padding: 0;
}
h2,h4,h5,p{
    color: ${colors.azul};
}
.grid{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 1rem;
    margin: 1rem 0;
}
.grid__item{
    background-color: white;
    padding: 1rem;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: transform .5s ease-in-out, box-shadow .5s ease;
}
.grid__item>h5{
    margin-top: .5rem;
}
.grid__item:hover{
    transform: scale(0.95);
    box-shadow: 10px 10px 45px -19px rgba(0,0,0,0.25);
}

@media screen and (min-width: 720px){
    .general{
        display: flex;
        justify-content: space-between;
    }
    .aboutme__section{
        width: 50%;
    }
    .form__section{
        width: 45%;
        order: 1;
        align-self: flex-start;
    }
}
`