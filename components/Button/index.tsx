import Link from 'next/link'
import { colors, getColor } from '../../styles/colors'

interface Props {
    color: string;
    ghost?: boolean;
    link?: string;
    isExternal?: boolean;
    onClick?: ()=>void;
    full?: boolean;
    mt?: number;
    mb?: number;
    mr?: number;
    ml?: number;
}

const Button: React.FC<Props> = ({isExternal, link, color, ghost, onClick, full, mt, mb, mr, ml, children}) => {
    return(
        <>
            {
                link 
                ? 
                    isExternal ?
                    <a href={link} rel="noreferrer noopener"  target="_blank"> 
                        {children}
                    </a> :
                    <Link href={link} >
                        <a>
                            {children}
                        </a>
                    </Link> 
                :
                <button onClick={onClick}>
                    {children}
                </button>
            }
            <style jsx>{`
                button{
                    outline: none;
                    margin-top: ${mt+'rem'};
                    margin-bottom: ${mb+'rem'};
                    margin-right: ${mr+'rem'};
                    margin-left: ${ml+'rem'};
                    height: 2.5rem;
                    width: ${full ? '100%' : "max-content"};
                    min-width: 150px;
                    padding: 0 2rem;
                    border-radius: 2.5rem;
                    background-color: ${ghost ? "transparent" : getColor(color)};
                    color: ${ghost ? getColor(color) : color === "azul" ? colors.gris : colors.azul};
                    border: 2px solid ${ghost ? getColor(color) : 'none'};
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    cursor: pointer;
                    font-family: inherit;
                    font-size: 16px;                    
                    transition: transform .5s ease;
                }
                button:hover, button:active{
                    transform: translateY(5px);
                }
                a{
                    margin-top: ${mt+'rem'};
                    margin-bottom: ${mb+'rem'};
                    margin-right: ${mr+'rem'};
                    margin-left: ${ml+'rem'};
                    padding: 0 2rem;
                    height: 2.5rem;
                    width: ${full ? '100%' : "max-content"};
                    min-width: 160px;
                    border-radius: 2.5rem;
                    background-color: ${ghost ? "transparent" : getColor(color)};
                    color: ${ghost ? getColor(color) : color === "azul" ? colors.gris : colors.azul};
                    border: 2px solid ${ghost ? getColor(color) : "none"};
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    transition: transform .5s ease;
                }
                a:hover, button:active{
                    transform: translateY(5px);
                }
            `}</style>
        </>
    )
}

export default Button
