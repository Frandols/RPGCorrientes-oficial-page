import React, { useEffect, useState } from 'react'

export default function Footer() {
	return (
		<footer className='h-25 d-flex flex-column justify-content-center align-items-center text-center'>
			<div className='social-media'>
				<i className='fab fa-2x fa-instagram'></i>
				<span className='tag'>@kinesiologia.corrientes</span>
			</div>
			<small className='text-muted my-2'>
				Copyright © {new Date().getFullYear()} Kinesiologia Corrientes
			</small>
			<small className='text-muted'>
				Desarrollado por Francisco De Los Santos - franciscodelossantos.com
			</small>
		</footer>
	)
}
