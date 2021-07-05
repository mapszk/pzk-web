import { useEffect, useState } from 'react'
import { Title, Para } from '../Texts'
import Button from '../Button'

interface Props {
    id: number;
    title: string;
    desc: string;
    img: string;
    link: string;
}

const Project: React.FC<Props> = ({id, title, desc, img, link}) => {
    const [isLargerThan640, setIsLargerThan640] = useState<boolean>(false)
    useEffect(() => {
        window.addEventListener('resize', ():void=>{
            if(window.innerWidth>640) setIsLargerThan640(false)
            else setIsLargerThan640(true)
        })
        return () => {
            window.removeEventListener('resize', ():void=>{
                if(window.innerWidth>640) setIsLargerThan640(false)
            })
        }
    }, [])
    return(
        <>
            <div className="proj">
                <div className="proj__img">
                    <img src={img} alt={title} />
                </div>
                <div className="proj__desc">
                    <Title>{title}</Title>
                    <Para>{desc}</Para>
                    <div className="button">
                        <Button link={link} color="azul" full={isLargerThan640}>
                            Visit
                        </Button>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .proj{
                    margin: .5rem 0 1rem 0;
                }
                img{
                    border-radius: 10px;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform .5s ease;
                }
                .proj__img{
                    border-radius: 10px;
                    width: 100%;
                    height: 250px;
                    overflow: hidden;
                    margin: 1.5rem 0;
                    flex: 1 0 280px;
                }
                .proj__text{
                    flex: 1 0 1;
                    width: 100%;
                }
                a{
                    color: white;
                }
                @media screen and (min-width: 640px){
                    .proj{
                        display: flex;
                    }
                    .proj__img{
                        flex: 1 0 280px;
                        margin: 0 1rem 0 0;
                        height: initial;
                    }
                    .proj__desc{
                        flex: 1 0 1;
                        height: 100%;
                        justify-content: space-around;
                    }
                }
            `}</style>
        </>
    )
}

export default Project