import React from 'react';
import Layout from '../components/Layout';
import Cards from '../components/anuncios/Cards';

export default function anuncios(){
    return(
        <Layout>
            <section className="fill d-flex flex-column justify-content-center align-items-center">
                <h2 className="fw-bold my-3 text-center">Anuncios</h2>
                <Cards />
            </section>       
        </Layout>
    )
}