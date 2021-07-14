import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function contacto() {
    const message = 'Este es un mensaje de ejemplo!';
    return (
        <Layout>
            <section className="fill d-flex flex-column justify-content-center align-items-center">
                <h2 className="fw-bold my-3 text-center">Contacto</h2>
                <p className="text-center">
                    ¡Podes contactarnos a traves de nuestro numero de Instagram!
                </p>
                <h5>@kinesiologia.corrientes</h5>
                <p className="text-center">¡O a través de nuestro número de WhatsApp!</p>
                <h5>+54 3794-311796</h5>
                <button className="custom-btn my-3">
                    <Link href={`https://wa.me/543794311796/?text=${message}`}>
                        <a className="text-light text-decoration-none">Mensaje <i className="fab fa-whatsapp"/></a>
                    </Link>
                </button>
            </section>       
        </Layout>
    )
}
