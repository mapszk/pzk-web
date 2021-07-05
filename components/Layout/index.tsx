const Container: React.FC = ({children}) => {
    return (
        <>
            <main>
                {children}
            </main>
            <style jsx>{`
                main{
                    width: 95%;
                    max-width: 960px;
                    margin: 0 auto;
                    min-height: calc(100vh - 100px);
                }    
            `}</style>
        </>
    )
}

export default Container
