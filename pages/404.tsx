import { useRouter } from "next/dist/client/router"
import { Title } from "../components/Texts"
import Button from "../components/Button"

const NotFound: React.FC = () => {
    const router = useRouter()
    return(
        <>
            <div>
                <img src="/images/error.png" alt="404 not found" />
                <Title>Sorry, apparently the page you're looking for doesn't exist</Title>
                <Button color="azul" link="/" mt={1}>Go home</Button>
            </div>
            <style jsx>{`
                div{
                    height: calc(100vh - 150px);
                    display: flex;
                    width: 100%;
                    max-width: 500px;
                    margin: auto;
                    text-align: center;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                div img{
                    width: 60%;
                    margin-bottom: 1rem;
                }
            `}</style>
        </>
    )
}

export default NotFound
