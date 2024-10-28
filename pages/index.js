import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import ReactPlayer from 'react-player'
import Layout from '../components/Layout'
import ImageSlider from '../components/index/ImageSlider'

export default function index() {
	const message =
		'Hola Matias! Vengo desde tu pagina web y estoy interesado en contactarte...'
	return (
		<Layout isHomePage={true}>
			<main className='d-flex justify-content-center align-items-center'>
				<div className='center d-flex flex-column justify-content-center align-items-center'>
					<h1 className='fw-bold text-light display-1 text-center'>
						KINESIOLOGIA CORRIENTES
					</h1>
					<h3 className='fw-lighter text-center text-light'>
						Matías Nicolás Erro y María Belén Koster
					</h3>
					<button
						onClick={() =>
							window.open(
								`https://wa.me/543794311796/?text=${message}`,
								'_blank'
							)
						}
						className='custom-btn_2'
					>
						¡Pedi tu turno! <i className='far fa-edit' />
					</button>
				</div>
			</main>
			<section className='d-flex justify-content-center align-items-center text-center'>
				<div className='section-wrapper d-flex flex-column justify-content-center align-items-center text-center'>
					<h2 className='fw-bold my-3'>¿Que es el RPG?</h2>
					<p>
						RPG es Reeducación Postural Global, un método de terapia manual
						aplicado por Kinesiólogos-Fisioterapeutas, especializados en esta
						práctica a través de un programa de capacitación presente en más de
						veinticinco países alrededor del mundo.
					</p>
					<div className='col w-50 d-flex flex-column justify-content-center align-items-center'>
						<ReactPlayer
							url='rpgvideo.mp4'
							className='video-player'
							controls
							pip={false}
						/>
						<ImageSlider />
					</div>
					<h2 className='fw-bold my-3'>
						¡Conoce nuestra ubicacion, como contactarnos y mas!
					</h2>
					<div className='container py-2 d-flex flex-column justify-content-center align-items-center'>
						<button className='custom-btn my-3'>
							<Link href='/contacto'>
								<a className='text-light text-decoration-none'>Contacto</a>
							</Link>
						</button>
						<button className='custom-btn my-3'>
							<Link href='/ubicacion'>
								<a className='text-light text-decoration-none'>Ubicacion</a>
							</Link>
						</button>
						<button className='custom-btn my-3'>
							<Link href='/anuncios'>
								<a className='text-light text-decoration-none'>Anuncios</a>
							</Link>
						</button>
					</div>
				</div>
			</section>
			<Head>
				<title>Kinesiologia Corrientes | Home</title>
			</Head>
		</Layout>
	)
}
