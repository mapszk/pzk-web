import Button from "../components/Button"
import Layout from "../components/Layout"

const NotFound: React.FC = () => {
  return (
    <Layout title="PZK - Not found">
      <div>
        <img src="/images/error.png" alt="404 not found" />
        <h1>Sorry</h1>
        <p>Apparently the page you're looking for doesn't exist</p>
        <Button color="azul" link="/" mt={1}>
          Go home
        </Button>
      </div>
      <style jsx>{`
        div {
          height: calc(100vh - 150px);
          display: flex;
          width: 85%;
          max-width: 500px;
          margin: auto;
          text-align: center;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        div img {
          width: 60%;
          margin-bottom: 1rem;
          animation: floatMonitor 5s ease-in-out infinite alternate;
        }
        @keyframes floatMonitor {
          0% {
            transform: translateY(0);
          }
          0% {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </Layout>
  )
}

export default NotFound
