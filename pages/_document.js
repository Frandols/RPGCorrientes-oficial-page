import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html>
				<Head>
					<meta charSet='utf-8' />
					<link
						rel='icon'
						href='favicon.ico'
						sizes='32x32'
					/>
					<meta
						name='theme-color'
						content='#000'
					/>
					<meta
						name='title'
						content='Kinesiologia Corrientes'
					/>
					<meta
						name='subject'
						content='Kinesiologia Corrientes'
					/>
					<meta
						name='language'
						content='spanish'
					/>
					<meta
						name='searchtitle'
						content='Kinesiologia Corrientes'
					/>
					<meta
						name='description'
						content='Kinesiologia Corrientes, Carlos Pellegrini 1338 - Corrientes Capital. Especialistas en columna y rehabilitacion traumatologica.'
					/>
					<meta
						name='author'
						content='Francisco De Los Santos - www.franciscodelossantos.com'
					/>
					<link
						rel='stylesheet'
						href='https://use.fontawesome.com/releases/v5.15.3/css/all.css'
						integrity='sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk'
						crossorigin='anonymous'
					></link>
					<link
						rel='preconnect'
						href='https://fonts.googleapis.com'
					/>
					<link
						rel='preconnect'
						href='https://fonts.gstatic.com'
						crossorigin
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600&display=swap'
						rel='stylesheet'
					></link>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
