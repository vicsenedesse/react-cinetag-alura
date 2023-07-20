import Banner from "components/Banner";
import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import Titulo from "components/Titulo";
import Card from "components/Card"
import styles from './Inicio.module.css';
import { useState, useEffect } from "react";

function Inicio() {
    const [videos, setVideos] = useState([]);
    // O hook useEffect possibilita realizar alterações após a 
    // primeira renderização, como no caso de requisições que são situações assíncronas.
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/monicahillman/cinetag-api/videos')
        .then(resposta => resposta.json())
        .then(dados => {
            setVideos(dados)
        })
    }, [])

    return (
        <>
            <Banner imagem="home"/>
            <Titulo>
                <h1>Um lugar para aguardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                    // destructuring (desestruturação)
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </>
    )
}

export default Inicio;