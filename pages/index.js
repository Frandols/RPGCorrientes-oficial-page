import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Layout from '../components/Layout';
import ImageSlider from '../components/index/ImageSlider';
import Link from 'next/link';
import Head from 'next/head';

export default function index() {
    const [height, setHeight] = useState(0);
    useEffect(() => {
        setHeight(window.innerHeight);
        window.onresize = () => {
            setHeight(window.innerHeight);
        }
    }, []);
    return (
        <Layout isHomePage={true}>
            <main className="d-flex justify-content-center align-items-center">
                <div className="center d-flex flex-column justify-content-center align-items-center">
                    <h1 className="fw-bold text-light display-1 text-center">RPG CORRIENTES</h1>
                    <h3 className="fw-bold text-center text-light">Matías Nicolás Erro y María Belén Koster</h3>
                    <h5 className="text-light">¡Conocé más!</h5>
                    <i onClick={() => { window.scroll(0, height - 56) }} className="fas fa-2x fa-arrow-alt-circle-down text-light"></i>
                </div>
            </main>
            <section className="d-flex justify-content-center align-items-center text-center">
                <div className="section-wrapper d-flex flex-column justify-content-center align-items-center text-center">
                    <h2 className="fw-bold my-3">¿Que es el RPG?</h2>
                    <p>
                        RPG es Reeducación Postural Global, un método de terapia manual aplicado por Kinesiólogos-Fisioterapeutas, 
                        especializados en esta práctica a través de un programa de capacitación presente en más de veinticinco países 
                        alrededor del mundo.
                    </p>
                    <div className="col w-50 d-flex flex-column justify-content-center align-items-center">
                        <ReactPlayer url='rpgvideo.mp4' controls className="video-player" pip={false} />
                        <ImageSlider />
                    </div>
                    <h2 className="fw-bold my-3">¡Conoce nuestra ubicacion, como contactarnos y mas!</h2>
                    <div className="container py-2 d-flex flex-column justify-content-center align-items-center">
                        <button className="custom-btn my-3">
                            <Link href="/contacto">
                                <a className="text-light text-decoration-none">Contacto</a>
                            </Link>
                        </button>
                        <button className="custom-btn my-3">
                            <Link href="/ubicacion">
                                <a className="text-light text-decoration-none">Ubicacion</a>
                            </Link>
                        </button>
                        <button className="custom-btn my-3">
                            <Link href="/anuncios">
                                <a className="text-light text-decoration-none">Anuncios</a>
                            </Link>
                        </button>
                    </div>
                </div>
            </section>
            <Head>
                <title>RPG Corrientes | Home</title>
            </Head>
        </Layout>
    )
}
