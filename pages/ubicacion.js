import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function ubicacion() {
    return (
        <Layout>
            <section className="fill d-flex flex-column justify-content-center align-items-center">
                <h2 className="fw-bold my-3 text-center">Ubicacion</h2>
                <p className="text-center">
                    Nos encontramos en...
                </p>
                <h5>9 de Julio 1813</h5>
                <div className="wrapper my-3 w-75 d-flex justify-content-center align-items-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.070820232034!2d-58.829742784404935!3d-27.46705448289208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94456b5f3fe98dc7%3A0xd6eb92f1d694d47!2s9%20de%20Julio%201813%2C%20W3400%20AZJ%2C%20Corrientes!5e0!3m2!1ses-419!2sar!4v1626236176378!5m2!1ses-419!2sar" 
                    className="map"
                    style={{border:0, borderRadius: 5}} 
                    allowFullScreen="" 
                    loading="lazy" />
                </div>
                <button className="custom-btn my-3">
                    <Link href="https://goo.gl/maps/hdU1iRYTq9FXno7g9">
                        <a className="text-light text-decoration-none">Ir al mapa</a>
                    </Link>
                </button>
            </section>       
        </Layout>
    )
}