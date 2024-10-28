import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'

export default function ubicacion() {
	return (
		<Layout>
			<section className='fill d-flex flex-column justify-content-center align-items-center'>
				<h2 className='fw-bold my-3 text-center'>Ubicacion</h2>
				<p className='text-center'>Nos encontramos en...</p>
				<h5>Carlos Pellegrini 1338, Corrientes Capital</h5>
				<div className='wrapper my-3 w-75 d-flex justify-content-center align-items-center'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.1109895195405!2d-58.8335921!3d-27.465803799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94456ca695e2be45%3A0x5fc224d632d52522!2sCarlos%20Pellegrini%201338%2C%20W3400%20Corrientes!5e0!3m2!1ses-419!2sar!4v1730131451281!5m2!1ses-419!2sar'
						className='map'
						style={{ border: 0, borderRadius: 5 }}
						allowFullScreen=''
						loading='lazy'
					/>
				</div>
				<button className='custom-btn my-3'>
					<Link href='https://maps.app.goo.gl/bcCZPmd8AMQZ9ZSH9'>
						<a className='text-light text-decoration-none'>Ir al mapa</a>
					</Link>
				</button>
			</section>
			<Head>
				<title>Kinesiologia Corrientes | Ubicacion</title>
			</Head>
		</Layout>
	)
}
