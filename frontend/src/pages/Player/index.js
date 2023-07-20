import React from 'react'
import styles from './Player.module.css'
import Banner from 'components/Banner'
import videos from 'json/db.json';
import Titulo from 'components/Titulo';
import { useParams } from 'react-router-dom';
import NaoEncontrado from 'pages/NaoEncontrado';

export default function Player() {
    const parametros = useParams();
    const video = videos.find((video) => {
        return video.id === Number(parametros.id);
    })

    if (!video) {
        return <NaoEncontrado />
    }

    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/BwRxBGsT_f0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </section>
        </>
    )
}
