import css from 'styled-jsx/css'
import { colors } from '../../styles/colors'

export const styles = css`
.navbar{
    height: 50px;
    display: flex;
    align-items: center;
    background-color: ${colors.gris}
}
.navbar__container{
    width: 95%;
    max-width: 960px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
}
.navbar__list{
    list-style: none;
    display: inline-flex;
}
.navbar__list_item{
    margin-left: 2rem;
    font-weight: 600;
    display: none;
}
.navbar__link{
    text-decoration: none;
    color: ${colors.azul};
    position: relative;
}
.navbar__link::after{
    content: "";
    height: .3rem;
    background-color: ${colors.verde};
    width: 100%;
    position: absolute;
    bottom: -7px;
    left: 0;
    transform: scaleX(0);
    transition: transform .6s ease;
    transform-origin: left;
}
.navbar__link:hover.navbar__link::after{
    transform: scaleX(1);
}
.menu-on{
    background-color: white;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 99;
    transition: transform 1s ease;
    background-color: ${colors.gris};
}
.menu-off{
    position: fixed;
    height: 100vh;
    width: 100vw;
    transform: translateX(1000%);
    transition: transform 1s ease;
    background-color: ${colors.gris};
}
.menu__list{
    list-style: none;
    text-align: center;
    padding: 0;
    margin: 0;
    position: absolute;
}
.menu__list_item{
    margin: 2rem 0;
}
.menu__link{
    text-decoration: none;
    color: ${colors.azul};
    font-weight: 600;
}
.menu__close{
    right: calc(-100vw / 2 + 30px);
    top: calc(-100vh / 2 + 30px);
    position: relative;
}

@media screen and (min-width: 720px){
    .navbar__list_item{
        display: block;
    }
    .menu__open{
        display: none;
    }
    .menu-off{
        visibility: hidden;
    }
}
`