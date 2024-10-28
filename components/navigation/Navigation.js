import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Navigation({ isHomePage }) {
	const [menuOpen, setMenuOpen] = useState(false)
	const [offset, setOffset] = useState(0)
	useEffect(() => {
		window.onscroll = () => {
			setOffset(pageYOffset)
		}
		window.onresize = () => {
			setMenuOpen(false)
		}
	}, [])
	return (
		<nav
			className={`navbar navbar-expand-lg navbar-dark fixed-top ${
				isHomePage ? '' : 'nav-dark'
			} ${offset !== 0 || menuOpen ? 'navbar-bg-light-dark' : ''}`}
		>
			<div className='container-fluid d-flex flex-wrap justify-content-center align-items-center'>
				<a
					className='navbar-brand text-center m-0'
					href='/'
				>
					Kinesiologia Corrientes
				</a>
				<button
					className='navbar-toggler'
					onClick={() => setMenuOpen(!menuOpen)}
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div
					className='collapse navbar-collapse d-flex justify-content-end'
					style={menuOpen ? { height: 160, opacity: 1 } : {}}
				>
					<ul className='navbar-nav h-100 w-100 d-flex flex-wrap justify-content-end align-items-center'>
						<li className='nav-item'>
							<Link href='/'>
								<a
									className='nav-link active text-center'
									onClick={() => setMenuOpen(false)}
								>
									Home
								</a>
							</Link>
						</li>
						<li className='nav-item'>
							<Link href='/contacto'>
								<a
									className='nav-link active text-center'
									onClick={() => setMenuOpen(false)}
								>
									Contacto
								</a>
							</Link>
						</li>
						<li className='nav-item'>
							<Link href='/ubicacion'>
								<a
									className='nav-link active text-center'
									onClick={() => setMenuOpen(false)}
								>
									Ubicacion
								</a>
							</Link>
						</li>
						<li className='nav-item'>
							<Link href='/anuncios'>
								<a
									className='nav-link active text-center'
									onClick={() => setMenuOpen(false)}
								>
									Anuncios
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}
